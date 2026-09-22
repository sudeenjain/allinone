// Main Interactive Controller for All In One Technology Portal
document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initStickyHeader();
  initScrollReveal();
  initCounters();
  initMobileMenu();
  initModals();
  initClientMarquee();
  initQuotationBuilder();
});

// 1. Scroll Progress Indicator
function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  }, { passive: true });
}

// 2. Sticky Header with Scroll Morph
function initStickyHeader() {
  const header = document.querySelector('.main-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

// 3. Scroll Reveal Animation via IntersectionObserver
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

// 4. Counter Animation for Numeric Metrics
function initCounters() {
  const counters = document.querySelectorAll('[data-counter-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-counter-target'), 10);
  const prefix = el.getAttribute('data-counter-prefix') || '';
  const suffix = el.getAttribute('data-counter-suffix') || '';
  const duration = 2000;
  const startTime = performance.now();

  function updateCount(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out expo
    const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    const current = Math.floor(easeProgress * target);

    el.innerText = `${prefix}${current.toLocaleString('en-IN')}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(updateCount);
    } else {
      el.innerText = `${prefix}${target.toLocaleString('en-IN')}${suffix}`;
    }
  }

  requestAnimationFrame(updateCount);
}

// 5. Mobile Menu Toggle
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('mobile-open');
    const isOpen = navMenu.classList.contains('mobile-open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
    toggleBtn.innerHTML = isOpen ? '✕' : '☰';
  });
}

// 6. Modal Windows Management
function initModals() {
  const modalOverlays = document.querySelectorAll('.modal-overlay');
  const openButtons = document.querySelectorAll('[data-modal-open]');
  const closeButtons = document.querySelectorAll('[data-modal-close]');

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = btn.getAttribute('data-modal-open');
      const targetModal = document.getElementById(modalId);
      if (targetModal) {
        targetModal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Pre-fill model if instrument
        const modelName = btn.getAttribute('data-model-name');
        if (modelName) {
          const modelField = targetModal.querySelector('#enquiry-subject');
          if (modelField) modelField.value = `Enquiry for ${modelName}`;
        }
      }
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-overlay');
      if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  modalOverlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
}

// 7. Infinite Client Logo Marquee Population
function initClientMarquee() {
  const marqueeTrack1 = document.getElementById('marquee-track-1');
  const marqueeTrack2 = document.getElementById('marquee-track-2');
  if (!marqueeTrack1 || typeof CLIENTS_DATA === 'undefined') return;

  // Split first 40 clients into two rows
  const row1 = CLIENTS_DATA.slice(0, 20);
  const row2 = CLIENTS_DATA.slice(20, 40);

  function createLogoCards(items) {
    return items.map(c => `
      <div class="client-logo-card" title="${c.name} - ${c.industry}">
        <img src="${c.logo}" alt="${c.name}" loading="lazy" onerror="this.onerror=null; this.src='assets/clients/client_logo_001.jpeg';">
      </div>
    `).join('');
  }

  marqueeTrack1.innerHTML = createLogoCards(row1) + createLogoCards(row1);
  if (marqueeTrack2) {
    marqueeTrack2.innerHTML = createLogoCards(row2) + createLogoCards(row2);
  }
}

// 8. Quotation & Enquiry Form Submission
function initQuotationBuilder() {
  const forms = document.querySelectorAll('.service-enquiry-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Submit';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending Enquiry...';
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.innerHTML = '✓ Enquiry Dispatched Successfully!';
          submitBtn.style.background = 'linear-gradient(135deg, #059669, #10b981)';
        }

        alert('Thank you! Your official inquiry has been logged with All In One Technology. Our technical director will respond within 24 business hours.');
        form.reset();

        const modal = form.closest('.modal-overlay');
        if (modal) {
          setTimeout(() => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            if (submitBtn) {
              submitBtn.disabled = false;
              submitBtn.innerHTML = originalText;
              submitBtn.style.background = '';
            }
          }, 1200);
        }
      }, 900);
    });
  });
}

// Show Product Specification Modal
function showProductSpecs(productId) {
  if (typeof CATALOG_DATA === 'undefined') return;
  const product = CATALOG_DATA.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('product-specs-modal');
  if (!modal) return;

  document.getElementById('specs-modal-model').innerText = product.model;
  document.getElementById('specs-modal-name').innerText = product.name;
  document.getElementById('specs-modal-price').innerText = `₹${product.price.toLocaleString('en-IN')}`;
  document.getElementById('specs-modal-category').innerText = product.category;
  document.getElementById('specs-modal-image').src = product.image;

  const specsList = document.getElementById('specs-modal-list');
  specsList.innerHTML = product.specs.map(s => `
    <li class="flex items-center gap-3 py-2 border-b border-white/5">
      <span class="text-cyan-400 font-bold">›</span>
      <span class="text-slate-300">${s}</span>
    </li>
  `).join('');

  const quoteBtn = document.getElementById('specs-modal-quote-btn');
  if (quoteBtn) {
    quoteBtn.setAttribute('data-model-name', `${product.model} - ${product.name}`);
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}
