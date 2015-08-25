"use strict";

$(document).ready(function(){

    $(".banner").owlCarousel({
        navigation : true,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        // transitionStyle : "fade",
        navigationText : ["<img src='/static/img/arrow.png' alt='prev' />", "<img src='/static/img/arrow.png' class='next' alt='next' />"],
    });

});