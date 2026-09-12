/**
 * AOIFE KANE — Official Website Interactive Engine
 * Embers Canvas, Navigation, Modals, and UI Interactions
 */

(function () {
  'use strict';

  // --- 1. HERO EMBER PARTICLES CANVAS ---
  const canvas = document.getElementById('emberCanvas') || document.getElementById('heroCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = 45;

    class EmberParticle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = height + Math.random() * 50;
        this.size = Math.random() * 2.8 + 1.2;
        this.speedY = Math.random() * 1.5 + 0.6;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.opacity = Math.random() * 0.7 + 0.3;
        this.fade = Math.random() * 0.006 + 0.002;
        this.color = Math.random() > 0.35 ? '229, 193, 88' : '16, 185, 129'; // Gold or Emerald
      }

      update() {
        this.y -= this.speedY;
        this.x += this.speedX + Math.sin(this.y * 0.01) * 0.3;
        this.opacity -= this.fade;

        if (this.opacity <= 0 || this.y < -10) {
          this.reset();
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(${this.color}, 0.8)`;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      const p = new EmberParticle();
      p.y = Math.random() * height;
      particles.push(p);
    }

    function animateEmbers() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animateEmbers);
    }

    animateEmbers();
  }

  // --- 2. NAVBAR SCROLL STATE & MOBILE TOGGLE ---
  const siteNav = document.getElementById('siteNav');
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      siteNav.classList.add('scrolled');
    } else {
      siteNav.classList.remove('scrolled');
    }
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      mobileToggle.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileToggle.classList.remove('active');
      });
    });
  }

  // --- 3. CUSTOM MODAL CONTROLLER (COMPLIANT WITH GLOBAL USER RULE: NO alert/confirm) ---
  const modalOverlay = document.getElementById('customModal');
  const modalTitle = document.getElementById('customModalTitle');
  const modalBody = document.getElementById('customModalBody');
  const modalCloseBtns = document.querySelectorAll('.modal-close, [data-modal-close]');

  function openCustomModal(title, contentHtml) {
    if (!modalOverlay) return;
    if (modalTitle) modalTitle.textContent = title;
    if (modalBody) modalBody.innerHTML = contentHtml;
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeAllModals() {
    document.querySelectorAll('.modal-overlay').forEach((m) => {
      m.classList.remove('open');
    });
    document.body.style.overflow = '';
  }

  modalCloseBtns.forEach((btn) => {
    btn.addEventListener('click', closeAllModals);
  });

  document.querySelectorAll('.modal-overlay').forEach((overlay) => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeAllModals();
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });

  // Newsletter Signup
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('newsletterEmail');
      const email = emailInput ? emailInput.value.trim() : '';
      if (!email) return;

      openCustomModal(
        'The Clan Has Called',
        `<p style="margin-bottom:1rem;">You are now on the sacred list, <strong>${email}</strong>.</p>
         <p style="color:var(--text-secondary); font-size:0.95rem;">You will receive early access codes for the Celtic Battle-Pop 2026 Arena Tour, exclusive limited vinyl pressings, and secret acoustic stems.</p>
         <div style="margin-top:1.5rem; text-align:center;">
           <button class="btn btn-primary" data-modal-close onclick="this.closest('.modal-overlay').classList.remove('open'); document.body.style.overflow='';">Stand Fast</button>
         </div>`
      );
      if (emailInput) emailInput.value = '';
    });
  }

  // Preorder Vinyl / Merch Button
  const vinylOrderBtn = document.getElementById('vinylOrderBtn');
  if (vinylOrderBtn) {
    vinylOrderBtn.addEventListener('click', () => {
      openCustomModal(
        'Collector’s Vinyl Edition',
        `<p style="margin-bottom:1rem;"><strong>Hold the Line — Limited Gatefold Edition</strong></p>
         <p style="color:var(--text-secondary); font-size:0.95rem; margin-bottom:1rem;">Heavyweight 180g Emerald Smoke & Ember Gold splatter vinyl, featuring 16-page Celtic manuscript art book, hand-numbered track certificate, and instant lossless 24-bit studio audio download.</p>
         <p style="color:var(--gold); font-weight:600; font-size:1.2rem; margin-bottom:1.5rem;">$38.00 USD + Shipping</p>
         <div style="display:flex; gap:0.75rem; justify-content:center; flex-wrap:wrap;">
           <button class="btn btn-primary" onclick="alertConfirmModal()">Proceed to Checkout</button>
           <button class="btn btn-secondary" onclick="this.closest('.modal-overlay').classList.remove('open'); document.body.style.overflow='';">Back to Site</button>
         </div>`
      );
    });
  }

  // Tour RSVP Buttons
  document.querySelectorAll('.btn-tour-rsvp').forEach((btn) => {
    btn.addEventListener('click', () => {
      const city = btn.dataset.city || 'Tour Stop';
      const venue = btn.dataset.venue || 'Arena';
      const date = btn.dataset.date || '2026';

      openCustomModal(
        `Pre-Sale Access: ${city}`,
        `<p style="margin-bottom:1rem;">Registering for <strong>${venue} (${city})</strong> on <strong>${date}</strong>.</p>
         <p style="color:var(--text-secondary); font-size:0.92rem; margin-bottom:1.5rem;">Official venue ticket queues open soon. Clan pre-sale codes unlock 48 hours before general release.</p>
         <form id="tourRsvpForm" onsubmit="event.preventDefault(); document.getElementById('customModalBody').innerHTML = '<p style=\\'text-align:center; color:var(--emerald-light); font-weight:600; padding:1.5rem;\\'>✓ Pre-sale code reserved! Check your inbox 48h before general on-sale.</p>';">
           <input type="email" required placeholder="Enter your email" style="width:100%; padding:0.8rem 1rem; border-radius:8px; border:1px solid rgba(229,193,88,0.3); background:rgba(0,0,0,0.5); color:#fff; margin-bottom:1rem; box-sizing:border-box;" />
           <button type="submit" class="btn btn-primary" style="width:100%;">Get Clan Pre-Sale Code</button>
         </form>`
      );
    });
  });

  window.alertConfirmModal = function () {
    openCustomModal(
      'Pre-Order Notice',
      `<p style="margin-bottom:1.2rem; color:var(--text-primary);">Pre-orders for the <em>Hold the Line</em> First-Pressing Vinyl are currently syncing with our international distribution hub.</p>
       <p style="color:var(--text-secondary); margin-bottom:1.5rem;">Enter your email below to reserve your limited serial number instantly with zero deposit.</p>
       <form onsubmit="event.preventDefault(); document.getElementById('customModalBody').innerHTML = '<p style=\\'text-align:center; color:var(--emerald-light); font-weight:600; padding:1.5rem;\\'>✓ Serial Number Reserved! You will receive confirmation via email.</p>';">
         <input type="email" required placeholder="Enter your email" style="width:100%; padding:0.8rem 1rem; border-radius:8px; border:1px solid rgba(229,193,88,0.3); background:rgba(0,0,0,0.5); color:#fff; margin-bottom:1rem; box-sizing:border-box;" />
         <button type="submit" class="btn btn-primary" style="width:100%;">Reserve First Pressing</button>
       </form>`
    );
  };

  // Expose modal helper
  window.AoifeModals = {
    open: openCustomModal,
    close: closeAllModals
  };
})();
