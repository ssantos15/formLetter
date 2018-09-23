$(function() {
  $("#formOne").submit(function(event) {
    var inputName = $("#iName").val();
    $(".name").text(inputName);//need to find a way to replace the last append so it doesnt keep appending names
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
