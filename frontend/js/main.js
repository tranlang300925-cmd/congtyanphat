// ===== Menu trên điện thoại =====
(function () {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("main-nav");
  if (!toggle || !nav) return;

  function setOpen(open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Đóng menu" : "Mở menu");
  }

  toggle.addEventListener("click", function () {
    setOpen(!nav.classList.contains("is-open"));
  });

  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) setOpen(false);
  });

  document.addEventListener("click", function (e) {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) setOpen(false);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setOpen(false);
  });
})();

// ===== Xem ảnh công trình cỡ lớn =====
(function () {
  const dialog = document.querySelector(".lightbox");
  if (!dialog || typeof dialog.showModal !== "function") return; // trình duyệt cũ: mở ảnh trong tab như link thường

  let img = null; // tạo khi mở lần đầu
  const caption = dialog.querySelector(".lightbox-caption");

  document.querySelectorAll(".gallery figure a").forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const thumb = link.querySelector("img");
      const text = link.parentElement.querySelector("figcaption");
      if (!img) {
        img = document.createElement("img");
        dialog.insertBefore(img, caption);
      }
      img.src = link.getAttribute("href");
      img.alt = thumb ? thumb.alt : "";
      caption.textContent = text ? text.textContent : "";
      dialog.showModal();
    });
  });

  dialog.querySelector(".lightbox-close").addEventListener("click", function () {
    dialog.close();
  });

  // Bấm ra vùng tối bên ngoài ảnh thì đóng
  dialog.addEventListener("click", function (e) {
    if (e.target === dialog) dialog.close();
  });
})();
