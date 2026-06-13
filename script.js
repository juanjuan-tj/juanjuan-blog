const views = [...document.querySelectorAll(".view")];
const navLinks = [...document.querySelectorAll(".nav-link")];
const knownRoutes = new Set(views.map((view) => view.id));
const fireflyLayer = document.querySelector(".fireflies");

const fireflies = [
  [8, 15, 2, 38, 28, 7.2, 0.1],
  [18, 72, 3, -26, 42, 8.5, 1.4],
  [29, 34, 2, 44, -30, 6.8, 0.8],
  [41, 18, 3, -32, 24, 9.1, 2.2],
  [52, 66, 2, 28, -34, 7.8, 1.1],
  [63, 29, 3, -42, 36, 8.9, 0.4],
  [73, 78, 2, 34, 22, 7.1, 1.9],
  [84, 21, 3, -30, -26, 9.4, 0.7],
  [92, 56, 2, 26, 38, 7.6, 2.6],
  [13, 48, 2, -24, -32, 8.2, 3.1],
  [25, 88, 3, 36, -24, 9.7, 1.7],
  [37, 58, 2, -34, 28, 7.4, 0.5],
  [48, 42, 3, 40, 34, 8.8, 2.4],
  [59, 86, 2, -28, -38, 7.9, 1.2],
  [69, 12, 2, 30, 30, 8.3, 3.3],
  [79, 44, 3, -38, -22, 9.2, 1.5],
  [88, 82, 2, 32, -36, 7.3, 0.2],
  [96, 32, 2, -26, 30, 8.6, 2.8],
];

if (fireflyLayer) {
  fireflies.forEach(([x, y, size, dx, dy, duration, delay]) => {
    const firefly = document.createElement("span");
    firefly.className = "firefly";
    firefly.style.setProperty("--x", `${x}%`);
    firefly.style.setProperty("--y", `${y}%`);
    firefly.style.setProperty("--size", `${size}px`);
    firefly.style.setProperty("--dx", `${dx}px`);
    firefly.style.setProperty("--dy", `${dy}px`);
    firefly.style.setProperty("--duration", `${duration}s`);
    firefly.style.setProperty("--delay", `${delay}s`);
    fireflyLayer.appendChild(firefly);
  });
}

function activateRoute() {
  const route = window.location.hash.replace("#", "") || "home";
  const target = knownRoutes.has(route) ? route : "home";

  views.forEach((view) => {
    view.classList.toggle("active", view.id === target);
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${target}`);
  });
}

window.addEventListener("hashchange", activateRoute);
activateRoute();
