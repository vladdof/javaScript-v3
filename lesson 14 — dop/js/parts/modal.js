function modal() {
	// modal 
	let more = document.querySelector('.more'),
	    overlay = document.querySelector('.overlay'),
	    close = document.querySelector('.popup-close');

	more.addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		//нельзя прокручивать страницу, при открытом окне
		document.body.style.overflow = 'hidden';
	});

	close.addEventListener('click', () => {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});


	//привязываем модальное окно к табам
	let more_tab = document.querySelectorAll('.description-btn');

	for ( let i = 0; i < more_tab.length; i++ ) {
		more_tab[i].addEventListener('click', function () {
			this.classList.add('more-splash');
			overlay.style.display = 'block';
			document.body.style.overflow = 'hidden';
		});
	}
}

module.exports = modal;