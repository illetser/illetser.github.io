$(document).ready(function() {
  $(".btn").on("click", addItem);
  $("ol").on("click", ".link-delete", deleteItem);
});

function addItem() {
  var text = window.prompt("Where would you like to go?!");
  var delete_link = '<a href="#" class="link-delete">(Been there!)</a>'
  $("ol").append("<li>" + text + " " + delete_link + "</li>");
  var numItems = $("li").length-4;
  $(".total").html(numItems + " countries");

  if (numItems == 1) {
    $(".total").html(numItems + " country");
  }
  else {
    $(".total").html(numItems + " countries")
  }
}

function deleteItem(event) {
  // console.info(event);
  // $(event.target).remove();
  // $(event.target).parent().fadeOut();
  $(event.target).parent().remove();
  var numItems = $("li").length-4;
  $(".total").html(numItems + " countries");

  if (numItems == 1) {
    $(".total").html(numItems + " country");
  }
  else {
    $(".total").html(numItems + " countries")
  }
}
