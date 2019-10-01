let btn = document.getElementsByTagName('button'),
	btn2 = document.querySelectorAll('button'),
	wrap = document.querySelector('.wrapper'),
	link = document.querySelector('a');
/*
// Первый спосод добавить дествие при клике
btn[0].onclick = function() {
  alert('You pressed the first button');
};

// Не добавляет действие, а перезаписывает его
btn[0].onclick = function() {
  alert('You again pressed the first button');
};
*/

/*
// Второй способ добавить действие
btn[0].addEventListener('click', function() {
  alert('You pressed the first button');
});
// Добавляет к существующему действию
btn[0].addEventListener('click', function() {
  alert('You again pressed the first button');
});

btn[0].addEventListener('mouseenter', function() {
  alert('You are hoverring the button');
});
*/

// Обработчик событий
btn[0].addEventListener('click', function(event) {
//   console.log('event: ', event);
//   let target = event.target;
//   target.style.display = 'none';
	console.log('Event happened: ' + event.type + ' with element ' + event.target);
});

wrap.addEventListener('click', function() {
	console.log('Event happened: ' + event.type + ' with element ' + event.target);
});

link.addEventListener('click', function(event) {
	event.preventDefault();
	console.log('Event happened: ' + event.type + ' with element ' + event.target);
});

btn2.forEach(function(item) {
	item.addEventListener('mouseleave', function() {
		console.log('You lived the button');
	})
});

