 function slider(slidesClass, btnPrev, btnNext, dotsWrapper, dotsClass, dotsActiveClass) {
    let slideIndex = 1,
		slides = document.querySelectorAll(slidesClass),
		prev = document.querySelector(btnPrev),
		next = document.querySelector(btnNext),
		dotsWrap = document.querySelector(dotsWrapper),
		dots = document.querySelectorAll('.' + dotsClass);

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
		dots.forEach((item) => item.classList.remove(dotsActiveClass));

		slides[slideIndex - 1].style.display = 'block';
		dots[slideIndex - 1].classList.add(dotsActiveClass);
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
			if (e.target.classList.contains(dotsClass) && event.target == dots[i-1]) {
				currentSlide(i);
			}
		}
    });
}

module.exports = slider;