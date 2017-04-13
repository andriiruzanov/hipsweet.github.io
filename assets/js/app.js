
//   'use strict';

// var elems = document.querySelectorAll('li.faq__item');

//  for (var item = 0; item < elems.length; item++) {
//  	elems[item].addEventListener('click', function(event) {
//  event.target.firstElementChild.classList.toggle('faq__desc_active');		
 
//  	});
//  }

// })();

// 
// $(document).ready(function() {
// 	$('.faq__list').on('click', '.faq__item', function() {
// 		$(this).children().slideToggle();
// 	});

// 	$('.team__nav-list').on('click', '.team__nav-item.toni', function(){
// 	$('.member__list_active').removeClass('member__list_active');
//   	$(this).parents().find('.toni').addClass('member__list_active').removeClass('member__item');
//   	$(this).parents().find('ul.richard').addClass('member__item');
//   	$(this).parents().find('ul.mity').addClass('member__item');
  	

// });
// 	$('.team__nav-list').on('click', '.team__nav-item.richard', function(){

// 	$('.member__list_active').removeClass('member__list_active');
//   	$(this).parents().find('.richard').addClass('member__list_active').removeClass('member__item');
//    	$(this).parents().find('ul.toni').addClass('member__item');
//    	$(this).parents().find('ul.mity').addClass('member__item');
  	

// });
// 	$('.team__nav-list').on('click', '.team__nav-item.mity', function(){
// 	$('.member__list_active').removeClass('member__list_active');
//   	$(this).parents().find('.mity').addClass('member__list_active').removeClass('member__item');
//   	$(this).parents().find('ul.toni').addClass('member__item');
//   	$(this).parents().find('ul.richard').addClass('member__item');
// });

// << аккордион  >>

// 	$('.team__nav-item').on('click', function(e){

// 		//сохраняем в переменные, то что повторяется в коде
// 		var 
// 			$this = $(this), //указываем this чтобы срабатывало именно в том месте где кликнули, а не везде 
// 		 	tabsContent = $('.member__item'),
// 		 	ndx = $this.index();
// 		$(this)
// 			.addClass('active')
// 			.siblings()
// 			.removeClass('active');
// //находим по индексу, добавляем класс и удаляем у братьев
// 		tabsContent.eq(ndx)
// 			.addClass('active')
// 			.siblings()
// 			.removeClass('active')

// 	})

//делаем табы независимы от других табов которые могут быть на странице

// кликаем на team__nav-link затем находим элемент с классом team__nav-item и добавляем к нему класс active. Находим братьев(siblings())
//и удаляем класс active Затем находим элемент-предок с классом tabs потом находим
// элемент с классом member_item и возвращаем элементы под индексами 0 1 2 - соответствующее кол-ву єлементов member__item. 
// добавляем им класс active находим его братьев и удаляем active.

$(document).ready(function() {

(function() {  // самовызывающаяся функция для ограничания области видимости переменных

	var flag = true;

	$('.acco__trigger').on('click', function(e){
			e.preventDefault();

			var
				$this = $(this), //указываем this чтобы срабатывало именно в том месте где кликнули, а не везде 
				container = $this.closest('.acco'),
				item = $this.closest('.acco__item'),
				currentContent = item.find('.acco__content'),
				duration = 500;

			if (flag) {
				flag = false;
				if (!item.hasClass('active')) {

					item
						.addClass('active')
						.siblings()
						.removeClass('active')
						.find('.acco__content')
						.slideUp(duration);

					currentContent.slideDown(duration, function () {
						flag = true
					});
				} else {

					item.removeClass('active');
					currentContent.slideUp(function() {
						flag = true
					});
				}
			}
		});
	})();

(function() {  // самовызывающаяся функция для ограничания области видимости переменных

$(document).ready(function() {
	$('.team__nav-link').on('click', function(e){
			e.preventDefault();

			var
				$this = $(this), //указываем this чтобы срабатывало именно в том месте где кликнули, а не везде 
				item = $this.closest('.team__nav-item'),
				container = $this.closest('.tabs'),
				content = container.find('.member__item'),

				ndx = item.index(),
				reqItem = content.eq(ndx),
				activeItem = content.filter('.active');

			item.addClass('active')
				.siblings()
				.removeClass('active');

			content.eq(ndx)
				.addClass('active')
				.siblings()
				.removeClass('active')

// анимация. с flex не работает
		// 	activeItem.fadeOut(500, function () {    f  
		// 	reqItem.fadeIn(500, function () {
		// 		$(this).addClass('active')
		// 			.siblings()
		// 			.removeClass('active');
		// 	});
		// });
	});
	});
}());

	$('.slider3').bxSlider({
		slideWidth: 1100,
	    minSlides: 1,
	    maxSlides: 1,
	    slideMargin: 20,
	    // auto: true,
  		pause: 3000,
  		controls: true


  	});
	
(function() {  // самовызывающаяся функция для ограничания области видимости переменных
	
	$('.order__phone').inputmask({ mask: "+38(999)999-99-99"});

}());
});








  

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vICAgJ3VzZSBzdHJpY3QnO1xuXG4vLyB2YXIgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaS5mYXFfX2l0ZW0nKTtcblxuLy8gIGZvciAodmFyIGl0ZW0gPSAwOyBpdGVtIDwgZWxlbXMubGVuZ3RoOyBpdGVtKyspIHtcbi8vICBcdGVsZW1zW2l0ZW1dLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbi8vICBldmVudC50YXJnZXQuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnRvZ2dsZSgnZmFxX19kZXNjX2FjdGl2ZScpO1x0XHRcbiBcbi8vICBcdH0pO1xuLy8gIH1cblxuLy8gfSkoKTtcblxuLy8gXG4vLyAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbi8vIFx0JCgnLmZhcV9fbGlzdCcpLm9uKCdjbGljaycsICcuZmFxX19pdGVtJywgZnVuY3Rpb24oKSB7XG4vLyBcdFx0JCh0aGlzKS5jaGlsZHJlbigpLnNsaWRlVG9nZ2xlKCk7XG4vLyBcdH0pO1xuXG4vLyBcdCQoJy50ZWFtX19uYXYtbGlzdCcpLm9uKCdjbGljaycsICcudGVhbV9fbmF2LWl0ZW0udG9uaScsIGZ1bmN0aW9uKCl7XG4vLyBcdCQoJy5tZW1iZXJfX2xpc3RfYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ21lbWJlcl9fbGlzdF9hY3RpdmUnKTtcbi8vICAgXHQkKHRoaXMpLnBhcmVudHMoKS5maW5kKCcudG9uaScpLmFkZENsYXNzKCdtZW1iZXJfX2xpc3RfYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ21lbWJlcl9faXRlbScpO1xuLy8gICBcdCQodGhpcykucGFyZW50cygpLmZpbmQoJ3VsLnJpY2hhcmQnKS5hZGRDbGFzcygnbWVtYmVyX19pdGVtJyk7XG4vLyAgIFx0JCh0aGlzKS5wYXJlbnRzKCkuZmluZCgndWwubWl0eScpLmFkZENsYXNzKCdtZW1iZXJfX2l0ZW0nKTtcbiAgXHRcblxuLy8gfSk7XG4vLyBcdCQoJy50ZWFtX19uYXYtbGlzdCcpLm9uKCdjbGljaycsICcudGVhbV9fbmF2LWl0ZW0ucmljaGFyZCcsIGZ1bmN0aW9uKCl7XG5cbi8vIFx0JCgnLm1lbWJlcl9fbGlzdF9hY3RpdmUnKS5yZW1vdmVDbGFzcygnbWVtYmVyX19saXN0X2FjdGl2ZScpO1xuLy8gICBcdCQodGhpcykucGFyZW50cygpLmZpbmQoJy5yaWNoYXJkJykuYWRkQ2xhc3MoJ21lbWJlcl9fbGlzdF9hY3RpdmUnKS5yZW1vdmVDbGFzcygnbWVtYmVyX19pdGVtJyk7XG4vLyAgICBcdCQodGhpcykucGFyZW50cygpLmZpbmQoJ3VsLnRvbmknKS5hZGRDbGFzcygnbWVtYmVyX19pdGVtJyk7XG4vLyAgICBcdCQodGhpcykucGFyZW50cygpLmZpbmQoJ3VsLm1pdHknKS5hZGRDbGFzcygnbWVtYmVyX19pdGVtJyk7XG4gIFx0XG5cbi8vIH0pO1xuLy8gXHQkKCcudGVhbV9fbmF2LWxpc3QnKS5vbignY2xpY2snLCAnLnRlYW1fX25hdi1pdGVtLm1pdHknLCBmdW5jdGlvbigpe1xuLy8gXHQkKCcubWVtYmVyX19saXN0X2FjdGl2ZScpLnJlbW92ZUNsYXNzKCdtZW1iZXJfX2xpc3RfYWN0aXZlJyk7XG4vLyAgIFx0JCh0aGlzKS5wYXJlbnRzKCkuZmluZCgnLm1pdHknKS5hZGRDbGFzcygnbWVtYmVyX19saXN0X2FjdGl2ZScpLnJlbW92ZUNsYXNzKCdtZW1iZXJfX2l0ZW0nKTtcbi8vICAgXHQkKHRoaXMpLnBhcmVudHMoKS5maW5kKCd1bC50b25pJykuYWRkQ2xhc3MoJ21lbWJlcl9faXRlbScpO1xuLy8gICBcdCQodGhpcykucGFyZW50cygpLmZpbmQoJ3VsLnJpY2hhcmQnKS5hZGRDbGFzcygnbWVtYmVyX19pdGVtJyk7XG4vLyB9KTtcblxuLy8gPDwg0LDQutC60L7RgNC00LjQvtC9ICA+PlxuXG4vLyBcdCQoJy50ZWFtX19uYXYtaXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuXG4vLyBcdFx0Ly/RgdC+0YXRgNCw0L3Rj9C10Lwg0LIg0L/QtdGA0LXQvNC10L3QvdGL0LUsINGC0L4g0YfRgtC+INC/0L7QstGC0L7RgNGP0LXRgtGB0Y8g0LIg0LrQvtC00LVcbi8vIFx0XHR2YXIgXG4vLyBcdFx0XHQkdGhpcyA9ICQodGhpcyksIC8v0YPQutCw0LfRi9Cy0LDQtdC8IHRoaXMg0YfRgtC+0LHRiyDRgdGA0LDQsdCw0YLRi9Cy0LDQu9C+INC40LzQtdC90L3QviDQsiDRgtC+0Lwg0LzQtdGB0YLQtSDQs9C00LUg0LrQu9C40LrQvdGD0LvQuCwg0LAg0L3QtSDQstC10LfQtNC1IFxuLy8gXHRcdCBcdHRhYnNDb250ZW50ID0gJCgnLm1lbWJlcl9faXRlbScpLFxuLy8gXHRcdCBcdG5keCA9ICR0aGlzLmluZGV4KCk7XG4vLyBcdFx0JCh0aGlzKVxuLy8gXHRcdFx0LmFkZENsYXNzKCdhY3RpdmUnKVxuLy8gXHRcdFx0LnNpYmxpbmdzKClcbi8vIFx0XHRcdC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4vLyAvL9C90LDRhdC+0LTQuNC8INC/0L4g0LjQvdC00LXQutGB0YMsINC00L7QsdCw0LLQu9GP0LXQvCDQutC70LDRgdGBINC4INGD0LTQsNC70Y/QtdC8INGDINCx0YDQsNGC0YzQtdCyXG4vLyBcdFx0dGFic0NvbnRlbnQuZXEobmR4KVxuLy8gXHRcdFx0LmFkZENsYXNzKCdhY3RpdmUnKVxuLy8gXHRcdFx0LnNpYmxpbmdzKClcbi8vIFx0XHRcdC5yZW1vdmVDbGFzcygnYWN0aXZlJylcblxuLy8gXHR9KVxuXG4vL9C00LXQu9Cw0LXQvCDRgtCw0LHRiyDQvdC10LfQsNCy0LjRgdC40LzRiyDQvtGCINC00YDRg9Cz0LjRhSDRgtCw0LHQvtCyINC60L7RgtC+0YDRi9C1INC80L7Qs9GD0YIg0LHRi9GC0Ywg0L3QsCDRgdGC0YDQsNC90LjRhtC1XG5cbi8vINC60LvQuNC60LDQtdC8INC90LAgdGVhbV9fbmF2LWxpbmsg0LfQsNGC0LXQvCDQvdCw0YXQvtC00LjQvCDRjdC70LXQvNC10L3RgiDRgSDQutC70LDRgdGB0L7QvCB0ZWFtX19uYXYtaXRlbSDQuCDQtNC+0LHQsNCy0LvRj9C10Lwg0Log0L3QtdC80YMg0LrQu9Cw0YHRgSBhY3RpdmUuINCd0LDRhdC+0LTQuNC8INCx0YDQsNGC0YzQtdCyKHNpYmxpbmdzKCkpXG4vL9C4INGD0LTQsNC70Y/QtdC8INC60LvQsNGB0YEgYWN0aXZlINCX0LDRgtC10Lwg0L3QsNGF0L7QtNC40Lwg0Y3Qu9C10LzQtdC90YIt0L/RgNC10LTQvtC6INGBINC60LvQsNGB0YHQvtC8IHRhYnMg0L/QvtGC0L7QvCDQvdCw0YXQvtC00LjQvFxuLy8g0Y3Qu9C10LzQtdC90YIg0YEg0LrQu9Cw0YHRgdC+0LwgbWVtYmVyX2l0ZW0g0Lgg0LLQvtC30LLRgNCw0YnQsNC10Lwg0Y3Qu9C10LzQtdC90YLRiyDQv9C+0LQg0LjQvdC00LXQutGB0LDQvNC4IDAgMSAyIC0g0YHQvtC+0YLQstC10YLRgdGC0LLRg9GO0YnQtdC1INC60L7Quy3QstGDINGU0LvQtdC80LXQvdGC0L7QsiBtZW1iZXJfX2l0ZW0uIFxuLy8g0LTQvtCx0LDQstC70Y/QtdC8INC40Lwg0LrQu9Cw0YHRgSBhY3RpdmUg0L3QsNGF0L7QtNC40Lwg0LXQs9C+INCx0YDQsNGC0YzQtdCyINC4INGD0LTQsNC70Y/QtdC8IGFjdGl2ZS5cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cbihmdW5jdGlvbigpIHsgIC8vINGB0LDQvNC+0LLRi9C30YvQstCw0Y7RidCw0Y/RgdGPINGE0YPQvdC60YbQuNGPINC00LvRjyDQvtCz0YDQsNC90LjRh9Cw0L3QuNGPINC+0LHQu9Cw0YHRgtC4INCy0LjQtNC40LzQvtGB0YLQuCDQv9C10YDQtdC80LXQvdC90YvRhVxuXG5cdHZhciBmbGFnID0gdHJ1ZTtcblxuXHQkKCcuYWNjb19fdHJpZ2dlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHR2YXJcblx0XHRcdFx0JHRoaXMgPSAkKHRoaXMpLCAvL9GD0LrQsNC30YvQstCw0LXQvCB0aGlzINGH0YLQvtCx0Ysg0YHRgNCw0LHQsNGC0YvQstCw0LvQviDQuNC80LXQvdC90L4g0LIg0YLQvtC8INC80LXRgdGC0LUg0LPQtNC1INC60LvQuNC60L3Rg9C70LgsINCwINC90LUg0LLQtdC30LTQtSBcblx0XHRcdFx0Y29udGFpbmVyID0gJHRoaXMuY2xvc2VzdCgnLmFjY28nKSxcblx0XHRcdFx0aXRlbSA9ICR0aGlzLmNsb3Nlc3QoJy5hY2NvX19pdGVtJyksXG5cdFx0XHRcdGN1cnJlbnRDb250ZW50ID0gaXRlbS5maW5kKCcuYWNjb19fY29udGVudCcpLFxuXHRcdFx0XHRkdXJhdGlvbiA9IDUwMDtcblxuXHRcdFx0aWYgKGZsYWcpIHtcblx0XHRcdFx0ZmxhZyA9IGZhbHNlO1xuXHRcdFx0XHRpZiAoIWl0ZW0uaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG5cblx0XHRcdFx0XHRpdGVtXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2FjdGl2ZScpXG5cdFx0XHRcdFx0XHQuc2libGluZ3MoKVxuXHRcdFx0XHRcdFx0LnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuXHRcdFx0XHRcdFx0LmZpbmQoJy5hY2NvX19jb250ZW50Jylcblx0XHRcdFx0XHRcdC5zbGlkZVVwKGR1cmF0aW9uKTtcblxuXHRcdFx0XHRcdGN1cnJlbnRDb250ZW50LnNsaWRlRG93bihkdXJhdGlvbiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0ZmxhZyA9IHRydWVcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdGl0ZW0ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdGN1cnJlbnRDb250ZW50LnNsaWRlVXAoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRmbGFnID0gdHJ1ZVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pKCk7XG5cbihmdW5jdGlvbigpIHsgIC8vINGB0LDQvNC+0LLRi9C30YvQstCw0Y7RidCw0Y/RgdGPINGE0YPQvdC60YbQuNGPINC00LvRjyDQvtCz0YDQsNC90LjRh9Cw0L3QuNGPINC+0LHQu9Cw0YHRgtC4INCy0LjQtNC40LzQvtGB0YLQuCDQv9C10YDQtdC80LXQvdC90YvRhVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0JCgnLnRlYW1fX25hdi1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdHZhclxuXHRcdFx0XHQkdGhpcyA9ICQodGhpcyksIC8v0YPQutCw0LfRi9Cy0LDQtdC8IHRoaXMg0YfRgtC+0LHRiyDRgdGA0LDQsdCw0YLRi9Cy0LDQu9C+INC40LzQtdC90L3QviDQsiDRgtC+0Lwg0LzQtdGB0YLQtSDQs9C00LUg0LrQu9C40LrQvdGD0LvQuCwg0LAg0L3QtSDQstC10LfQtNC1IFxuXHRcdFx0XHRpdGVtID0gJHRoaXMuY2xvc2VzdCgnLnRlYW1fX25hdi1pdGVtJyksXG5cdFx0XHRcdGNvbnRhaW5lciA9ICR0aGlzLmNsb3Nlc3QoJy50YWJzJyksXG5cdFx0XHRcdGNvbnRlbnQgPSBjb250YWluZXIuZmluZCgnLm1lbWJlcl9faXRlbScpLFxuXG5cdFx0XHRcdG5keCA9IGl0ZW0uaW5kZXgoKSxcblx0XHRcdFx0cmVxSXRlbSA9IGNvbnRlbnQuZXEobmR4KSxcblx0XHRcdFx0YWN0aXZlSXRlbSA9IGNvbnRlbnQuZmlsdGVyKCcuYWN0aXZlJyk7XG5cblx0XHRcdGl0ZW0uYWRkQ2xhc3MoJ2FjdGl2ZScpXG5cdFx0XHRcdC5zaWJsaW5ncygpXG5cdFx0XHRcdC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cblx0XHRcdGNvbnRlbnQuZXEobmR4KVxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2FjdGl2ZScpXG5cdFx0XHRcdC5zaWJsaW5ncygpXG5cdFx0XHRcdC5yZW1vdmVDbGFzcygnYWN0aXZlJylcblxuLy8g0LDQvdC40LzQsNGG0LjRjy4g0YEgZmxleCDQvdC1INGA0LDQsdC+0YLQsNC10YJcblx0XHQvLyBcdGFjdGl2ZUl0ZW0uZmFkZU91dCg1MDAsIGZ1bmN0aW9uICgpIHsgICAgZiAgXG5cdFx0Ly8gXHRyZXFJdGVtLmZhZGVJbig1MDAsIGZ1bmN0aW9uICgpIHtcblx0XHQvLyBcdFx0JCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJylcblx0XHQvLyBcdFx0XHQuc2libGluZ3MoKVxuXHRcdC8vIFx0XHRcdC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0Ly8gXHR9KTtcblx0XHQvLyB9KTtcblx0fSk7XG5cdH0pO1xufSgpKTtcblxuXHQkKCcuc2xpZGVyMycpLmJ4U2xpZGVyKHtcblx0XHRzbGlkZVdpZHRoOiAxMTAwLFxuXHQgICAgbWluU2xpZGVzOiAxLFxuXHQgICAgbWF4U2xpZGVzOiAxLFxuXHQgICAgc2xpZGVNYXJnaW46IDIwLFxuXHQgICAgLy8gYXV0bzogdHJ1ZSxcbiAgXHRcdHBhdXNlOiAzMDAwLFxuICBcdFx0Y29udHJvbHM6IHRydWVcblxuXG4gIFx0fSk7XG5cdFxuKGZ1bmN0aW9uKCkgeyAgLy8g0YHQsNC80L7QstGL0LfRi9Cy0LDRjtGJ0LDRj9GB0Y8g0YTRg9C90LrRhtC40Y8g0LTQu9GPINC+0LPRgNCw0L3QuNGH0LDQvdC40Y8g0L7QsdC70LDRgdGC0Lgg0LLQuNC00LjQvNC+0YHRgtC4INC/0LXRgNC10LzQtdC90L3Ri9GFXG5cdFxuXHQkKCcub3JkZXJfX3Bob25lJykuaW5wdXRtYXNrKHsgbWFzazogXCIrMzgoOTk5KTk5OS05OS05OVwifSk7XG5cbn0oKSk7XG59KTtcblxuXG5cblxuXG5cblxuXG4gIFxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
