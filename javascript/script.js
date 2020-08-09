//Check off specific todos by clicking on them
$("ul").on("click", "li", function (){
    $(this).toggleClass('completed');
});

//Fading out specific todos by clicking on the span
$("ul").on("click", "span", function (event) { 
    $(this).parent().fadeOut(500, function(){
       $(this).remove(); 
    });
    event.stopPropagation();    
});

//Add a new todo
$('input[type="text"]').keypress(function(e){
    if(e.which === 13){
        let todoText = $(this).val();
        $(this).val("");
        //Create new li and add it to the ul
        $("ul").append("<li><span> <i class='icon-trash'></i> </span>" + todoText + "</li>");
    }
});

//Toggle the input
$('.icon-plus').click(function(){
    $('input[type="text"]').slideToggle(700);
})