/**
 * Created by alexander on 2015-01-27.
 */
$(document).ready( function (){
    $( "#toggle-filter" ).click(function() {
        $( "#filter-content" ).toggle( "slow", function() {
    // Animation complete.
        });
    });

        $( "#toggle-addSession" ).click(function() {
        $( "#add-session-content" ).toggle( "slow", function() {
    // Animation complete.
        });
    });

    $( "#toggle-chart" ).click(function() {
        $( ".chart" ).toggle( "slow", function() {
    // Animation complete.
        });
    });
    $('.selectpicker').selectpicker();

    $('.clockpicker').clockpicker();

});


