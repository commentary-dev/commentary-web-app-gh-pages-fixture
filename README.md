# GitHub Pages Web App Review Fixture

This static app is the source for `commentary-dev/commentary-web-app-gh-pages-fixture`.

It intentionally uses plain HTML, CSS, and JavaScript so GitHub Pages can serve it without a build step. The app loads the review SDK from the Commentary CDN and the publisher writes route alias `index.html` files for deep-link smoke routes.

GitHub Pages has limited custom response-header control. Use this fixture to prove a customer-owned deployed preview can load with the SDK when the host/browser allows framing. Use the Azure Static Web Apps fixture when strict `frame-ancestors` header control is required.
