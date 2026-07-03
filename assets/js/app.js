const CONFIG = {
  whatsappNumber: "552122335989",
  phoneDisplay: "(21) 2233-5989",
  instagramUrl: "https://www.instagram.com/fcsolucoes",
  facebookUrl: "https://www.facebook.com/fcsolucoes",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=FC%20Solu%C3%A7%C3%B5es%20Materiais%20de%20Constru%C3%A7%C3%A3o%20Maric%C3%A1%20RJ",
  defaultMessage: "Olá, FC Soluções! Gostaria de fazer um orçamento de materiais de construção."
};

const makeWhatsAppUrl = (message = CONFIG.defaultMessage) => {
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.setAttribute("href", makeWhatsAppUrl());
});

document.querySelectorAll("[data-whatsapp-text]").forEach((link) => {
  link.setAttribute("href", makeWhatsAppUrl());
});

document.querySelectorAll("[data-instagram]").forEach((link) => {
  link.setAttribute("href", CONFIG.instagramUrl);
});

document.querySelectorAll("[data-facebook]").forEach((link) => {
  link.setAttribute("href", CONFIG.facebookUrl);
});

document.querySelectorAll("[data-maps]").forEach((link) => {
  link.setAttribute("href", CONFIG.googleMapsUrl);
});

const quoteForm = document.querySelector("#quoteForm");
if (quoteForm) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(quoteForm);
    const nome = data.get("nome")?.toString().trim();
    const cidade = data.get("cidade")?.toString().trim();
    const material = data.get("material")?.toString().trim();
    const detalhes = data.get("detalhes")?.toString().trim();

    const message = [
      "Olá, FC Soluções! Quero fazer um orçamento.",
      nome ? `Nome: ${nome}` : null,
      cidade ? `Cidade: ${cidade}` : null,
      material ? `Material: ${material}` : null,
      detalhes ? `Detalhes: ${detalhes}` : null
    ].filter(Boolean).join("\n");

    window.open(makeWhatsAppUrl(message), "_blank", "noopener");
  });
}

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#menu-principal");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
