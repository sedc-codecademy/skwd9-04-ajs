// SELECTORS
// Links
const links = Array.from(document.getElementsByClassName('nav-link'));

// Pages
const homePage = document.getElementById('home-page');
const formPage = document.getElementById('form-page');

// Inputs
const searchInput = document.getElementById('search');
const titleInput = document.getElementById('bp-title-input');
const contentInput = document.getElementById('bp-content-input')

// Elements
const loader = document.getElementById('loader');
const bpContainer = document.getElementById('blog-posts-container');
const submitBpBtn = document.getElementById('submit');
const error = document.getElementById('error');

// DATA
const baseUrl = 'https://jsonplaceholder.typicode.com';
let blogPosts = [];

// FUNCTIONS
const changePageInView = page => {
    switch (page) {
        case 'nav-home':
            changeDisplay(homePage, formPage, links[1], links[0]);
            changeDisplay(searchInput);
            break;
        case 'nav-form':
            changeDisplay(formPage, homePage, links[0], links[1]);
            changeDisplay(null, searchInput);
            break;
        default:
            changeDisplay(homePage, formPage, links[1], links[0]);
            break;
    }
}

const changeDisplay = (showEl, hideEl, activeLink, inactiveLink) => {
    if (showEl) {
        showEl.style.display = 'block';
    }
    if (hideEl) {
        hideEl.style.display = 'none';
    }
    if (activeLink) {
        activeLink.classList.remove('active');
    }
    if (inactiveLink) {
        inactiveLink.classList.add('active');
    }
}

const getPosts = () => {
    changeDisplay(loader, bpContainer);

    fetch(`${baseUrl}/posts`)
    .then(res => {
        if (res.ok) {
            return res.json()
        } else {
            throw new Error(res.status);
        }
    })
    .then(bps => {
        blogPosts = bps.map(bp => new BlogPost(bp.id, bp.userId, bp.title, bp.body));
        renderBlogPosts(blogPosts);
        changeDisplay(bpContainer, loader);
    })
    .catch(() => changeDisplay(null, loader))
}

const submitBlogPost = () => {
    changeDisplay(null, error);
    if (areInputsValid([titleInput, contentInput])) {
        const blogPost = new BlogPost(null, 1, titleInput.value, contentInput.value);
        const stringifiedBlogPost = JSON.stringify(blogPost);
        
        fetch(`${baseUrl}/posts`, {
            method: 'POST',
            body: stringifiedBlogPost,
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error('Something is wrong')
            }
        }).then(bp => {
            const blogPost = new BlogPost(bp.id, bp.userId, bp.title, bp.body)
            blogPosts.unshift(blogPost);
            renderBlogPosts(blogPosts);
            changePageInView('nav-home');
            cleanUpInputs([titleInput, contentInput]);
        }).catch(err => alert(err))
    } else {
        changeDisplay(error)
    }
}

const cleanUpInputs = inputs => inputs.forEach(input => input.value = '');

const areInputsValid = inputs => inputs.every(input => !!input.value)

const renderBlogPosts = posts => {
    bpContainer.innerHTML = '';

    posts.forEach(blogPost => {
        bpContainer.innerHTML += 
        `
            <div class="col-sm mt-2">
              <div class="card">
                <h5 class="card-header">${blogPost.title}</h5>
                <div class="card-body">
                  <p class="card-text">
                    ${blogPost.body}
                  </p>
                </div>
              </div>
            </div>
        `
    })
}

// EVENT HANDLERS

// searchInput
//     .addEventListener('input', 
//     e => {
//         const filteredBlogPosts = blogPosts.filter(bp => 
//             bp.title.toLowerCase().includes(e.target.value.toLowerCase()))
//         renderBlogPosts(filteredBlogPosts);
//     })

submitBpBtn.addEventListener('click', submitBlogPost)

searchInput
    .addEventListener('input', 
    e => renderBlogPosts(blogPosts.filter(bp => 
            bp.title.toLowerCase().includes(e.target.value.toLowerCase()))))

const setNavEventHandlers = () =>
    links.forEach(link => link.addEventListener('click', e => changePageInView(e.target.id)))

// MODELS
function BlogPost(id, userId, title, body) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.body = body;
}

// Initialization

(() => {
    setNavEventHandlers();
    changePageInView();
    getPosts();
    changeDisplay(null, error)
})()