
// !Бургер
if (document.querySelector('.menu-burger')) {
	(function () {
		// let burger = document.querySelector('.header__burger');
		let header = document.querySelector('.header');
		let burger = document.querySelector('.menu-burger');
		// let body = document.querySelector('.body');
		burger.addEventListener('click', () => {
			// burger.classList.toggle('header__burger_active');
			header.classList.toggle('header_active');
			// body.classList.toggle('overflow-h');
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
			console.log ('sdksdfn');
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
@@include('../../../_module/JS/_modal.js', {}) //Модальное окно  //!Сниппет "!modal" html
//@//@include('../../../_module/JS/_tooltip.js', {}) //Тултип  //!Сниппет "!tooltip" html
//@//@include('../../../_module/JS/_validator-form.js', {}) //Валидатор форм  //!Сниппет "!forma" html
//@//@include('../../../_module/JS/_accordion.js', {}) //Валидатор форм  //!Сниппет "!accordion" html

if (document.querySelector('.tel')) {
	//@//@include('../../../_module/JS/_maskPhone.js', {}) //Маска номера телефона (библиотека)
	//maskPhone('.tel');//Вызов функции маски номера телефона
}

