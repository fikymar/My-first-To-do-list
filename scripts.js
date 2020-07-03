/*$("button").click(() => {
    $("ul").append("<li>" + document.getElementById("add").value + "</li>");
    $("li:last-child").append('<input type="checkbox" id="checker1">');
    $("li:last-child").append('<button id="remover">');

  
}
);/*



/*
$("li").click(() => {
    $("li").css("text-decoration", "line-through");
}
);

$("li").hover(() => {
    $("li").css({fontWeight:"bold"})
}
);*/

/*$("#remover").click(() => {
    $("li").fadeToggle("li:last-child");
}

);*/

/*
$("#deleter").click(() => {
    $("li").remove("li:last-child");
}

);

$("#checker").click(() => {
    $("li").css("text-decoration", "line-through");

});*/
-
/*$("button").click(() => {
    $("ul").append("<li>" + document.getElementById("add").value + "</li>");
    $("li:last-child").append('<i id="checker" class="far fa-check-square"></i>');
    $("li:last-child").append('<i id="deleter" class="fas fa-dumpster-fire"></i>');
    if (document.getElementById("add").value === "") {alert("Write something!")}
}
); */

$("button").click(() => {
    var hodnota = $("#add").val();
    $("ul").append("<li>" + hodnota + "</li>");
    $("li:last-child").append('<i id="checker" class="far fa-check-square"></i>');
    $("li:last-child").append('<i id="deleter1" class="fas fa-dumpster-fire"></i>');
    $("input").val("");
    if (hodnota === "") {alert("To nebylo nic!")}
    
  });
/*
  $("ul").on("click", "#checker", function(){
	$(this).parent().css("text-decoration", "line-through");
});*/


$("ul").on("click", "#checker", function(){
	$(this).parent().toggleClass("completed");
});

/*$('ul').on('click', 'li', (event) => {
    $(this).toggleClass('completed');
  });*/

  $("ul").on("click", "#deleter1", function() {
      $(this).parent().remove();
  });

  /*$("ul").on("click", "#deleter", function() {
    $(this).sibling().remove();
});*/
