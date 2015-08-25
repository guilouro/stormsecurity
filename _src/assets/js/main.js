"use strict";

function populate_select () {
    $("select[class='summary__select'] option").each(function(){
        var active = (this.selected) ? 'class="active"' : '';
        $(".summary__list").append(
            "<p><a href='#' "+active+">"+this.text+"</a></p>"
        );
    });
}

$(document).ready(function(){

    $(".banner").owlCarousel({
        navigation : true,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        // transitionStyle : "fade",
        navigationText : ["<img src='/static/img/arrow.png' alt='prev' />", "<img src='/static/img/arrow.png' class='next' alt='next' />"],
    });

    populate_select();

    $('.summary__select').change(function(){
        $(".summary__list").html("");
        populate_select();
    });

    $("#menu-bar").click(function(){
        $('.menu').toggleClass('open');
        $('#open').toggle('hide');
        $('#close').toggle('show');
    });

});