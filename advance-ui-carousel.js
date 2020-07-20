/*
* Carousel - Advanced UI
*/
$(function () {
  // Carousel
  $('.carousel').carousel();
  // Full Width Slider
  $('.carousel.carousel-slider').carousel({ fullWidth: true });
  // Special Options
  $('.carousel.carousel-slider').carousel({ fullWidth: true });

  $('.carousel.carousel-slider.carousel-indicators').carousel({
    fullWidth: true,
    indicators: true
  });


    var elems = document.querySelectorAll('.carousel');


    var instances = M.Carousel.init(elems, {

      onCycleTo: function(a){

        elems.forEach(function (elem) {
          var instance = M.Carousel.getInstance(elem);

          if(instance.dragged){
            var otherCarousels= document.querySelectorAll('div.carousel:not(.scrolling)');

            otherCarousels.forEach(function(e){
              var others = M.Carousel.getInstance(e);
              const wait = () => {
                for(let i= 0; i<elem.children.length; i++){
                  if(elem.children[i]===a){
                    others.set(i);
                  }
                }
              }
              setTimeout(wait,1000);
            });
          }
        });
      }
    });


  var notActives = document.querySelectorAll('a.carousel-item:not(.active)');

  notActives.forEach(function(e){
    e.addEventListener("click",function(elem){
      var otherCarouselsx= document.querySelectorAll('div.carousel:not(.scrolling)');

      otherCarouselsx.forEach(function(carousel){
        const waitasec = () => {
          for(let m= 0; m<carousel.children.length; m++){
            if(carousel.children[m]===e){
              $('.carousel:not(.scrolling)').carousel('set',m);
            }
          }
        }
        setTimeout(waitasec,1000);
      })
    })
  });

});
