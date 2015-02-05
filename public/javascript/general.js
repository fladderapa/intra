/**
 * Created by alexander on 2015-01-27.
 */
$(document).ready( function (){

    $('.selectpicker').selectpicker();

    $('.clockpicker').clockpicker();

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

});




