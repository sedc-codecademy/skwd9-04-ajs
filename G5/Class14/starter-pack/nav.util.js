const newPostSection = document.querySelector('#post-section');
const aboutSection = document.querySelector('#about-section');
const allPostsSection = document.querySelector('#all-posts-section');

const navigationItems = document.querySelector('.subheader__navigation');

navigationItems.addEventListener('click', (e) => {
  const selectedPage = e.target.id;

  if (selectedPage === 'new-post-page') {
    newPostSection.classList.remove('hidden');
    aboutSection.classList.add('hidden');
    allPostsSection.classList.add('hidden');
  }

  if (selectedPage === 'all-posts-page') {
    newPostSection.classList.add('hidden');
    aboutSection.classList.add('hidden');
    allPostsSection.classList.remove('hidden');
  }

  if (selectedPage === 'about-page') {
    newPostSection.classList.add('hidden');
    aboutSection.classList.remove('hidden');
    allPostsSection.classList.add('hidden');
  }
});
