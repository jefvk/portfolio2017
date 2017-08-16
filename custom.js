
$('.grid').isotope({
  itemSelector: '.vlak',
  layoutMode: 'fitRows',
 getSortData: 1{
   name: '.name',
   symbol: '.symbol',
   number: '.number parseInt',
   category: '[data-category]',
   weight: function( itemElem ) {
     var weight = $( itemElem ).find('.weight').text();
     return parseFloat( weight.replace( /[\(\)]/g, '') );
   }
 }
});
var $grid = $('.grid').isotope({
});

$(".main").onepage_scroll({});

var flikker = function(){
  var j = document.getElementsByClassName("j")[0];
  var e = document.getElementsByClassName("e")[0];
  var f = document.getElementsByClassName("f")[0];
  var random = Math.floor((Math.random() * 10) + 1);

  if (random % 2 === 0 && random % 5 === 0) {
    j.style.fill = "none";
    e.style.fill = "none";
    f.style.fill = "none";
  }else{
    j.style.fill = "#CCCCCC";
    e.style.fill = "#CCCCCC";
    f.style.fill = "#CCCCCC";
  }
}

setInterval(flikker, 200);

function animate(){
  var streepjes = document.getElementsByClassName("animate");
  console.log(streepjes);
  var teller = 0;

  while(teller < streepjes.length){
    if (streepjes[teller].className==="st0 animate") {
      streepjes[teller].classList.add("on");
    }else{
      streepjes[teller].classList.remove("on");
    }
    teller++;
  }
}

setInterval(animate, 1000);
