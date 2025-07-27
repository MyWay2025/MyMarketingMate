// Mobile navigation toggle
const hamburgerBtn = document.getElementById('hamburger');
const navLinksEl = document.querySelector('.nav-links');

hamburgerBtn.addEventListener('click', () => {
  navLinksEl.classList.toggle('active');
});
