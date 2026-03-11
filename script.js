document.addEventListener("DOMContentLoaded", function () {
  // Set --header-h to the exact rendered header height
  var header = document.querySelector(".top-header");
  function setHeaderHeight() {
    if (header) {
      document.documentElement.style.setProperty("--header-h", header.offsetHeight + "px");
    }
  }
  setHeaderHeight();
  window.addEventListener("resize", setHeaderHeight);

  document.querySelectorAll(".size").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".size").forEach(function (b) {
        b.classList.remove("is-active");
      });
      this.classList.add("is-active");
    });
  });

  document.querySelectorAll(".method").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".method").forEach(function (b) {
        b.classList.remove("is-active");
      });
      this.classList.add("is-active");
    });
  });

  document.querySelectorAll(".tab").forEach(function (tab) {
    tab.addEventListener("click", function () {
      var section = this.closest(".full-description");
      section.querySelectorAll(".tab").forEach(function (t) {
        t.classList.remove("is-active");
      });
      section.querySelectorAll(".tab-panel").forEach(function (p) {
        p.classList.remove("is-active");
      });
      this.classList.add("is-active");
      var panelId = this.getAttribute("data-panel");
      if (panelId) {
        document.getElementById(panelId).classList.add("is-active");
      }
    });
  });

  var slides = Array.from(document.querySelectorAll(".carousel-slide"));
  var currentIndex = 0;

  function goToSlide(index) {
    if (index < 0 || index >= slides.length) return;
    slides[currentIndex].classList.remove("is-active");
    currentIndex = index;
    slides[currentIndex].classList.add("is-active");
  }

  var prevBtn = document.querySelector(".carousel-prev");
  var nextBtn = document.querySelector(".carousel-next");
  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      goToSlide(currentIndex <= 0 ? slides.length - 1 : currentIndex - 1);
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      goToSlide(currentIndex >= slides.length - 1 ? 0 : currentIndex + 1);
    });
  }

  // Other options store list toggle
  var otherOptionsToggle = document.querySelector(".other-options-toggle");
  if (otherOptionsToggle) {
    otherOptionsToggle.addEventListener("click", function (e) {
      e.preventDefault();
      var storePanel = document.querySelector(".other-stores");
      if (!storePanel) return;
      var isHidden = storePanel.hasAttribute("hidden");
      if (isHidden) {
        storePanel.removeAttribute("hidden");
        otherOptionsToggle.textContent = "Close";
      } else {
        storePanel.setAttribute("hidden", "");
        otherOptionsToggle.textContent = "Other options (5)";
      }
    });
  }

  var stickyFooter = document.querySelector(".sticky-footer");
  var isMobile = window.matchMedia("(max-width: 1023px)");

  // Mobile: watch price pill — show price + cart when it scrolls out of view
  var pricePill = document.querySelector(".price-pill");
  if (pricePill && stickyFooter) {
    var priceObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (isMobile.matches) {
          stickyFooter.classList.toggle("cta-visible", !entry.isIntersecting);
        }
      });
    }, { threshold: 0 });
    priceObserver.observe(pricePill);
  }

  // Desktop: watch desktop Add to Cart — show price + cart when it scrolls out of view
  var desktopCta = document.querySelector(".desktop-add-to-cart");
  if (desktopCta && stickyFooter) {
    var ctaObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!isMobile.matches) {
          stickyFooter.classList.toggle("cta-visible", !entry.isIntersecting);
        }
      });
    }, { threshold: 0 });
    ctaObserver.observe(desktopCta);
  }

  // Jump to Specs tab from "Full Specs" link
  var jumpToSpecs = document.getElementById("jump-to-specs");
  if (jumpToSpecs) {
    jumpToSpecs.addEventListener("click", function (e) {
      e.preventDefault();
      var section = document.getElementById("full-description");
      var specsTab = section.querySelector('.tab[data-panel="panel-specs"]');
      if (specsTab) specsTab.click();
      section.scrollIntoView({ behavior: "smooth" });
    });
  }

  // --- Hero carousel ---
  var heroEl = document.querySelector(".hero");
  var startX = 0;
  var isDragging = false;

  if (heroEl) {
    heroEl.addEventListener("touchstart", function (e) {
      startX = e.touches[0].clientX;
      isDragging = true;
    });
    heroEl.addEventListener("touchend", function (e) {
      if (!isDragging) return;
      isDragging = false;
      var diff = e.changedTouches[0].clientX - startX;
      if (Math.abs(diff) < 40) return;
      if (diff < 0) goToSlide(currentIndex + 1);
      else goToSlide(currentIndex - 1);
    });

    heroEl.addEventListener("mousedown", function (e) {
      startX = e.clientX;
      isDragging = true;
    });
    heroEl.addEventListener("mouseup", function (e) {
      if (!isDragging) return;
      isDragging = false;
      var diff = e.clientX - startX;
      if (Math.abs(diff) < 40) return;
      if (diff < 0) goToSlide(currentIndex + 1);
      else goToSlide(currentIndex - 1);
    });
  }


});
