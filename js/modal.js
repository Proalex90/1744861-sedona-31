const button = document.querySelector(".reservation__button");
const popup = document.querySelector(".reservation__modal");

button.addEventListener("click", function () {
  popup.classList.toggle("reservation__modal--close");
});
