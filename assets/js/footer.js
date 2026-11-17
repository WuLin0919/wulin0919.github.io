(function () {
    var footer = document.querySelector(".footer");
    if (!footer) return;

    function updateFooterHeight() {
        var height = Math.ceil(footer.getBoundingClientRect().height) + "px";
        if (document.documentElement.style.getPropertyValue("--site-footer-height") !== height) {
            document.documentElement.style.setProperty("--site-footer-height", height);
        }
    }

    updateFooterHeight();
    if ("ResizeObserver" in window) {
        new ResizeObserver(updateFooterHeight).observe(footer, { box: "border-box" });
    }
    window.addEventListener("resize", updateFooterHeight);
    window.addEventListener("load", updateFooterHeight);
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(updateFooterHeight);
    }
})();
