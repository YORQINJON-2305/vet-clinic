var elOpenModal = document.querySelector(".paw-btn--open");
var elModal = document.querySelector(".modal");
var elCloseModal = document.querySelector(".modal__close-btn");

elOpenModal.addEventListener("click", function(){
    elModal.classList.add("open-modal");
})

elCloseModal.addEventListener("click", function(){
    elModal.classList.remove("open-modal");
})