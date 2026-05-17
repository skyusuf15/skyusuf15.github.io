/**
 * main.js — Portfolio enhancements
 * - Scroll-triggered appear animations via IntersectionObserver
 * - Active nav link highlighting on scroll
 */

(function () {
  'use strict';

  /* -----------------------------------------------------------------------
   * 1. Scroll-Triggered Appear Animations
   * --------------------------------------------------------------------- */
  const animEls = document.querySelectorAll('.appear-anim');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // fire only once
          }
        });
      },
      { threshold: 0.15 }
    );

    animEls.forEach((el) => observer.observe(el));
  } else {
    // Fallback: show all items immediately for unsupported browsers
    animEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* -----------------------------------------------------------------------
   * 2. Active Nav Link on Scroll
   * --------------------------------------------------------------------- */
  const sections = document.querySelectorAll('header[id], section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.remove('active'));
          const activeLink = document.querySelector(
            `.nav-links a[href="#${entry.target.id}"]`
          );
          if (activeLink) activeLink.classList.add('active');
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach((sec) => navObserver.observe(sec));
})();
