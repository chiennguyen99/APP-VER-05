$("#btn-0").click(function (e) {
    e.preventDefault();
    $("#btn-0").css("background-color", "red");
    $("#btn-1").css("background-color", "#858796");
    $("#btn-2").css("background-color", "#858796");
});
$("#btn-1").click(function (e) {
    e.preventDefault();
    $("#btn-0").css("background-color", "#858796");
    $("#btn-1").css("background-color", "red");
    $("#btn-2").css("background-color", "#858796");
});
$("#btn-2").click(function (e) {
    e.preventDefault();
    $("#btn-0").css("background-color", "#858796");
    $("#btn-1").css("background-color", "#858796");
    $("#btn-2").css("background-color", "red");
});