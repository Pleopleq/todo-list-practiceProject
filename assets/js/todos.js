//putting a mark in the task that is finished
$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});

//removing a task from the todo list by clicking the "X" span

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();   
});

$("input[type='text']").keypress(function(event){
    if (event.which === 13){
    var addTodo = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='far fa-trash-alt'></i></span>" + addTodo + "</li>")
    }
})

$(".fa-plus-circle").click(function(){
    $("input[type='text']").fadeToggle();
})