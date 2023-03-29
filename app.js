var br = 0;
var da = 1;

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
/*
    Carousel
*/
$('#carousel-example').on('slide.bs.carousel', function (e) {
  var $e = $(e.relatedTarget);
  var idx = $e.index();
  var itemsPerSlide = 5;
  var totalItems = $('.carousel-item').length;
  

  if (idx >= totalItems-(itemsPerSlide-1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i=0; i<it; i++) {
          // append slides to end
          if (e.direction=="left") {
              $('.carousel-item').eq(i).appendTo('.carousel-inner');
          }
          else {
              $('.carousel-item').eq(0).appendTo('.carousel-inner');
          }
      }
  }
});

function burger(){
  br++;
  if(br==2)br=0;
  
  if(da==1){  if(br==1){document.getElementById("bara-sus").classList.add("bg-color");}
  else{
    
    document.getElementById("bara-sus").classList.remove("bg-color");}}

  
}
window.onscroll = function () {
    "use strict";
    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop >= 50
    ) {
      document.getElementById("bara-sus").classList.add("bg-color");
      document.getElementById("bara-sus").classList.remove("bg-trans");
      da=0;
    } else {
      document.getElementById("bara-sus").classList.add("bg-trans");
      document.getElementById("bara-sus").classList.remove("bg-color");
      da=1;
    }

  };
