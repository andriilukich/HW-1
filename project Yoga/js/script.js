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
});
