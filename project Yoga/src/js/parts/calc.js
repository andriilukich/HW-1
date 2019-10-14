function calculator(inputPeople, inputDays, inputSelect, totalId) {
    let restPeople = document.querySelectorAll(inputPeople)[0],
		restDays = document.querySelectorAll(inputDays)[1],
		place = document.getElementById(inputSelect),
		totalValue = document.getElementById(totalId),
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
}

module.exports = calculator;
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