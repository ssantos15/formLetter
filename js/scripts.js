$(function() {
  $("#formOne").submit(function(event) {
    var inputName = $("#iName").val();
    $(".name").text(inputName);
    $("#postcard").show();
    $("#postcard").click(function() {
      $("#postcard").hide();
      $("#letter").show()
    });
    $("#letter").click(function() {
      $("#letter").hide();
      $("#postcard").show();
    });
    event.preventDefault();
  });

});
