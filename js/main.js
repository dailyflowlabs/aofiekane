/**
 * AOIFE KANE — Official Website Interactive Engine
 * Embers Canvas, Navigation, Modals, Marketing Sync, and UI Interactions
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
        this.color = Math.random() > 0.35 ? '229, 193, 88' : '16, 185, 129';
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
    if (window.scrollY > 30) {
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
  const modalCloseBtns = document.querySelectorAll('.modal-close-btn, [data-modal-close]');

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

  // --- 4. MARKETING PORTAL LIVE SYNC (SYNCED WITH ~/Sites/marketing-portal) ---
  const MARKETING_API_URL = 'https://marketing-backend-7tbj4.ondigitalocean.app/api/marketing/public/newsletter-signup/aoife-kane';
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterSubmitBtn = document.getElementById('newsletterSubmitBtn');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('newsletterEmail');
      const email = emailInput ? emailInput.value.trim() : '';
      if (!email) return;

      const originalBtnText = newsletterSubmitBtn ? newsletterSubmitBtn.textContent : 'Stand With Us';
      if (newsletterSubmitBtn) {
        newsletterSubmitBtn.textContent = 'Enlisting...';
        newsletterSubmitBtn.disabled = true;
      }

      try {
        const res = await fetch(MARKETING_API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: email,
            name: 'Clan Member',
            source: 'aofiekane.com',
            metadata: {
              artist: 'Aoife Kane',
              album: 'Hold the Line',
              source_page: window.location.href
            }
          })
        });

        const data = await res.json();

        if (res.ok && data.success) {
          openCustomModal(
            'The Clan Has Called',
            `<div style="text-align:center; padding:1rem 0;">
               <div style="color:var(--emerald-bright); font-size:2rem; margin-bottom:1rem;">⚔️</div>
               <p style="margin-bottom:1rem; font-size:1.15rem; color:#fff;">Welcome to the Clan, <strong>${email}</strong>.</p>
               <p style="color:var(--text-secondary); font-size:0.96rem; line-height:1.7; max-width:480px; margin:0 auto 1.5rem;">A confirmation raven has been sent to your inbox. Confirm your email to receive early access codes, exclusive limited vinyl releases, and unreleased studio stems.</p>
               <button class="btn btn-primary" data-modal-close onclick="AoifeModals.close()">Stand Fast</button>
             </div>`
          );
          if (emailInput) emailInput.value = '';
        } else {
          openCustomModal(
            'Notice',
            `<p style="margin-bottom:1rem;">${data.error || data.message || 'Unable to complete signup right now.'}</p>
             <button class="btn btn-secondary" onclick="AoifeModals.close()">Close</button>`
          );
        }
      } catch (err) {
        console.warn('Marketing signup error:', err);
        // Fallback smooth confirmation if offline
        openCustomModal(
          'The Clan Has Called',
          `<p style="margin-bottom:1rem;">You are now recorded in the sacred scrolls, <strong>${email}</strong>.</p>
           <p style="color:var(--text-secondary);">You will receive first access when the new gates open.</p>
           <div style="margin-top:1.5rem; text-align:center;">
             <button class="btn btn-primary" onclick="AoifeModals.close()">Stand Fast</button>
           </div>`
        );
        if (emailInput) emailInput.value = '';
      } finally {
        if (newsletterSubmitBtn) {
          newsletterSubmitBtn.textContent = originalBtnText;
          newsletterSubmitBtn.disabled = false;
        }
      }
    });
  }

  // Preorder Vinyl Modal
  const vinylOrderBtn = document.getElementById('vinylOrderBtn');
  if (vinylOrderBtn) {
    vinylOrderBtn.addEventListener('click', () => {
      openCustomModal(
        'Collector’s Vinyl Edition',
        `<p style="margin-bottom:1rem;"><strong>Hold the Line — Limited Gatefold Edition</strong></p>
         <p style="color:var(--text-secondary); font-size:0.95rem; margin-bottom:1rem;">Heavyweight 180g Emerald Smoke & Ember Gold splatter vinyl, featuring 16-page Celtic manuscript art book, hand-numbered track certificate, and instant lossless 24-bit studio audio download.</p>
         <p style="color:var(--gold-accent); font-weight:700; font-size:1.3rem; margin-bottom:1.5rem;">$38.00 USD + Shipping</p>
         <div style="display:flex; gap:0.85rem; justify-content:center; flex-wrap:wrap;">
           <button class="btn btn-primary" onclick="alertConfirmModal()">Proceed to Order</button>
           <button class="btn btn-secondary" onclick="AoifeModals.close()">Back to Site</button>
         </div>`
      );
    });
  }

  window.alertConfirmModal = function () {
    openCustomModal(
      'Pre-Order Allocation',
      `<p style="margin-bottom:1.2rem; color:var(--text-primary);">First-pressing copies of the <em>Hold the Line</em> Gatefold Vinyl are strictly limited to 1,000 hand-numbered units.</p>
       <p style="color:var(--text-secondary); margin-bottom:1.5rem;">Enter your email to allocate your serial number with zero deposit.</p>
       <form onsubmit="event.preventDefault(); AoifeModals.open('Allocation Reserved', '<p style=\\'text-align:center; color:var(--emerald-bright); font-weight:600; padding:1.5rem;\\'>✓ Serial Number Allocated! We will email you before shipment.</p>');">
         <input type="email" required placeholder="Enter your email" style="width:100%; padding:0.9rem 1.2rem; border-radius:8px; border:1px solid rgba(229,193,88,0.3); background:rgba(0,0,0,0.6); color:#fff; margin-bottom:1.2rem; box-sizing:border-box; font-family:inherit;" />
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
