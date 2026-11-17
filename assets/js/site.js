/* Shared header and footer, so the menu is defined in one place. */
(function () {
  var PAGES = [
    { href: "index.html", label: "Home", key: "home" },
    { href: "publications.html", label: "Publications", key: "publications" },
    { href: "projects.html", label: "Projects", key: "projects" },
    { href: "teaching.html", label: "Teaching", key: "teaching" },
    { href: "cv.html", label: "CV", key: "cv" },
  ];

  var current = document.body.getAttribute("data-page");

  var links = PAGES.map(function (p) {
    return '<a href="' + p.href + '"' + (p.key === current ? ' class="active" aria-current="page"' : "") + ">" + p.label + "</a>";
  }).join("");

  var header = document.getElementById("site-header");
  if (header) {
    header.className = "site-header";
    header.innerHTML =
      '<div class="container">' +
      '<a class="brand" href="index.html">Georges Sfeir</a>' +
      '<button class="nav-toggle" aria-label="Open menu" aria-expanded="false">&#9776;</button>' +
      '<nav class="nav" id="nav">' + links + "</nav>" +
      "</div>";
    var toggle = header.querySelector(".nav-toggle");
    var nav = header.querySelector(".nav");
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var footer = document.getElementById("site-footer");
  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML =
      '<div class="container">' +
      "<span>&copy; " + new Date().getFullYear() + " Georges Sfeir</span>" +
      '<span>Institute for Transport Studies, University of Leeds &middot; <a href="mailto:G.Sfeir@leeds.ac.uk">G.Sfeir@leeds.ac.uk</a></span>' +
      "</div>";
  }
})();

/* Shared helper: render one publication entry. */
window.renderPub = function (p, opts) {
  opts = opts || {};
  function esc(s) {
    return String(s || "").replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  var authors = esc(p.authors).replace(/Sfeir, G\./g, "<strong>Sfeir, G.</strong>");
  var title = p.link
    ? '<a class="pub-title" href="' + esc(p.link) + '" target="_blank" rel="noopener">' + esc(p.title) + "</a>"
    : '<span class="pub-title">' + esc(p.title) + "</span>";
  var labels = { published: "Journal", "under-review": "Under review", conference: "Conference" };
  var badge = opts.badge ? '<span class="badge ' + p.status + '">' + labels[p.status] + "</span>" : "";
  var year = opts.showYear ? " (" + p.year + ")" : "";
  return (
    '<div class="pub">' +
    "<div>" + title + "</div>" +
    '<div class="pub-authors">' + authors + year + "</div>" +
    '<div class="pub-venue">' + esc(p.venue) + badge + "</div>" +
    (p.note ? '<div class="pub-note">' + esc(p.note) + "</div>" : "") +
    "</div>"
  );
};
