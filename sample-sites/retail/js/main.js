// Mobile navigation toggle
const hamburgerBtn = document.getElementById('hamburger');
const navLinksEl = document.querySelector('.nav-links');

hamburgerBtn.addEventListener('click', () => {
  navLinksEl.classList.toggle('active');
});

// Close the mobile menu when a navigation link is clicked
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    if (navLinksEl.classList.contains('active')) {
      navLinksEl.classList.remove('active');
    }
  });
});
