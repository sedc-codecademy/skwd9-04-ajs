// SELECTORS
// Links
const links = Array.from(document.getElementsByClassName('nav-link'));

// Pages
const homePage = document.getElementById('home-page');
const formPage = document.getElementById('form-page');

// Elements
const loader = document.getElementById('loader');
const bpContainer = document.getElementById('blog-posts-container');

// DATA
const baseUrl = 'https://jsonplaceholder.typicode.com';
let blogPosts = [];

// FUNCTIONS
const changePageInView = page => {
    switch (page) {
        case 'nav-home':
            changeDisplay(homePage, formPage, links[1], links[0]);
            break;
        case 'nav-form':
            changeDisplay(formPage, homePage, links[0], links[1]);
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
    changeDisplay(loader);

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
        renderBlogPosts();
        changeDisplay(null, loader);
    })
    .catch(() => changeDisplay(null, loader))
}

const renderBlogPosts = () => {
    bpContainer.innerHTML = '';

    blogPosts.forEach(blogPost => {
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
})()