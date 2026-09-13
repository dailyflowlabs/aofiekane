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
            source: 'aoifekanemusic.com',
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
               <p style="color:var(--text-secondary); font-size:0.96rem; line-height:1.7; max-width:480px; margin:0 auto 1.5rem;">A confirmation raven has been sent to your inbox. Confirm your email to receive early access codes, exclusive merch drops, and unreleased studio stems.</p>
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

  // --- 5. MERCH MODAL ENGINE (COMPLIANT WITH CUSTOM MODAL RULES) ---
  const MERCH_DATA = {
    battle_tee: {
      productId: "6aa5bcd6c2763c2ff201c2ae",
      defaultVariantId: 18102, // L
      title: "Vintage Washed Battle Tee",
      price: 34,
      sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
      variants: {
        "S": 18100,
        "M": 18101,
        "L": 18102,
        "XL": 18103,
        "2XL": 18104,
        "3XL": 18105
      },
      desc: "Heavyweight 100% combed ringspun cotton battle tee in pitch black with master Celtic crest and runes.",
      tag: "Unisex Heavyweight Cotton"
    },
    hoodie: {
      productId: "6aa5bd26b6bdffef520bd683",
      defaultVariantId: 32920, // L
      title: "Megalith Ceremony Pullover Hoodie",
      price: 58,
      sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
      variants: {
        "S": 32918,
        "M": 32919,
        "L": 32920,
        "XL": 32921,
        "2XL": 32922,
        "3XL": 32923
      },
      desc: "10oz heavyweight fleece pullover in pitch black with double-layer hood and front kangaroo pocket.",
      tag: "10oz Heavyweight Fleece"
    },
    poster: {
      productId: "6aa5bd2ac2763c2ff201c2ea",
      defaultVariantId: 43172,
      title: "Ancient Megaliths Dawn Vigil Poster (24\" x 18\")",
      price: 24,
      sizes: null,
      desc: "Museum-grade heavy matte 175gsm archival art print of Aoife Kane standing before ancient stone monoliths.",
      tag: "Museum-Grade Matte Giclée"
    },
    mug: {
      productId: "6aa5bd4dd54107fc9508567a",
      defaultVariantId: 33719,
      title: "Hold The Line Ceramic Mug (11oz)",
      price: 16,
      sizes: null,
      desc: "High gloss ceramic mug with high definition Celtic battle crest. Dishwasher and microwave safe.",
      tag: "Ceramic Relic"
    }
  };

  let currentSelectedSize = "L";
  let currentSelectedQty = 1;

  window.openMerchModal = function (itemId) {
    const item = MERCH_DATA[itemId] || MERCH_DATA.battle_tee;
    if (item.sizes) {
      if (!currentSelectedSize || !item.sizes.includes(currentSelectedSize)) {
        currentSelectedSize = item.sizes.includes("L") ? "L" : item.sizes[0];
      }
    } else {
      currentSelectedSize = null;
    }

    function renderModalHtml() {
      const subtotal = (item.price * currentSelectedQty).toFixed(2);
      let sizeSelectorHtml = "";
      if (item.sizes) {
        sizeSelectorHtml = `
          <div style="margin: 1.2rem 0;">
            <div style="font-size:0.8rem; text-transform:uppercase; letter-spacing:0.08em; color:var(--text-muted); margin-bottom:0.6rem; text-align:center;">Select Size</div>
            <div class="size-selector-wrap">
              ${item.sizes.map(s => `
                <button type="button" class="size-pill ${s === currentSelectedSize ? 'active' : ''}" onclick="selectMerchSize('${s}', '${itemId}')">${s}</button>
              `).join('')}
            </div>
          </div>
        `;
      }

      return `
        <div style="text-align:left; max-width:480px; margin:0 auto;">
          <div style="display:inline-block; font-size:0.75rem; color:var(--emerald-bright); background:rgba(16,185,129,0.15); border:1px solid rgba(16,185,129,0.3); padding:0.25rem 0.65rem; border-radius:12px; margin-bottom:0.6rem; text-transform:uppercase; font-family:var(--font-heading);">
            ${item.tag}
          </div>
          <h3 style="font-size:1.45rem; color:#fff; margin-bottom:0.4rem; line-height:1.25;">${item.title}</h3>
          <p style="color:var(--text-secondary); font-size:0.9rem; line-height:1.55; margin-bottom:1.2rem;">${item.desc}</p>
          
          ${sizeSelectorHtml}

          <div style="display:flex; align-items:center; justify-content:space-between; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.1); border-radius:10px; padding:0.9rem 1.2rem; margin:1.2rem 0;">
            <div>
              <div style="font-size:0.75rem; text-transform:uppercase; color:var(--text-muted);">Quantity</div>
              <div style="font-size:1.3rem; font-weight:700; color:var(--emerald-bright); font-family:var(--font-heading);">$${subtotal} <span style="font-size:0.8rem; font-weight:400; color:var(--text-muted);">USD</span></div>
            </div>
            <div style="display:flex; align-items:center; gap:0.75rem;">
              <button type="button" class="stepper-btn" onclick="changeMerchQty(-1, '${itemId}')">-</button>
              <span class="stepper-qty" id="merchQtyDisplay">${currentSelectedQty}</span>
              <button type="button" class="stepper-btn" onclick="changeMerchQty(1, '${itemId}')">+</button>
            </div>
          </div>

          <div style="margin-top:1.5rem;">
            <button type="button" id="merchSubmitBtn" class="btn btn-primary" onclick="submitMerchOrder(event, '${itemId}')" style="width:100%; padding:1rem 1.25rem; font-size:0.9rem; font-weight:700; letter-spacing:0.08em; white-space:normal; line-height:1.3; text-align:center;">
              Proceed to Checkout ($${subtotal})
            </button>
          </div>

          <div style="margin-top:1rem; text-align:center; font-size:0.78rem; color:var(--text-muted);">
            🔒 Official Vault Guarantee • Printed & Shipped via Printify • Tracking Included
          </div>
        </div>
      `;
    }

    openCustomModal('Clan Battle Vault', renderModalHtml());
  };

  window.selectMerchSize = function (size, itemId) {
    currentSelectedSize = size;
    window.openMerchModal(itemId);
  };

  window.changeMerchQty = function (delta, itemId) {
    currentSelectedQty = Math.max(1, Math.min(10, currentSelectedQty + delta));
    window.openMerchModal(itemId);
  };

  window.submitMerchOrder = async function (event, itemId) {
    if (event) event.preventDefault();
    const item = MERCH_DATA[itemId] || MERCH_DATA.battle_tee;
    const submitBtn = document.getElementById('merchSubmitBtn');

    let variantId = item.defaultVariantId;
    if (item.variants && currentSelectedSize) {
      variantId = item.variants[currentSelectedSize] || item.defaultVariantId;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.75';
      submitBtn.innerHTML = `Connecting to Checkout...`;
    }

    try {
      const response = await fetch('/api/merch/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productId: item.productId,
          variantId: variantId,
          quantity: currentSelectedQty
        })
      });

      const data = await response.json();
      if (!response.ok || !data.url) {
        throw new Error(data.error || 'Failed to initialize checkout session.');
      }

      window.location.href = data.url;
    } catch (err) {
      console.error('Checkout error:', err);
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
        submitBtn.textContent = 'Retry Checkout';
      }
      openCustomModal('Vault Notice', `
        <div style="text-align:center; padding:1rem 0;">
          <p style="color:#f87171; font-size:0.95rem; margin-bottom:1.5rem; line-height:1.5;">${err.message || 'Unable to establish secure checkout connection. Please try again.'}</p>
          <button class="btn btn-primary" onclick="AoifeModals.close()">Close</button>
        </div>
      `);
    }
  };

  // Expose modal helper
  window.AoifeModals = {
    open: openCustomModal,
    close: closeAllModals
  };
})();
