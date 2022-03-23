let q1 = document.querySelector('.q1');
let q2 = document.querySelector('.q2');
let q3 = document.querySelector('.q3');
let q4 = document.querySelector('.q4');
q1.addEventListener('click', function () {
  q1.classList.add('activeQ');
  q2.classList.add('activeF');
  q3.classList.add('activeF');
  q4.classList.add('activeF');
});
