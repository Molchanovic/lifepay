
// !Бургер
if (document.querySelector('.menu-burger')) {
	(function () {
		// let burger = document.querySelector('.header__burger');
		let header = document.querySelector('.header');
		let burger = document.querySelector('.menu-burger');
		let body = document.querySelector('.body');
		burger.addEventListener('click', () => {
			// burger.classList.toggle('header__burger_active');
			header.classList.toggle('header_active');
			body.classList.toggle('overflow-h');
			burger.classList.toggle('menu-burger_active');
		})
	}());
};


// ! Липкая шапка 
if (document.querySelector('.header')) {
	let headerMove = document.querySelector('.header');

	window.addEventListener('scroll', function () {
		if (window.scrollY > 50) {
			headerMove.classList.add('header_move');
		}
		
	
		else {
			headerMove.classList.remove('header_move');
		}
	} )
}

// ! Перенос блоков

if (document.querySelector('.header')) {
	let wrapperHead = document.querySelector('.header__icons-mob');
	let bergerHead = document.querySelector('.menu-burger');
	let entranceHead = document.querySelector('.header__entrance');

	if ((document.documentElement.clientWidth <= 767)) {
		console.log('hedr')
		wrapperHead.append(entranceHead);
		wrapperHead.append(bergerHead);
}
}

//===Модули===============================
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}


const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e){
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}



function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener("click" , function (e){
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}

function popupClose(popupActive, doUnLock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if(doUnLock) {
			bodyUnLock();
		}
	}
}



function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
	if (lockPaddingValue.length > 0){
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	 body.style.paddingRight = lockPaddingValue;
	 body.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function (){
		if (lockPadding.length > 0){
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function (){
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e){
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});



(function(){
	if (!Element.prototype.closest) {
		Element.prototype.closest = function (css){
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function(){
	if (!Element.prototype.matches){
		Element.prototype.matches = Element.prototype.matchesSelector ||
		Element.prototype.webkitMatchesSelector ||
		Element.prototype.mozMatchesSelector ||
		Element.prototype.msMatchesSelector;
	}
})(); //Модальное окно  //!Сниппет "!modal" html
//@//@include('../../../_module/JS/_tooltip.js', {}) //Тултип  //!Сниппет "!tooltip" html
//@//@include('../../../_module/JS/_validator-form.js', {}) //Валидатор форм  //!Сниппет "!forma" html
//@//@include('../../../_module/JS/_accordion.js', {}) //Валидатор форм  //!Сниппет "!accordion" html

if (document.querySelector('.tel')) {
	//@//@include('../../../_module/JS/_maskPhone.js', {}) //Маска номера телефона (библиотека)
	//maskPhone('.tel');//Вызов функции маски номера телефона
}

