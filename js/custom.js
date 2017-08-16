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

var animate = function(){
  var streepjes = document.getElementsByClassName("animate");
  var teller = 0;

  while(teller<streepjes.length){

    streepjes[teller].classList.toggle("on");
    streepjes[teller].style.transition="opacity 1s"
    teller++;
  }
}

setInterval(animate, 1000);

(function() {

	function init() {
		var speed = 150,
			easing = mina.easeinout;

		[].slice.call ( document.querySelectorAll( '#grid > a' ) ).forEach( function( el ) {
			var s = Snap( el.querySelector( 'svg' ) ), path = s.select( 'path' ),
				pathConfig = {
					from : path.attr( 'd' ),
					to : el.getAttribute( 'data-path-hover' )
				};

			el.addEventListener( 'mouseenter', function() {
				path.animate( { 'path' : pathConfig.to }, speed, easing );
			} );

			el.addEventListener( 'mouseleave', function() {
				path.animate( { 'path' : pathConfig.from }, speed, easing );
			} );
		} );
	}

	init();

})();

$(".main").onepage_scroll({});
