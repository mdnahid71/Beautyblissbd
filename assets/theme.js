// ──────────────────────────────────────────────────────────
// Header JS: mobile navigation & search overlay
// ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  /* mobile nav */
  const navToggle = document.querySelector('.mobile-nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', () => mobileNav.classList.toggle('open'));
  }

  /* search overlay (only if inline search is disabled) */
  const searchOpen  = document.getElementById('search-toggle');
  const searchClose = document.getElementById('search-close');
  const overlay     = document.getElementById('search-overlay');
  if (searchOpen && overlay) {
    searchOpen.addEventListener('click', () => overlay.classList.add('open'));
  }
  if (searchClose && overlay) {
    searchClose.addEventListener('click', () => overlay.classList.remove('open'));
  }
});
