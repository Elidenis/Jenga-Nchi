$(document).ready(function() {
  $("span#employer").click(function() {
    $("#employer").toggle();
    $("#cont").toggle();
  });
  $("span#employee").click(function() {
    $("#employee").toggle();
    $("#contacts-table").toggle();
  });
});
