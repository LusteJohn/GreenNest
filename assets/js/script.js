(function () {
  "use strict";

  const toastEl = document.getElementById("toast");

  const carouselPlants = PLANTS.slice(-5);
  let currentIndex = carouselPlants.length - 1;

  function showToast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toastEl.classList.remove("show"), 2200);
  }

  function money(plant) {
    return plant.currency + plant.price.toLocaleString("en-PH");
  }

  // Simple leaf glyph used wherever we don't have a real photo yet.
  function leafSVG(color) {
    return `<svg viewBox="0 0 100 100" fill="none">
      <path d="M50 92 C 18 76, 8 38, 35 12 C 62 38, 62 70, 50 92 Z" fill="${color}"/>
      <path d="M50 92 L50 28" stroke="rgba(255,255,255,0.5)" stroke-width="2"/>
    </svg>`;
  }

  function renderDots() {
    const dots = carouselPlants.map((_, i) => `<button type="button" class="dot${i === currentIndex ? " active" : ""}" data-index="${i}" aria-label="Go to plant ${i + 1}"></button>`).join("");
    document.getElementById("carouselDots").innerHTML = dots;
  }

  function render() {
    const plant = carouselPlants[currentIndex];

    document.title = `Understory — ${plant.name}`;
    document.getElementById("kicker").textContent = plant.kicker;
    document.getElementById("plantName").textContent = plant.name;
    document.getElementById("tagline").textContent = plant.tagline;
    document.getElementById("price").textContent = money(plant);
    document.getElementById("description").textContent = plant.description;

    const heroArt = document.getElementById("heroArt");
    heroArt.style.background = plant.image ? "transparent" : plant.color + "22";
    heroArt.innerHTML = plant.image
      ? `<img src="${plant.image}" alt="${plant.name}" loading="eager">`
      : leafSVG(plant.color);

    // Stock / order button state
    const stockEl = document.getElementById("stock");
    stockEl.classList.remove("sold-out");
    const orderBtns = document.querySelectorAll('a.btn-primary[href="#order"], a.btn-primary.disabled');
    if (plant.stock <= 0) {
      stockEl.textContent = "Sold out";
      stockEl.classList.add("sold-out");
      orderBtns.forEach((b) => {
        b.classList.add("disabled");
        b.textContent = "Sold out";
        b.removeAttribute("href");
      });
    } else {
      orderBtns.forEach((b) => {
        b.classList.remove("disabled");
        b.textContent = "Order this plant";
        b.setAttribute("href", "#order");
      });
      stockEl.textContent = plant.stock <= 3 ? `Only ${plant.stock} left` : "In stock";
    }

    // Facts grid
    document.getElementById("factsGrid").innerHTML = plant.facts
      .map((f) => `<div class="fact"><div class="label">${f.label}</div><div class="value">${f.value}</div></div>`)
      .join("");

    // Gallery — supports either hex colors (placeholder art) or real image URLs
    document.getElementById("galleryGrid").innerHTML = plant.gallery
      .map((item) => {
        const isImage = /^https?:\/\/|\.(jpg|jpeg|png|webp)$/i.test(item);
        if (isImage) {
          return `<div class="gallery-tile"><img src="${item}" alt="${plant.name}"></div>`;
        }
        return `<div class="gallery-tile" style="background:${item}22">${leafSVG(item)}</div>`;
      })
      .join("");

    // Order form's hidden context so we know which plant was requested
    orderForm.dataset.plantName = plant.name;

    renderDots();
  }

  function goTo(index) {
    currentIndex = (index + carouselPlants.length) % carouselPlants.length; // wraps around both ends
    render();
  }

  // ---------- Carousel controls ----------
  document.getElementById("arrowPrev").addEventListener("click", () => goTo(currentIndex - 1));
  document.getElementById("arrowNext").addEventListener("click", () => goTo(currentIndex + 1));

  document.getElementById("carouselDots").addEventListener("click", (e) => {
    const dot = e.target.closest(".dot");
    if (!dot) return;
    goTo(Number(dot.dataset.index));
  });

  // Swipe support for touch devices
  (function enableSwipe() {
    const zone = document.getElementById("home");
    let startX = null;
    zone.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; }, { passive: true });
    zone.addEventListener("touchend", (e) => {
      if (startX === null) return;
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 50) goTo(currentIndex + (dx < 0 ? 1 : -1));
      startX = null;
    }, { passive: true });
  })();

  // Left/right arrow keys move the carousel when not typing in a field
  document.addEventListener("keydown", (e) => {
    const tag = document.activeElement.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA") return;
    if (e.key === "ArrowLeft") goTo(currentIndex - 1);
    if (e.key === "ArrowRight") goTo(currentIndex + 1);
  });

  // ---------- Order channels (shop-level, static across plants) ----------
  document.getElementById("orderChannels").innerHTML = SHOP.orderChannels
    .map((c) => `<li><a href="${c.href}" target="_blank" rel="noopener">${c.label}</a></li>`)
    .join("");

  // ---------- Order form ----------
  // This demo just confirms locally. To make it live, pick one:
  //  1) Point the <form> at a form backend (Formspree, Getform, etc.) and
  //     remove the JS submit handler below so it posts normally.
  //  2) Send a fetch() POST from here to your own backend or a serverless
  //     function that emails/SMSes the shop owner.
  //  3) Simplest no-backend option: build a "mailto:" or WhatsApp link from
  //     the form fields and open that instead of submitting.
  const orderForm = document.getElementById("orderForm");
  orderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const plant = carouselPlants[currentIndex];
    if (plant.stock <= 0) {
      showToast("This plant is sold out right now.");
      return;
    }
    const data = new FormData(orderForm);
    console.log("Order request:", { plant: plant.name, ...Object.fromEntries(data.entries()) });
    showToast(`Thanks ${data.get("name")}! We'll reach out to confirm your ${plant.name}.`);
    orderForm.reset();
  });

  render();
})();