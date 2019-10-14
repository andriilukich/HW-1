tabs('info-header-tab', '.info-header', '.info-tabcontent');
function tabs(tabsClass, tabsContainerClass, tabsContentClass) {
    let tabs = document.querySelectorAll('.' + tabsClass),
		tabsContainer = document.querySelector(tabsContainerClass),
		tabsContent = document.querySelectorAll(tabsContentClass);

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
		if (target && target.classList.contains(tabsClass)) {
			for (let i = 0; i < tabs.length; i++) {
				if (tabs[i] == target) {
					hideTabsContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	});
}

module.exports = tabs;