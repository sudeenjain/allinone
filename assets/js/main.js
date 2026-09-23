// Main Interactive Controller for All In One Technology Portal
document.addEventListener('DOMContentLoaded', () => {
  if (typeof lucide !== 'undefined' && typeof lucide.createIcons === 'function') {
    lucide.createIcons();
  }
  initScrollProgress();
  initStickyHeader();
  initScrollReveal();
  initHeroCarousel();
  initCounters();
  initMobileMenu();
  initModals();
  initClientMarquee();
  initQuotationBuilder();
  initOffices();
  checkResponsiveOverflow();
  window.addEventListener('resize', checkResponsiveOverflow, { passive: true });
});

function checkResponsiveOverflow() {
  const winWidth = window.innerWidth;
  const scrollWidth = document.documentElement.scrollWidth;
  if (scrollWidth > winWidth) {
    const culprits = [];
    document.querySelectorAll('*').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.right > winWidth + 1) {
        const cls = (el.className && typeof el.className === 'string') ? el.className.split(' ').slice(0, 3).join('.') : '';
        culprits.push(`${el.tagName}.${cls} (r:${Math.round(r.right)}px, w:${Math.round(r.width)}px)`);
      }
    });
    console.warn(`[RESPONSIVE_OVERFLOW] win=${winWidth}, scroll=${scrollWidth}, culprits=${culprits.slice(0, 10).join(' | ')}`);
  } else {
    console.log(`[RESPONSIVE_CLEAN] win=${winWidth}, scroll=${scrollWidth}`);
  }
}

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
  const header = document.querySelector('.custom-navbar, .main-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 15) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

// 3. Scroll Reveal Animation via IntersectionObserver
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  if (!reveals.length) return;

  const isMobile = window.innerWidth <= 768;
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: isMobile ? 0.05 : 0.12,
    rootMargin: isMobile ? '0px 0px -10px 0px' : '0px 0px -40px 0px'
  });

  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('active');
    } else {
      observer.observe(el);
    }
  });

  initHero3DTilt();
}

// 3.1 Interactive 3D Cursor Tilt for Hero Showcase (Laptops & Desktops)
function initHero3DTilt() {
  const card = document.querySelector('.hero-visual-card');
  if (!card || window.matchMedia('(hover: none)').matches) return;

  let bounds;
  function updateBounds() {
    bounds = card.getBoundingClientRect();
  }
  updateBounds();
  window.addEventListener('resize', updateBounds, { passive: true });

  card.addEventListener('mousemove', (e) => {
    if (!bounds) updateBounds();
    const mouseX = e.clientX - bounds.left;
    const mouseY = e.clientY - bounds.top;
    const halfWidth = bounds.width / 2;
    const halfHeight = bounds.height / 2;

    const rotX = ((mouseY - halfHeight) / halfHeight) * -6;
    const rotY = ((mouseX - halfWidth) / halfWidth) * 6;

    card.classList.remove('floating');
    card.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateY(-6px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.classList.add('floating');
  });
}

// 3.2 Hero Showcase Auto-Carousel Controller
function initHeroCarousel() {
  const frame = document.querySelector('.hero-carousel-frame');
  if (!frame) return;

  const slides = frame.querySelectorAll('.hero-slide');
  const dots = frame.querySelectorAll('.hero-dot');
  const prevBtn = frame.querySelector('.hero-carousel-prev');
  const nextBtn = frame.querySelector('.hero-carousel-next');

  if (!slides.length) return;

  let currentIndex = 0;
  let autoplayTimer = null;
  const INTERVAL = 3500; // Auto-transition every 3.5 seconds

  function showSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });

    currentIndex = index;
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(nextSlide, INTERVAL);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  // Interactive Dot Clicks
  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      const slideIndex = parseInt(dot.getAttribute('data-slide'), 10);
      showSlide(slideIndex);
      startAutoplay();
    });
  });

  // Next / Previous Buttons
  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      nextSlide();
      startAutoplay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      prevSlide();
      startAutoplay();
    });
  }

  // Pause on hover so users can inspect details
  frame.addEventListener('mouseenter', stopAutoplay);
  frame.addEventListener('mouseleave', startAutoplay);

  // Touch Swipe for Mobile & Tablet
  let touchStartX = 0;
  let touchEndX = 0;

  frame.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    stopAutoplay();
  }, { passive: true });

  frame.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    startAutoplay();
  }, { passive: true });

  // Start automatic rotation
  startAutoplay();
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

// 5. Mobile Menu Toggle & Drawer Management
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (!toggleBtn || !navMenu) return;

  // Create or select backdrop overlay
  let backdrop = document.querySelector('.mobile-nav-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'mobile-nav-backdrop';
    document.body.appendChild(backdrop);
  }

  function closeMenu() {
    navMenu.classList.remove('mobile-open');
    backdrop.classList.remove('active');
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.innerHTML = '☰';
    document.body.style.overflow = '';
  }

  function openMenu() {
    navMenu.classList.add('mobile-open');
    backdrop.classList.add('active');
    toggleBtn.setAttribute('aria-expanded', 'true');
    toggleBtn.innerHTML = '✕';
    document.body.style.overflow = 'hidden';
  }

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = navMenu.classList.contains('mobile-open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  backdrop.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });

  // Handle dropdown accordions inside mobile menu
  const dropdowns = navMenu.querySelectorAll('.nav-dropdown');
  dropdowns.forEach(dd => {
    const trigger = dd.querySelector('.nav-link, .nav-dropdown-toggle, .nav-item');
    if (trigger) {
      trigger.addEventListener('click', (e) => {
        if (window.innerWidth <= 1150) {
          e.preventDefault();
          // Toggle clicked dropdown and close other open accordions
          const wasOpen = dd.classList.contains('dropdown-open');
          dropdowns.forEach(otherDd => otherDd.classList.remove('dropdown-open'));
          if (!wasOpen) {
            dd.classList.add('dropdown-open');
          }
        }
      });
    }
  });

  // Auto-close dropdown menus and mobile drawer on link click across desktop & mobile
  const allSubLinks = document.querySelectorAll('.nav-dropdown-menu a, .dropdown-link-card, .mega-card, .mega-cta-btn');
  allSubLinks.forEach(item => {
    item.addEventListener('click', () => {
      dropdowns.forEach(dd => dd.classList.remove('dropdown-open', 'active'));
      if (document.activeElement && typeof document.activeElement.blur === 'function') {
        document.activeElement.blur();
      }
      if (window.innerWidth <= 1150) {
        closeMenu();
      }
    });
  });

  // Close menu when resizing to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1150 && navMenu.classList.contains('mobile-open')) {
      closeMenu();
    }
  }, { passive: true });
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

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modalOverlays.forEach(overlay => {
        if (overlay.classList.contains('active')) {
          overlay.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    }
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
      <div class="client-logo-card cursor-pointer group" onclick="showClientDetails(${c.id})" title="${c.name} - ${c.industry} (Click for Corporate Profile)">
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
function showProductSpecs(productIdentifier) {
  if (typeof CATALOG_DATA === 'undefined' || !CATALOG_DATA.length) {
    console.error('CATALOG_DATA is not loaded');
    return;
  }

  // Find product by id (number or string) or by model string (e.g. 'CAL-015')
  const product = CATALOG_DATA.find(p => 
    p.id === productIdentifier || 
    p.id === Number(productIdentifier) || 
    (p.model && p.model.toLowerCase() === String(productIdentifier).toLowerCase())
  );

  if (!product) {
    console.warn('Product not found for identifier:', productIdentifier);
    return;
  }

  const modal = document.getElementById('product-specs-modal');
  if (!modal) return;

  // Determine correct image path relative to current page location
  const isSubfolder = window.location.pathname.includes('/laboratory-instruments/') ||
                      window.location.pathname.includes('/government-projects/') ||
                      window.location.pathname.includes('/valued-clients/') ||
                      window.location.pathname.includes('/certification/') ||
                      window.location.pathname.includes('/calibration/') ||
                      window.location.pathname.includes('/third-party-inspection/') ||
                      window.location.pathname.includes('/contact/');

  let imgPath = product.image || 'assets/instruments/instrument_004_p7.jpeg';
  if (isSubfolder && !imgPath.startsWith('../') && !imgPath.startsWith('http')) {
    imgPath = '../' + imgPath;
  } else if (!isSubfolder && imgPath.startsWith('../')) {
    imgPath = imgPath.replace(/^\.\.\//, '');
  }

  // Fill Header Elements
  const modelEl = document.getElementById('specs-modal-model');
  if (modelEl) modelEl.textContent = product.model;

  const nameEl = document.getElementById('specs-modal-name');
  if (nameEl) nameEl.textContent = product.name;

  const catEl = document.getElementById('specs-modal-category');
  if (catEl) catEl.textContent = product.category;

  const pageEl = document.getElementById('specs-modal-page');
  if (pageEl) {
    pageEl.textContent = product.pages && product.pages[0] ? `Catalog Page ${String(product.pages[0]).padStart(2, '0')} • PDF Ref` : 'Caltronics Official Ref';
  }

  // Price & Image
  const priceEl = document.getElementById('specs-modal-price');
  if (priceEl) priceEl.textContent = `₹${product.price.toLocaleString('en-IN')}`;

  const imgEl = document.getElementById('specs-modal-image');
  if (imgEl) {
    imgEl.src = imgPath;
    imgEl.alt = `${product.model} - ${product.name}`;
    imgEl.onerror = function() {
      this.onerror = null;
      this.src = isSubfolder ? '../assets/instruments/instrument_004_p7.jpeg' : 'assets/instruments/instrument_004_p7.jpeg';
    };
  }

  const descEl = document.getElementById('specs-modal-desc');
  if (descEl) descEl.textContent = product.description || '';

  // Render Salient Features
  const featuresList = document.getElementById('specs-modal-features');
  const featuresCont = document.getElementById('specs-features-container');
  if (featuresList) {
    if (product.features && product.features.length) {
      featuresList.innerHTML = product.features.map(f => `
        <li class="flex items-start gap-2 p-2 rounded-lg bg-blue-50/50 border border-blue-100/60">
          <span class="text-blue-600 font-bold text-sm leading-none mt-0.5">✓</span>
          <span class="text-slate-800 text-xs font-medium leading-relaxed">${f}</span>
        </li>
      `).join('');
      if (featuresCont) featuresCont.classList.remove('hidden');
    } else if (featuresCont) {
      featuresCont.classList.add('hidden');
    }
  }

  // Render Technical Specifications
  const specsGrid = document.getElementById('specs-modal-specs-grid');
  const specsCont = document.getElementById('specs-table-container');
  const legacySpecsList = document.getElementById('specs-modal-list');
  
  if (specsGrid) {
    if (product.specs && product.specs.length) {
      specsGrid.innerHTML = product.specs.map(s => {
        const colonIdx = s.indexOf(':');
        if (colonIdx > 0) {
          const key = s.substring(0, colonIdx).trim();
          const val = s.substring(colonIdx + 1).trim();
          return `
            <div class="specs-item-card">
              <span class="text-[10px] font-bold text-blue-700 uppercase tracking-wider block mb-0.5">${key}</span>
              <span class="text-xs font-semibold text-slate-900 leading-snug">${val}</span>
            </div>
          `;
        } else {
          return `
            <div class="specs-item-card">
              <span class="text-xs font-semibold text-slate-900 leading-snug">${s}</span>
            </div>
          `;
        }
      }).join('');
      if (specsCont) specsCont.classList.remove('hidden');
    } else if (specsCont) {
      specsCont.classList.add('hidden');
    }
  }

  // Fallback for legacy specs list element
  if (legacySpecsList) {
    legacySpecsList.innerHTML = (product.specs || []).map(s => `
      <li class="flex items-start gap-2.5 py-1.5 border-b border-slate-100 text-slate-800 text-xs">
        <span class="text-blue-600 font-bold">›</span>
        <span class="font-medium text-slate-800">${s}</span>
      </li>
    `).join('');
  }

  // Render Standard Accessories
  const accList = document.getElementById('specs-modal-accessories');
  const accCont = document.getElementById('specs-accessories-container');
  if (accList) {
    if (product.accessories && product.accessories.length) {
      accList.innerHTML = product.accessories.map(a => `
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-semibold">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> ${a}
        </span>
      `).join('');
      if (accCont) accCont.classList.remove('hidden');
    } else if (accCont) {
      accCont.classList.add('hidden');
    }
  }

  // Quotation button wiring
  const quoteBtn = document.getElementById('specs-modal-quote-btn');
  if (quoteBtn) {
    quoteBtn.setAttribute('data-model-name', `${product.model} - ${product.name}`);
  }

  // Reset modal scroll to top and show
  const modalContent = modal.querySelector('.modal-content');
  if (modalContent) modalContent.scrollTop = 0;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Show Client Company Details Modal
function showClientDetails(clientId) {
  if (typeof CLIENTS_DATA === 'undefined' || !CLIENTS_DATA.length) {
    console.error('CLIENTS_DATA is not loaded');
    return;
  }

  const client = CLIENTS_DATA.find(c => c.id === Number(clientId));
  if (!client) {
    console.warn('Client not found:', clientId);
    return;
  }

  const modal = document.getElementById('client-profile-modal');
  if (!modal) {
    // If modal is not on this page, redirect to valued-clients with anchor/query
    window.location.href = `valued-clients/index.html?client=${client.id}`;
    return;
  }

  const isSubpage = window.location.pathname.includes('/valued-clients/') || 
                    window.location.pathname.includes('/laboratory-instruments/') ||
                    window.location.pathname.includes('/certification/') ||
                    window.location.pathname.includes('/calibration/') ||
                    window.location.pathname.includes('/government-projects/') ||
                    window.location.pathname.includes('/third-party-inspection/') ||
                    window.location.pathname.includes('/contact/');

  const logoPrefix = isSubpage ? '../' : '';
  const cleanLogo = client.logo.replace(/^\.\.\//, '');
  const finalLogo = logoPrefix + cleanLogo;

  // Populate modal fields
  const logoEl = document.getElementById('client-modal-logo');
  if (logoEl) {
    logoEl.src = finalLogo;
    logoEl.alt = client.name;
  }

  const nameEl = document.getElementById('client-modal-name');
  if (nameEl) nameEl.textContent = client.name;

  const indEl = document.getElementById('client-modal-industry');
  if (indEl) indEl.textContent = client.industry;

  const locEl = document.getElementById('client-modal-location');
  if (locEl) locEl.textContent = client.location || 'Gujarat, India';

  const certEl = document.getElementById('client-modal-cert');
  if (certEl) certEl.textContent = client.cert || 'ISO / BIS Standards Verified';

  const partEl = document.getElementById('client-modal-partnership');
  if (partEl) {
    partEl.textContent = client.partnership || 'Supplied Caltronics laboratory instruments, quality compliance testing setups, and ongoing metrological calibration services by ALL IN ONE TECHNOLOGY.';
  }

  const webBtn = document.getElementById('client-modal-web-btn');
  if (webBtn) {
    webBtn.href = client.websiteUrl || `https://www.google.com/search?q=${encodeURIComponent(client.name + ' Morbi Gujarat')}`;
    webBtn.setAttribute('target', '_blank');
    webBtn.setAttribute('rel', 'noopener noreferrer');
  }

  // Hook into quotation modal
  const quoteBtn = document.getElementById('client-modal-quote-btn');
  if (quoteBtn) {
    quoteBtn.setAttribute('data-model-name', `${client.name} (${client.industry})`);
  }

  if (typeof lucide !== 'undefined') lucide.createIcons();

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Render Data-Driven Corporate Offices Section (Main Office & Registered Office)
function initOffices() {
  const containers = document.querySelectorAll('.offices-data-grid');
  if (!containers.length || typeof COMPANY_DATA === 'undefined' || !COMPANY_DATA.offices) return;

  const officeHtml = COMPANY_DATA.offices.map((office, idx) => {
    const isRegistered = office.type.toLowerCase().includes('registered');
    const badgeClass = isRegistered ? 'badge-registered' : 'badge-main';
    const cardClass = isRegistered ? 'card-registered' : 'card-main';
    const revealClass = idx === 0 ? 'reveal-left' : 'reveal-right';
    const iconName = isRegistered ? 'shield-check' : 'building-2';

    // Extensible map button only if a verified mapUrl exists
    const mapActionHtml = office.mapUrl ? `
      <a href="${office.mapUrl}" target="_blank" rel="noopener noreferrer" class="office-map-btn" aria-label="Open map location for ${office.type}">
        <i data-lucide="map-pin" class="w-4 h-4"></i>
        <span>View on Map</span>
      </a>
    ` : `
      <div class="office-status-pill">
        <span class="office-status-dot"></span>
        <span>Corporate Verified Facility</span>
      </div>
    `;

    return `
      <article class="office-card ${cardClass}" id="${office.id}">
        <div>
          <div class="office-card-top">
            <span class="office-badge ${badgeClass}">
              <i data-lucide="${iconName}" class="w-3.5 h-3.5"></i>
              ${office.type}
            </span>
            <div class="office-icon-wrapper" aria-hidden="true">
              <span class="office-pin-pulse">
                <i data-lucide="map-pin" class="w-5 h-5"></i>
              </span>
            </div>
          </div>

          <h3 class="office-title">${office.type}</h3>

          <div class="office-address-lines">
            <div class="line-1">${office.address1}</div>
            <div class="line-2">${office.address2}</div>
            <div class="city-state">${office.city}, ${office.state} - ${office.pin}</div>
            <div class="country">${office.country}</div>
          </div>

          <div class="office-meta-list">
            ${office.phone ? `
              <div class="office-meta-item">
                <i data-lucide="phone" class="w-4 h-4 text-blue-600 flex-shrink-0"></i>
                <div><strong>Phone:</strong> <a href="tel:${office.phone.split('/')[0].trim()}">${office.phone}</a></div>
              </div>
            ` : ''}
            ${office.email ? `
              <div class="office-meta-item">
                <i data-lucide="mail" class="w-4 h-4 text-blue-600 flex-shrink-0"></i>
                <div><strong>Email:</strong> <a href="mailto:${office.email}">${office.email}</a></div>
              </div>
            ` : ''}
          </div>
        </div>

        <div class="office-map-action">
          ${mapActionHtml}
          <span class="text-xs text-slate-400 font-mono">PIN: ${office.pin}</span>
        </div>
      </article>
    `;
  }).join('');

  containers.forEach(container => {
    container.innerHTML = officeHtml;
  });

  if (typeof lucide !== 'undefined' && typeof lucide.createIcons === 'function') {
    lucide.createIcons();
  }
}

window.showProductSpecs = showProductSpecs;
window.showClientDetails = showClientDetails;
window.initOffices = initOffices;
