// .................. jQuery Using  .....................

// normal/Default dom manipulate use Jquery

// $("h1").text("Hello ");


// Create new variable and dom manipulate use Jquery
/*
var RS = jQuery.noConflict();
RS("h1").text("Helloooo ");*/


/* all one get print in console
$("h1").text("Hello Js");
console.log($("*").text());*/

/* CSS SELECTORS USING
/!*we can select any dom element from type*!/
$("h1").text("Hello DOM");

/!*id selector*!/
$("#display").css('color', 'red');

/!*class selector*!/
$(".clash3").css('background', 'red');

/!*attribute selector*!/
$("[id]").remove();

/!*pseudo - class selector*!/
$("li:first-child").css('color', 'red');
$("li:last-child").css('color', 'green');
$("li:nth-child(2)").css('color', 'orange');

/!*universal selector*!/
console.log($("*").text());
*/


/*  What about CSS Combinators..?*/

/* Child combinator
 Decendent Combinator
 Adjacent Combinator
 Generel Siblings Combinator*/

/*Child Combinator*/
// $("body>ul>li").css('color','red');

// Decendant Combinator
// $("body li").css("color", "orange");

// Adjacent Combinator
// $("h3+p").css("background", 'green');

//General Siblings Combinator
// $("h3~p").css("background", 'green');

//selector grouping
/*$("h1,h2,h3").remove();*/


$("#h2id").css("color","red");
$(".clash3").css("color","red");
// $("*").css("color","yellow");

$("ul>li:nth-child(2)").css("color","red");
$("body>p").css("color","blue");
$("h1,h2").css("color","blue");

$("#btn1").click(function (){
    alert("Selected");
    $("h1").css("color","green")
})

$("#btn2").click(function (){
    alert("Selected btn2");
    // $("#ipf").val()
    $("h2").text( $("#ipf").val())
})
//replace ul

$("#btnU").click(function (){
    alert("Click Up")
    $("ul>li:nth-child(1)").text( $("#ipf").val())
});

$("#btnD").click(function (){
    alert("click down")
    $("ul>li:nth-child(3)").text( $("#ipf").val())
});


//add new ul

$("#btnApp").click(function (){
    alert("Appended")
    $("ul").append("<li>"+$('#ipf').val()+"</li>")
})

$("#btnPre").click(function (){
    alert("Prepend")
    $("ul").prepend("<li>"+$('#ipf').val()+"</li>")
});


//Image Add

$("#btnImg").click(function (){
    alert("Img Set")
    $("#img").attr("src",$("#ipf").val());

});

