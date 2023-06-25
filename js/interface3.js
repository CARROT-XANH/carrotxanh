$('.js-play').magnificPopup({
  type: 'iframe',
  removalDelay: 300
});


var elements = document.querySelectorAll('.numb-count'); 
var values = []; 
elements.forEach(function(element) { 
values.push(parseInt(element.innerHTML)); 
element.innerHTML = '0'; // Thiết lập giá trị ban đầu cho các con số là 0 
});

function animateNumber(element, finalNumber) {
var counter = 0;
var interval = setInterval(function() {
if (counter < finalNumber) {
  element.innerHTML = counter;
  counter++;
} else {
  clearInterval(interval); 
}
}, 50); 
}

function isElementInViewport(el) {
// ...
}

function checkKeyPoint() {
var keyPoint = document.querySelector('#my-key-point');
var rect = keyPoint.getBoundingClientRect();
if (rect.top <= window.innerHeight && rect.bottom >= 0) {
window.removeEventListener('scroll', checkKeyPoint);
startCounting();
}
}

function startCounting() {
elements.forEach(function(element, index) {
animateNumber(element, values[index]);
});
}

window.addEventListener('scroll', checkKeyPoint);