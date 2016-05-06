$(document).ready(function(){

  $(".button-collapse").sideNav();

  var options = [
      {selector: '.card-panel', offset: 50, callback: function() {
        Materialize.toast("Open Calls", 1500 );
      } },
      {selector: '.news', offset: 50, callback: function() {
        Materialize.showStaggeredList(".news");
      } },
      {selector: '.card', offset: 50, callback: function() {

      } }

    ];
    Materialize.scrollFire(options);

});
