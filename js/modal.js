const button = document.querySelector(".reservation__button");
const popup = document.querySelector(".reservation__modal");

popup.classList.add("reservation__modal--close");
button.addEventListener("click", function () {
  popup.classList.toggle("reservation__modal--close");
});
