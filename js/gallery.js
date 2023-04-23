let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

const sr = ScrollReveal({
  distance: "40px",
  duration: 2500,
  reset: true,
});

sr.reveal(".logo", { delay: 200, origin: "left" });
sr.reveal(".navbar", { delay: 400, origin: "top" });
sr.reveal(".main", { delay: 520, origin: "right" });

sr.reveal(".info", { delay: 200, origin: "left" });

sr.reveal(".education h1", { delay: 200, origin: "top" });

sr.reveal(".timeline", { delay: 200, origin: "top" });
sr.reveal(".skill", { delay: 200, origin: "top" });
timeline;
