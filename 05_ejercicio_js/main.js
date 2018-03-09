
$("document").ready(function(){

    $("h1").show();
    $("img").hide();
});

$(document).on("click", function(){

    $("h1").hide();
    $("img").show();
});

$("img").hover(function(){

    $(this).css("with", "300");

}, function(){

    $(this).css("with", "250");



});