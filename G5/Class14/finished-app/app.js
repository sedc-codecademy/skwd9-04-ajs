const API_URL = 'http://localhost:8080';

const getAllPostsBtn = document.querySelector('#get-posts');
const postContainer = document. querySelector('#all-posts-section');

getAllPostsBtn.addEventListener('click', () => {
    fetchPosts(API_URL);
});

const fetchPosts = (url) => {
    fetch(`${url}/posts`)
        .then((response) => response.json())
        .then(result => {
            renderPosts(result.posts);
        })
}

const renderPosts = (postArray) => {
    let inner = '';
    postArray.forEach((post) => {
        inner +=
        `
        <div class="post__card">
          <div class="post__card-header">
            <img
              src="./assets/icon_${post.gender}.png"
              alt=""
              class="post__card-header-img"
            />
            <div class="post__card-header-title">${post.name}</div>
          </div>
          <div class="post__card-content">
            <div class="post__card-content-text">
             ${post.text}
            </div>
          </div>
        </div>
        `
    })
    postContainer.innerHTML = inner;
}