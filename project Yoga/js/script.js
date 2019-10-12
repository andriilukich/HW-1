window.addEventListener('DOMContentLoaded', function(){

	'use strict';
	let tabs = document.querySelectorAll('.info-header-tab'),
		tabsContainer = document.querySelector('.info-header'),
		tabsContent = document.querySelectorAll('.info-tabcontent');

	function hideTabsContent(a) {
		for (let i = a; i < tabsContent.length; i++) {
			tabsContent[i].classList.remove('show');
			tabsContent[i].classList.add('hide');
		}
	}

	hideTabsContent(1);

	function showTabContent(b) {
		if (tabsContent[b].classList.contains('hide')) {
			tabsContent[b].classList.remove('hide');
			tabsContent[b].classList.add('show');
		}
	}

	tabsContainer.addEventListener('click', function(e) {
		let target = event.target;
		if (target && target.classList.contains('info-header-tab')) {
			for (let i = 0; i < tabs.length; i++) {
				if (tabs[i] == target) {
					hideTabsContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	});

	// Timer

	let deadline = '2019-12-15';

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor((t / 1000) % 60),
			minutes = Math.floor( (t / (1000 * 60) % 60) ),
			hours = Math.floor( (t / (1000 * 60 * 60) % 24 ) ),
			days = Math.floor(t / (1000 * 60 * 60 * 24) );

		return {
			total : t,
			seconds,
			minutes,
			hours,
			days
		};
	}

	function setClock(id, endtime) {
		let timer = document.getElementById(id),
			seconds = timer.querySelector('.seconds'),
			minutes = timer.querySelector('.minutes'),
			hours = timer.querySelector('.hours'),
			days = timer.querySelector('.days'),
			timeInterval = setInterval(updateClock, 1000);

			if (endtime <= 0) {
				clearInterval(timeInterval);
			}

		function updateClock() {
			let upTime = getTimeRemaining(endtime);
			seconds.textContent = (upTime.seconds < 10) ? '0' + upTime.seconds : upTime.seconds;
			minutes.textContent = (upTime.minutes < 10) ? '0' + upTime.minutes : upTime.minutes;
			hours.textContent = (upTime.hours < 10) ? '0' + upTime.hours : upTime.hours;
			days.textContent = (upTime.days < 10) ? '0' + upTime.days : upTime.days;

			if (upTime.total <= 0) {
				clearInterval(timeInterval);
				seconds.textContent = '00';
				minutes.textContent = '00';
				hours.textContent = '00';
				days.textContent = '00';
			}
		}
	}

	setClock('timer', deadline);

	// Modal
		
	function activateModeWind(btn) {
		let overlay = document.querySelector('.overlay'),
			btnCloseModWind = document.querySelector('.popup-close');

		btn.addEventListener('click', function() {
			this.classList.add('more-splash');
			overlay.style.display = 'block';
			document.body.style.overflow = 'hidden';
		});
	
		btnCloseModWind.addEventListener('click', function() {
			btn.classList.remove('more-splash');
			overlay.style.display = 'none';
			document.body.style.overflow = '';
			statusMessage.innerHTML = '';
		});
	}

	let btnModWind = document.querySelector('.more'),
		btnDescription = document.querySelectorAll('.description-btn');

	activateModeWind(btnModWind);

	btnDescription.forEach(function(event) {
		activateModeWind(event);
	});

	// Form
	let message = {
		loading : 'Загрузка...',
		success : 'Спасибо! Скоро мы с вами свяжемся!',
		failure : 'Что-то пошло не так ...'
	},
		formMain = document.querySelector('.main-form'),
		formContact = document.getElementById('form'),
		input = document.getElementsByTagName('input'),
		statusMessage = document.createElement('div');

	statusMessage.classList.add('status');

	/*

	function sendForm(form) {
		
		form.addEventListener('submit', function(e) {
			e.preventDefault();
			form.appendChild(statusMessage);

			let request = new XMLHttpRequest();
			request.open('POST', 'server.php');
			request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); //json
			// request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //PHP

			let formData = new FormData(form),
				obj = {}; //json

			formData.forEach(function(value, key) { //json
				obj[key] = value;
			});

			let json = JSON.stringify(obj); //json
			request.send(json); //json
			// request.send(formData); //PHP

			request.addEventListener('readystatechange', function() {
				if (request.readyState < 4) {
					statusMessage.innerHTML = message.loading;
				} else if (request.readyState === 4 && request.status == 200) {
					statusMessage.innerHTML = message.success;
				} else {
					statusMessage.innerHTML = message.failure;
				}
			});

			let input = form.querySelectorAll('input');

			input.forEach(function(element) {
				element.value = '';
			});

		}); 
	}

	sendForm(formMain);
	sendForm(formContact);

	*/

	// FORM + promise
	function sendForm(form) {
		
		form.addEventListener('submit', function(e) {
			e.preventDefault();
			form.appendChild(statusMessage);
			let formData = new FormData(form);

			function postData(data) {
				return new Promise(function(resolve, reject) {
					let request = new XMLHttpRequest();

					request.open('POST', 'server.php');
					
					request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //PHP

					request.onreadystatechange = function() {
						if (request.readyState < 4) {
							resolve();
						} else if (request.readyState === 4) {
							if (request.status == 200 && request.status < 300) {
								resolve();
							} else {
								reject();
							}
						}
					};

					request.send(data); //PHP
				});
			} //End postData

			function clearInput() {
				for (let i = 0; i < input.length; i++) {
					input[i].value = '';
				}
			}

			postData(formData)
				.then(() => statusMessage.innerHTML = message.loading)
				.then(() => statusMessage.innerHTML = message.success)
				.catch(() => statusMessage.innerHTML = message.failure)
				.then(clearInput);

		}); 
	}

	sendForm(formMain);
	sendForm(formContact);

	// Slider
	let slideIndex = 1,
		slides = document.querySelectorAll('.slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dotsWrap = document.querySelector('.slider-dots'),
		dots = document.querySelectorAll('.dot');

		showSlides(slideIndex);

	function showSlides(n) {

		if (n > slides.length) {
			slideIndex = 1;
		} else if (n < 1) {
			slideIndex = slides.length;
		}

		slides.forEach((item) => item.style.display = 'none');
		// for (let i = 0; i < slides.length; i++) {
		// 	slides[i].style.display = 'none';
		// }
		dots.forEach((item) => item.classList.remove('dot-active'));

		slides[slideIndex - 1].style.display = 'block';
		dots[slideIndex - 1].classList.add('dot-active');
	}

	function plusSlide(n) {
		showSlides(slideIndex += n);
	}

	function currentSlide(n) {
		showSlides(slideIndex = n);
	}

	prev.addEventListener('click', function() {
		plusSlide(-1);
	});
	next.addEventListener('click', function() {
		plusSlide(1);
	});

	dotsWrap.addEventListener('click', function(e) {
		for (let i = 0; i <= dots.length; i++) {
			if (e.target.classList.contains('dot') && event.target == dots[i-1]) {
				currentSlide(i);
			}
		}
	});


	// Calc
	let restPeople = document.querySelectorAll('.counter-block-input')[0],
		restDays = document.querySelectorAll('.counter-block-input')[1],
		place = document.getElementById('select'),
		totalValue = document.getElementById('total'),
		peopleSum = 0,
		daysSum = 0,
		total = 0;

	totalValue.innerHTML = 0;

	restPeople.addEventListener('change', function() {
		peopleSum = +this.value;
		total = (peopleSum + daysSum) * 300;

		if (restDays.value == '' || peopleSum == '') {
			totalValue.innerHTML = 0;
		} else {
			totalValue.innerHTML = total;
		}
	});

	restDays.addEventListener('change', function() {
		daysSum = +this.value;
		total = (peopleSum + daysSum) * 300;

		if (restDays.value == '' || restPeople.value == '') {
			totalValue.innerHTML = 0;
		} else {
			totalValue.innerHTML = total;
		}
	});

	place.addEventListener('change', function() {
		if (restDays.value == '' || restPeople.value == '') {
			totalValue.innerHTML = 0;
		} else {
			let a = total;
			totalValue.innerHTML = a * this.options[this.selectedIndex].value;
		}
	});

	/*
	function calc() {
		if (restPeople.value != '' && restDays.value != '') {
			totalValue.innerHTML = total = (+restPeople.value + +restDays.value ) * 300;
		} else {
			totalValue.innerHTML = 0;
		}
	}

	restPeople.addEventListener('change', () => calc());

	restDays.addEventListener('change', () => calc());

	place.addEventListener('change', function() {
		if (restDays.value == '' || restPeople.value == '') {
			totalValue.innerHTML = 0;
		} else {
			let a = total;
			totalValue.innerHTML = a * this.options[this.selectedIndex].value;
		}
	});
	*/
});
