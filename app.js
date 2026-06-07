(function hostedFixtureApp() {
  const routeToPage = new Map([
    ["/", "home"],
    ["/settings/billing", "billing"],
    ["/checkout", "checkout"],
  ]);
  const pages = new Map(Array.from(document.querySelectorAll("[data-page]")).map((page) => [page.getAttribute("data-page"), page]));
  let counter = 0;

  function normalizedRoute() {
    const path = window.location.pathname.replace(/^\/commentary-web-app-gh-pages-fixture/u, "") || "/";
    return routeToPage.has(path) ? path : "/";
  }

  function renderRoute() {
    const pageName = routeToPage.get(normalizedRoute()) || "home";
    for (const [name, page] of pages) {
      page.hidden = name !== pageName;
    }
  }

  function navigate(route) {
    const base = "/commentary-web-app-gh-pages-fixture";
    window.history.pushState({}, "", route === "/" ? `${base}/` : `${base}${route}`);
    renderRoute();
  }

  document.querySelectorAll("[data-route-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      navigate(link.getAttribute("data-target-route") || "/");
    });
  });

  document.querySelector("[data-counter-button]")?.addEventListener("click", () => {
    counter += 1;
    const value = document.querySelector("[data-counter-value]");
    if (value) {
      value.textContent = String(counter);
    }
  });

  window.addEventListener("popstate", renderRoute);
  renderRoute();
})();
