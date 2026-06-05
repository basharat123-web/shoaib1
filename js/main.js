/* ============================================================
   ARG — Axiom Research Group | Main JavaScript v1.0
   ============================================================ */

/* ROOT is set inline in each page before this script loads:
   const ROOT = './';   (root pages)
   const ROOT = '../';  (level-1 sub-pages)
   const ROOT = '../../'; (level-2 sub-pages) */

document.addEventListener('DOMContentLoaded', () => {
  const r = typeof ROOT !== 'undefined' ? ROOT : './';

  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');
  if (headerEl) headerEl.innerHTML = renderHeader(r);
  if (footerEl) footerEl.innerHTML = renderFooter(r);

  initMobileNav();
  initScrollTop();
  initCounters();
  setActiveNav();
});

/* ── Header ── */
function renderHeader(r) {
  return `
<header class="site-header">
  <div class="container header-inner">
    <a href="${r}index.html" class="logo">
      <img src="${r}images/blue%20logo.png" alt="Axiom Research Group" class="logo-img">
      <div class="brand-text">
        <span class="brand-title">AXIOM</span>
        <span class="brand-sub">RESEARCH GROUP</span>
      </div>
    </a>
    <nav class="main-nav" aria-label="Main navigation">
      <ul class="nav-list">
        <li><a href="${r}our-approach.html">Our Approach</a></li>
        <li class="has-dropdown">
          <a href="${r}skills-services.html">Skills &amp; Services <i class="fa-solid fa-chevron-down"></i></a>
          <ul class="dropdown">
            <li><a href="${r}skills-services/analysis-reporting.html">Analysis &amp; Reporting</a></li>
            <li><a href="${r}skills-services/b2b-research.html">B2B Research</a></li>
            <li><a href="${r}skills-services/data-entry-tabulation.html">Data Entry &amp; Tabulation</a></li>
            <li><a href="${r}skills-services/demographic-crosstabs.html">Demographic Crosstabs</a></li>
            <li><a href="${r}skills-services/focus-groups.html">Focus Groups</a></li>
            <li><a href="${r}skills-services/mystery-shopping.html">Mystery Shopping</a></li>
            <li><a href="${r}skills-services/omnibus-services.html">Omnibus Services</a></li>
            <li><a href="${r}skills-services/onsite-services.html">Onsite Services</a></li>
            <li><a href="${r}skills-services/product-testing.html">Product Testing</a></li>
            <li><a href="${r}skills-services/public-opinion-polling.html">Public Opinion Polling</a></li>
            <li><a href="${r}skills-services/sample-management.html">Sample Management</a></li>
            <li><a href="${r}skills-services/tracking-studies.html">Tracking Studies</a></li>
          </ul>
        </li>
        <li class="has-dropdown">
          <a href="${r}market-research.html">Market Research <i class="fa-solid fa-chevron-down"></i></a>
          <ul class="dropdown">
            <li><a href="${r}market-research/mail-surveys.html">Mail Surveys</a></li>
            <li><a href="${r}market-research/email-surveys.html">Email Surveys</a></li>
            <li><a href="${r}market-research/product-testing.html">Product Testing</a></li>
            <li class="has-sub">
              <a href="${r}market-research/data-collection-methods.html">Data Collection Methods</a>
              <ul class="sub-dropdown">
                <li><a href="${r}market-research/data-collection-methods/online-research.html">Online Research</a></li>
                <li><a href="${r}market-research/data-collection-methods/telephone-interviews.html">Telephone Interviews</a></li>
                <li><a href="${r}market-research/data-collection-methods/onsite-surveys.html">Onsite Surveys</a></li>
                <li><a href="${r}market-research/data-collection-methods/focus-groups.html">Focus Groups</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><a href="${r}clients.html">Clients</a></li>
        <li class="has-dropdown">
          <a href="${r}case-studies.html">Case Studies <i class="fa-solid fa-chevron-down"></i></a>
          <ul class="dropdown">
            <li><a href="${r}case-studies/case-01.html">Case Study 01</a></li>
            <li><a href="${r}case-studies/case-02.html">Case Study 02</a></li>
            <li><a href="${r}case-studies/case-03.html">Case Study 03</a></li>
            <li><a href="${r}case-studies/case-04.html">Case Study 04</a></li>
            <li><a href="${r}case-studies/case-05.html">Case Study 05</a></li>
          </ul>
        </li>
        <li><a href="${r}surveys.html">Surveys</a></li>
        <li><a href="${r}news.html">News</a></li>
        <li><a href="${r}blogs.html">Blogs</a></li>
        <li><a href="${r}about-us.html">About ARG</a></li>
      </ul>
    </nav>
    <a href="${r}contact-nrg.html" class="btn btn-primary nav-cta">Contact us</a>
    <button class="hamburger" id="hamburgerBtn" aria-label="Toggle navigation" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>
<div class="mobile-nav" id="mobileNav" role="dialog" aria-modal="true" aria-label="Mobile navigation">
  <div class="mobile-nav-header">
    <a href="${r}index.html" class="logo">
      <img src="${r}images/blue%20logo.png" alt="Axiom Research Group" class="logo-img">
      <div class="brand-text">
        <span class="brand-title">AXIOM</span>
        <span class="brand-sub">RESEARCH GROUP</span>
      </div>
    </a>
    <button class="mobile-nav-close" id="mobileClose" aria-label="Close menu">
      <i class="fa-solid fa-xmark"></i>
    </button>
  </div>
  <ul class="mobile-nav-list">
    <li><a href="${r}our-approach.html">Our Approach</a></li>
    <li>
      <button class="mobile-toggle-btn">Skills &amp; Services <i class="fa-solid fa-chevron-down"></i></button>
      <ul class="mobile-sub">
        <li><a href="${r}skills-services/analysis-reporting.html">Analysis &amp; Reporting</a></li>
        <li><a href="${r}skills-services/b2b-research.html">B2B Research</a></li>
        <li><a href="${r}skills-services/data-entry-tabulation.html">Data Entry &amp; Tabulation</a></li>
        <li><a href="${r}skills-services/demographic-crosstabs.html">Demographic Crosstabs</a></li>
        <li><a href="${r}skills-services/focus-groups.html">Focus Groups</a></li>
        <li><a href="${r}skills-services/mystery-shopping.html">Mystery Shopping</a></li>
        <li><a href="${r}skills-services/omnibus-services.html">Omnibus Services</a></li>
        <li><a href="${r}skills-services/onsite-services.html">Onsite Services</a></li>
        <li><a href="${r}skills-services/product-testing.html">Product Testing</a></li>
        <li><a href="${r}skills-services/public-opinion-polling.html">Public Opinion Polling</a></li>
        <li><a href="${r}skills-services/sample-management.html">Sample Management</a></li>
        <li><a href="${r}skills-services/tracking-studies.html">Tracking Studies</a></li>
      </ul>
    </li>
    <li>
      <button class="mobile-toggle-btn">Market Research <i class="fa-solid fa-chevron-down"></i></button>
      <ul class="mobile-sub">
        <li><a href="${r}market-research/mail-surveys.html">Mail Surveys</a></li>
        <li><a href="${r}market-research/email-surveys.html">Email Surveys</a></li>
        <li><a href="${r}market-research/product-testing.html">Product Testing</a></li>
        <li><a href="${r}market-research/data-collection-methods.html">Data Collection Methods</a></li>
      </ul>
    </li>
    <li><a href="${r}clients.html">Clients</a></li>
    <li>
      <button class="mobile-toggle-btn">Case Studies <i class="fa-solid fa-chevron-down"></i></button>
      <ul class="mobile-sub">
        <li><a href="${r}case-studies/case-01.html">Case Study 01</a></li>
        <li><a href="${r}case-studies/case-02.html">Case Study 02</a></li>
        <li><a href="${r}case-studies/case-03.html">Case Study 03</a></li>
        <li><a href="${r}case-studies/case-04.html">Case Study 04</a></li>
        <li><a href="${r}case-studies/case-05.html">Case Study 05</a></li>
      </ul>
    </li>
    <li><a href="${r}surveys.html">Surveys</a></li>
    <li><a href="${r}news.html">News</a></li>
    <li><a href="${r}blogs.html">Blogs</a></li>
    <li><a href="${r}about-us.html">About ARG</a></li>
  </ul>
  <a href="${r}contact-nrg.html" class="btn btn-primary" style="margin-top:24px;display:flex;justify-content:center;">Contact us</a>
</div>`;
}

/* ── Footer ── */
function renderFooter(r) {
  return `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="${r}index.html" class="logo" style="display:inline-flex;margin-bottom:0;">
          <img src="${r}images/white%20logo.png" alt="Axiom Research Group" class="logo-img">
          <div class="brand-text footer-brand-text">
            <span class="brand-title">AXIOM</span>
            <span class="brand-sub">RESEARCH GROUP</span>
          </div>
        </a>
        <p>Axiom Research Group delivers actionable insights through rigorous market research methodologies, helping businesses make informed decisions worldwide.</p>
      </div>
      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul class="footer-links">
          <li><a href="${r}our-approach.html">Our Approach</a></li>
          <li><a href="${r}skills-services.html">Skills &amp; Services</a></li>
          <li><a href="${r}market-research.html">Market Research</a></li>
          <li><a href="${r}about-us.html">About ARG</a></li>
          <li><a href="${r}contact-nrg.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Resources</h4>
        <ul class="footer-links">
          <li><a href="${r}blogs.html">Blogs</a></li>
          <li><a href="${r}news.html">News</a></li>
          <li><a href="${r}privacy-policy.html">Privacy Policy</a></li>
          <li><a href="${r}terms-conditions.html">Terms &amp; Conditions</a></li>
          <li><a href="${r}dmca-policy.html">DMCA Policy</a></li>
          <li><a href="${r}cookie-policy.html">Cookie Policy</a></li>
          <li><a href="${r}disclaimer.html">Disclaimer</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <div class="footer-contact-item"><i class="fa-solid fa-location-dot"></i><span>Buffalo, NY, USA</span></div>
        <div class="footer-contact-item"><i class="fa-solid fa-phone"></i><a href="tel:+17752989262">+1 (775) 298-9262</a></div>
        <div class="footer-contact-item"><i class="fa-solid fa-envelope"></i><a href="mailto:axiomresearchgroup@axiomresearchgroup.site">axiomresearchgroup@axiomresearchgroup.site</a></div>
        <div class="footer-contact-item"><i class="fa-solid fa-envelope"></i><a href="mailto:support@axiomresearchgroup.site">support@axiomresearchgroup.site</a></div>
        <div class="footer-contact-item"><i class="fa-solid fa-envelope"></i><a href="mailto:info@axiomresearchgroup.site">info@axiomresearchgroup.site</a></div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 Axiom Research Group. All rights reserved. Designed by webflyit</p>
      <a href="#" class="scroll-top" aria-label="Scroll to top"><i class="fa-solid fa-chevron-up"></i></a>
    </div>
  </div>
</footer>`;
}

/* ── Mobile Navigation ── */
function initMobileNav() {
  const hamburger = document.getElementById('hamburgerBtn');
  const mobileNav = document.getElementById('mobileNav');
  const mobileClose = document.getElementById('mobileClose');
  if (!hamburger || !mobileNav) return;

  function openNav() { mobileNav.classList.add('open'); document.body.style.overflow = 'hidden'; hamburger.setAttribute('aria-expanded', 'true'); }
  function closeNav() { mobileNav.classList.remove('open'); document.body.style.overflow = ''; hamburger.setAttribute('aria-expanded', 'false'); }

  hamburger.addEventListener('click', openNav);
  mobileClose?.addEventListener('click', closeNav);

  document.querySelectorAll('.mobile-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const sub = btn.nextElementSibling;
      if (!sub) return;
      const isOpen = sub.classList.contains('open');
      document.querySelectorAll('.mobile-sub.open').forEach(s => s.classList.remove('open'));
      document.querySelectorAll('.mobile-toggle-btn i').forEach(i => i.style.transform = '');
      if (!isOpen) {
        sub.classList.add('open');
        btn.querySelector('i').style.transform = 'rotate(180deg)';
      }
    });
  });
}

/* ── Scroll to Top ── */
function initScrollTop() {
  document.addEventListener('click', e => {
    if (e.target.closest('.scroll-top')) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
}

/* ── Animated Counters ── */
function initCounters() {
  const counters = document.querySelectorAll('.count-up');
  if (!counters.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = 'true';
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  counters.forEach(el => observer.observe(el));
}

function animateCounter(el) {
  const target = parseFloat(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const prefix = el.dataset.prefix || '';
  const duration = 2000;
  const start = Date.now();
  const tick = () => {
    const elapsed = Date.now() - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(ease * target);
    el.textContent = prefix + current + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/* ── Active Nav Link ── */
function setActiveNav() {
  const filename = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-list > li > a').forEach(link => {
    const href = link.getAttribute('href') || '';
    const linkFile = href.split('/').pop();
    if (linkFile === filename) link.closest('li').classList.add('active');
  });
}
