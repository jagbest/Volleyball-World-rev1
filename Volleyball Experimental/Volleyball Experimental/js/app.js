//Prevent spoilerphobes from seeing spoilers
//Solution: Hide spoilers and reveal them through user interaction

//1, Hide spoiler
$(".spoiler span").hide();
//2, Add a button
//$(".question").hide().show("slow");
$(".spoiler").append("<button>Want to know where Big Fun is? (Click here to find out)</button>");
//3, When button pressed
$("button").click(function(){
  //3.1, Show spoiler next to the button clicked
  $(this).prev().show("slow");
  //3.2, Get rid of button
  $(this).remove();
});
