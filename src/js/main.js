const video = document.querySelector('.header-video');
const toggleButton = document.getElementById('video-toggle');

if (toggleButton && video) {
  toggleButton.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      toggleButton.textContent = '❚❚'; // pause
    } else {
      video.pause();
      toggleButton.textContent = '▶'; // play
    }
  });
}

// Change nav background when it leaves the header
// Wrap in DOMContentLoaded so elements exist when we query them
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.main-nav');
  const header = document.querySelector('.site-header');

  // If either element is missing, bail out silently
  if (!nav || !header) return;

  const checkNav = () => {
    // Use getBoundingClientRect + scrollY to compute the header bottom in document coordinates
    const headerBottom = header.getBoundingClientRect().bottom + window.scrollY;

    // When we've scrolled past the header (minus the nav height), add the class
    if (window.scrollY > headerBottom - nav.offsetHeight) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };

  // Listen to scroll and resize, and run an initial check
  window.addEventListener('scroll', checkNav, { passive: true });
  window.addEventListener('resize', checkNav);
  checkNav();
});