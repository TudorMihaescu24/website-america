const btns = document.querySelectorAll("[data-target]");
const close_modals = document.querySelectorAll(".Inchidere-Modal");
const overlay = document.getElementById("Overlay_Modal");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.target).classList.add("Activ");
    overlay.classList.add("Activ");
  });
});

close_modals.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".Modal");
    modal.classList.remove("Activ");
    overlay.classList.remove("Activ");
  });
});

window.onclick = (event) => {
  if (event.target == overlay) {
    const modals = document.querySelectorAll(".Modal");
    modals.forEach((modal) => modal.classList.remove("Activ"));
    overlay.classList.remove("Activ");
  }
};
