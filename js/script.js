$(document).ready(function(){
   $('.header_burger').click(function(event){/*при клике на бургер что-то будет происходить*/
      $('.header_burger,.header_menu').toggleClass('active');/*добавятся классы при нажатии .header_burger,.header_menu* при повторном наж уберуться*/
      $('body').toggleClass('lock');/*блокируется скрол под выехавшем меню*/
   });
   $('.slider').slick({/*обращаемся к слайдеру*/
      arrows:true,/*стрелки вкл.(false выкл.)*/
      dots:true,/*точки*/
      adaptiveHeight:true, /*(по умолч false-выкл)слайдер автом. подстраивается по высоте под слайды разн выс
   чтобы функция работала пишем в css
   .slick-track{
   display: flex;
   align-items: flex-start};/*слайдер автом. подстраивается по высоте под слайды разн выс.*/

        slidesToShow:3,/*сколько покажет слайдов сразу(по умолч. 1)*/
        slidesToScroll:1,/*сколько будет перелистовать слайдов за раз(по умолч. 1) */
        speed:1000,/*скорость пролистования слайдов(по умолч.300)*/
        easing:'linear',/*анимация-сценарий смены слайдов (значение linear по умолчанию)*/
        infinite:true,/*false убираем бесконечное пролистование слайдов(по умолч.true)*/
        initialSlide:0,/*какой слайд будет первый в слайде (по умолч. 0)*/
        autoplay:false,/*автопроигрование слайдов(true-чтобы проигровало)(по умолч.false)*/
        autoplaySpeed:3000,/*скорость автопроигрования(по умолч.3000)*/
        pauseOnFocus:true,/*пауза автопрокрутки при клике*/
        pauseOnHover:true,/*пауза автопрокрутки при наведении на слайд*/
        pauseOnDotsHover:true,/*пауза автопрокрутки при наведении на точки*/
        draggable:true,/*false отключает свайп на пк*/ 
        swipe:true,/*false отключает свайп на пк и мобильных телефонах*/ 
        touchThreshold:10,/*сила пролистования(по умолч.5)*/
        touchMove:true,/*true можно двигать слайд,false отключает движение*/
        waitForAnimate:false,/*насколько я буду быстро кликать, настолько быстро будет изменяться слайд*/ 
       /* centerMode:true,/*главный выстраивает слайд по центру,хорошо работает с variableWidth:true*/
        variableWidth:false,/*true-каждый слайд занимает столько места-сколько он содержит*/
        rows:1,/*1-зн.по умолч.количество рядов слайда*/
        slidesPerRow:1,/*1-зн.по умолч.раб. в паре с rows,опр. сколько в ряде будет слайдов*/
        /*vertical:false,/*верт.слайд,треб доп.настр в css*/
        /*verticalSwiping:false,/*включает верт свайп*/
       /* asNavFor:".sliderbig",Связываем два слайда*/

   });
});
   function ibg(){
   $.each($('.ibg'), function(index, val) {
      if($(this).find('img').length>0){
         $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
      }
   });
}
ibg();
