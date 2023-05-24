const sr = ScrollReveal({
  distance: "40px",
  duration: 2500,
  reset: true,
});

sr.reveal("header", { delay: 600, origin: "top" });
sr.reveal(".home-text span", { delay: 600, origin: "top" });
sr.reveal(".home-text h1", { delay: 680, origin: "left" });
sr.reveal(".home-text p", { delay: 750, origin: "right" });
sr.reveal(".main-btn", { delay: 860, origin: "left" });
sr.reveal(".home-img", { delay: 950, origin: "right" });

sr.reveal(".social", { delay: 950, origin: "bottom" });
sr.reveal("p", { delay: 950, origin: "bottom" });

sr.reveal(".bg", { delay: 950, origin: "right" });
sr.reveal(".contactForm", { delay: 950, origin: "right" });
sr.reveal("h3, h2, .icon", { delay: 950, origin: "right" });
