$(document).ready(function(){

  $(".button-collapse").sideNav();

  var options = [
      {selector: '.card-panel', offset: 50, callback: function() {
        Materialize.toast("Opened Calls", 1500 );
      } },
      {selector: '.news', offset: 50, callback: function() {
        Materialize.showStaggeredList(".news");
      } },
      {selector: '.card', offset: 50, callback: function() {

      } }

    ];
    Materialize.scrollFire(options);

    $('.slider').slider({
      height: 270,
      indicators: false,
      interval: 12000
});






    // external js: isotope.pkgd.js
});
