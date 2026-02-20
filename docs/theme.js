(function () {
  var root = document.documentElement;
  var buttons = document.querySelectorAll(".theme-switcher button");
  var stored = localStorage.getItem("theme") || "auto";

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    buttons.forEach(function (b) {
      b.classList.toggle(
        "active",
        b.getAttribute("data-theme") === theme,
      );
    });
    localStorage.setItem("theme", theme);
  }

  buttons.forEach(function (b) {
    b.addEventListener("click", function () {
      apply(b.getAttribute("data-theme"));
    });
  });

  apply(stored);
})();
