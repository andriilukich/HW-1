// require('es6-promise').polyfill();
require('nodelist-foreach-polyfill');
require('formdata-polyfill');

window.addEventListener('DOMContentLoaded', function(){
	'use strict';

	let tabs = require('./parts/tabs.js'),
		timer = require('./parts/timer.js'),
		mod = require('./parts/modal.js'),
		submitForm = require('./parts/form.js'),
		slider = require('./parts/slider'),
		calculator = require('./parts/calc.js');

	// Tabs
	tabs('.info-header-tab', '.info-header', '.info-tabcontent');
	// Timer
	timer('timer', '2019-12-15', '.seconds', '.minutes', '.hours', '.days');
	// Modal
	mod('.more', '.description-btn', '.overlay', '.popup-close', 'more-splash');
	// Form
	submitForm('.main-form', 'form', 'input', 'status');
	// Slider
	slider('.slider-item', '.prev', '.next', '.slider-dots', 'dot', 'dot-active');
	// Calc
	calculator('.counter-block-input', '.counter-block-input', 'select', 'total');
});
