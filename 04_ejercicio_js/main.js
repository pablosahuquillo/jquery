
$("document").ready(function(){

    $("#anuncio").text("Click para cambiar de color")
    .width(300)
    .height(300)
    .hide()
    .fadeIn(3000)
});


$("document").ready(function(){

    let colores = ["blue", "yellow", "red", "grey", "green","orange","purple","pink","brown"];
    let color = colores[Math.floor(Math.random()* colores.length)];
    $('div').css('background-color',color);

});
