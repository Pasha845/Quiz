document.querySelector('.quiz__').addEventListener('click', function(e) {
  e.target.closest('.quiz__btn-after').classList.toggle('quiz__btn-color');
})