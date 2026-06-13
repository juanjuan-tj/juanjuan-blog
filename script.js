const views = [...document.querySelectorAll(".view")];
const navLinks = [...document.querySelectorAll(".nav-link")];
const knownRoutes = new Set(views.map((view) => view.id));

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
