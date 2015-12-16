var counter = 0;
///DOC READY///
$("document").ready(init);
///FUNCTIONS///
function init() {
  enable()
};
function enable() {
  $(".generate").on("click", appendDom);
  $(".body").on("click", ".delete", remove);
  $(".body").on("click", ".change", change);
}
function appendDom() {
  counter++;
  $(".body").append("<div class='container'></div>");
  var $el = $(".body").children().last();
  $el.append("<p>" + counter + "</p>");
  $el.append("<button class='delete'>DELETE</button>");
  $el.append("<button class='change'>CHANGE</button>");
};
function remove() {
  $(this).parent().remove();
};
function change() {
  $(this).parent().toggleClass("red");
};
