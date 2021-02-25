// SELECTORS
// Links
const links = Array.from(document.getElementsByClassName("nav-link"));

// Pages
const homePage = document.getElementById("home-page");
const formPage = document.getElementById("form-page");

// Inputs
const searchInput = document.getElementById("search");
const titleInput = document.getElementById("bp-title-input");
const contentInput = document.getElementById("bp-content-input");

// Elements
const loader = document.getElementById("loader");
const bpContainer = document.getElementById("blog-posts-container");
const submitBpBtn = document.getElementById("submit");
const error = document.getElementById("error");

// DATA
const baseUrl = "https://jsonplaceholder.typicode.com";
let blogPosts = [];
let isEditing = false;
let editedBlogPostId = null;

// FUNCTIONS
const changePageInView = page => {
  switch (page) {
    case "nav-home":
      changeDisplay(homePage, formPage, links[1], links[0]);
      changeDisplay(searchInput);
      break;
    case "nav-form":
      changeDisplay(formPage, homePage, links[0], links[1]);
      changeDisplay(null, searchInput);
      break;
    default:
      changeDisplay(homePage, formPage, links[1], links[0]);
      break;
  }
};

const changeDisplay = (showEl, hideEl, activeLink, inactiveLink) => {
  if (showEl) {
    showEl.style.display = "block";
  }
  if (hideEl) {
    hideEl.style.display = "none";
  }
  if (activeLink) {
    activeLink.classList.remove("active");
  }
  if (inactiveLink) {
    inactiveLink.classList.add("active");
  }
};

const getPosts = async () => {
  changeDisplay(loader, homePage);
  const response = await fetch(`${baseUrl}/posts`);
  const bps = await response.json();
  blogPosts = bps.map(bp => new BlogPost(bp.id, bp.userId, bp.title, bp.body));
  changeDisplay(homePage, loader);
  renderBlogPosts(blogPosts);
};

const submitBlogPost = async () => {
  changeDisplay(null, error);
  if (areInputsValid([titleInput, contentInput])) {
    const blogPost = new BlogPost(
      null,
      1,
      titleInput.value,
      contentInput.value
    );
    const stringifiedBlogPost = JSON.stringify(blogPost);

    const response = await fetch(`${baseUrl}/posts`, {
      method: "POST",
      body: stringifiedBlogPost,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const bp = await response.json();
    const newBlogPost = new BlogPost(bp.id, bp.userId, bp.title, bp.body);
    blogPosts.unshift(newBlogPost);
    renderBlogPosts(blogPosts);
    changePageInView("nav-home");
    cleanUpInputs([titleInput, contentInput]);
  } else {
    changeDisplay(error);
  }
};

const editPost = async () => {
  changeDisplay(null, error);
  if (areInputsValid([titleInput, contentInput])) {
    const blogPost = {
        body: contentInput.value,
        title: titleInput.value,
    }
    const stringifiedBlogPost = JSON.stringify(blogPost);
    const response = await fetch(`${baseUrl}/posts/${editedBlogPostId}`, {
      method: "PATCH",
      body: stringifiedBlogPost,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const bp = await response.json();
    const newBlogPost = new BlogPost(bp.id, bp.userId, bp.title, bp.body);
    const index = blogPosts.findIndex(blogPost => blogPost.id === bp.id);
    blogPosts[index] = newBlogPost;
    renderBlogPosts(blogPosts);
    changePageInView("nav-home");
    cleanUpInputs([titleInput, contentInput]);
  } else {
    changeDisplay(error);
  }
}

const cleanUpInputs = inputs => inputs.forEach(input => (input.value = ""));

const areInputsValid = inputs => inputs.every(input => !!input.value);

const renderBlogPosts = posts => {
  bpContainer.innerHTML = "";

  posts.forEach(blogPost => {
    bpContainer.innerHTML += `
            <div class="col-md-4 mt-2">
              <div class="card">
                <h5 class="card-header">${blogPost.title}</h5>
                <div class="card-body">
                  <p class="card-text">
                    ${blogPost.body}
                  </p>
                  <a href="#" class="btn btn-primary" id="comments-link-${blogPost.id}">Comments</a>
                  <a href="#" class="btn btn-warning" id="comments-edit-${blogPost.id}">Edit</a>
                  <a href="#" class="btn btn-danger" id="comments-delete-${blogPost.id}">Delete</a>
                  <ul class="list-group list-group-flush" id="comments-list-${blogPost.id}">
                  </ul>
                </div>
              </div>
            </div>
        `;
  });
  setCommentBtnEventHandlers(blogPosts);
  setEditBtnEventHandler(blogPosts);
  setDeleteBtnEventHandlers(blogPosts);
};

// Get and render comments
const renderComments = async blogPostId => {
  const commentsList = document.getElementById(`comments-list-${blogPostId}`);

  const response = await fetch(`${baseUrl}/posts/${blogPostId}/comments`);
  const comments = await response.json();

  if (!comments.length) {
    commentsList.innerHTML += `<li>No comments for this blog post.</li>`;
    return;
  }

  comments.map(
    comment =>
      new BlogComment(
        comment.name,
        comment.body,
        comment.email,
        comment.postId,
        comment.id
      )
  ).forEach(comment => {
        commentsList.innerHTML += `
            <li class="list-group-item">
                <strong>${comment.name}</strong>
                <p>${comment.body}</p>
                <em>Author: ${comment.email}</em>
            </li>
        `
  })
};

const deleteBlogPost = async blogPostId => {
    changeDisplay(loader, homePage);
    const response = await fetch(`${baseUrl}/posts/${blogPostId}`, {
        method: 'DELETE',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    
    const index = blogPosts.findIndex(bp => bp.id === blogPostId);
    blogPosts.splice(index, 1);
    renderBlogPosts(blogPosts);
    changeDisplay(homePage, loader);
}

// EVENT HANDLERS

const setCommentBtnEventHandlers = posts =>
  posts
    .map(post => document.getElementById(`comments-link-${post.id}`))
    .forEach(btn =>
      btn.addEventListener("click", e => {
        e.preventDefault();
        const blogPostId = Number(e.target.id.split("-")[2]);
        renderComments(blogPostId);
      })
    );

const setDeleteBtnEventHandlers = posts =>
    posts
      .map(post => document.getElementById(`comments-delete-${post.id}`))
      .forEach(btn =>
        btn.addEventListener("click", e => {
          e.preventDefault();
          const blogPostId = Number(e.target.id.split("-")[2]);
          deleteBlogPost(blogPostId);
        })
      );

const setEditBtnEventHandler = posts => posts
            .map(post => ({
                    btn: document.getElementById(`comments-edit-${post.id}`),
                    post: post
                })).forEach(obj => obj.btn.addEventListener('click', () => {
                    isEditing = true;
                    changePageInView('nav-form');
                    titleInput.value = obj.post.title;
                    contentInput.value = obj.post.body;
                    editedBlogPostId = obj.post.id;
                }))

            // document.getElementById(`comments-edit-${post.id}`)

submitBpBtn.addEventListener("click", () => !isEditing ? submitBlogPost() : editPost());
// alternative to the ternary operator
// if (!isEditing) {
//     submitBlogPost();
// } else {
//     editPost();
// }

searchInput.addEventListener("input", e =>
  renderBlogPosts(
    blogPosts.filter(bp =>
      bp.title.toLowerCase().includes(e.target.value.toLowerCase())
    )
  )
);

const setNavEventHandlers = () =>
  links.forEach(link =>
    link.addEventListener("click", e => changePageInView(e.target.id))
  );

// MODELS
function BlogPost(id, userId, title, body) {
  this.id = id;
  this.userId = userId;
  this.title = title;
  this.body = body;
}

function BlogComment(name, body, email, postId, id) {
  this.name = name;
  this.body = body;
  this.email = email;
  this.postId = postId;
  this.id = id;
}

// Initialization

(() => {
  setNavEventHandlers();
  changePageInView();
  getPosts();
  changeDisplay(null, error);
})();

// Query Params
// comments?postId=1&author=ivo

// {
//     postId: 1
// }
