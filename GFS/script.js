document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
      menuToggle.textContent = navLinks.classList.contains("show") ? "✕" : "☰";
    });
  }

  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      if (!answer) return;
      answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
  });

  window.calculateEMI = function () {
    const loanEl = document.getElementById("loanAmount");
    const rateEl = document.getElementById("interestRate");
    const monthsEl = document.getElementById("loanMonths");
    const resultEl = document.getElementById("emiResult");

    if (!loanEl || !rateEl || !monthsEl || !resultEl) return;

    const loan = parseFloat(loanEl.value) || 0;
    const rate = parseFloat(rateEl.value) || 0;
    const months = parseFloat(monthsEl.value) || 0;

    if (loan <= 0 || months <= 0) {
      resultEl.innerHTML = "Please enter valid loan amount and months.";
      return;
    }

    const monthlyRate = rate / 12 / 100;
    let emi = loan / months;

    if (monthlyRate > 0) {
      const pow = Math.pow(1 + monthlyRate, months);
      emi = (loan * monthlyRate * pow) / (pow - 1);
    }

    resultEl.innerHTML = "Monthly EMI: ₹" + Math.round(emi);
  };

  const loader = document.getElementById("loader");
  if (loader) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        loader.style.pointerEvents = "none";
      }, 2000);
    });
  }

  const revealTargets = document.querySelectorAll(
    ".reveal, .hero-content, .section-title, .section-subtitle, .service-box, .counter-card, .content-card, .info-card, .blog-card, .faq, .contact-box, .calculator-box, .map-box, .error-box, .modal-card, .office-address"
  );

  revealTargets.forEach((el) => {
    el.classList.add("reveal-ready");
  });

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealTargets.forEach((el) => revealObserver.observe(el));

  const form = document.querySelector(".inquiry-form");
  if (form) {
    form.addEventListener("submit", () => {
      setTimeout(() => {
        window.location.href = "thankyou.html";
      }, 1200);
    });
  }
});