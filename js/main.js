var elOpenModal = document.querySelector(".paw-btn--open");
var elModal = document.querySelector(".modal");
var elCloseModal = document.querySelector(".modal__close-btn");

var elReadMore = document.querySelectorAll(".paw-btn--status")
var elReadMoreItem = document.querySelectorAll(".status__item")

elOpenModal.addEventListener("click", function(){
    elModal.classList.add("open-modal");
})

elCloseModal.addEventListener("click", function(){
    elModal.classList.remove("open-modal");
})

elReadMore.forEach(function (btn){
    btn.addEventListener("click", function(evt){
        evt.preventDefault();

    elReadMoreItem.forEach(function(item){
        item.classList.remove("status__item--active")
    })
        
  })
});