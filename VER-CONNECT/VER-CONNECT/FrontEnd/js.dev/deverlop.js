$(document).ready(function () {
    var userRoles = $("#imageaut").attr("title");
    if (userRoles == "Admin") {
        $('#dataTable_filter').prepend("<div id = \"deleteOrEdit\"></div>");
        $('#deleteOrEdit').position = "relative";
        $('#deleteOrEdit').prepend("<button id = \"butDel\" type=\"button\" class=\"btn btn-danger\"><a href=\"#deleteEmployeeModal\" data-toggle=\"modal\">Delete</a></button>");

        $('#deleteOrEdit').append("<button id = \"butAdd\" type=\"button\" class=\"btn btn-success\"><a href=\"#addEmployeeModal\" data-toggle=\"modal\">Add</a></button>");
        $('#butDel').css('margin-bottom', -18 + 'px');
        $('#butDel').css('margin-right', 5 + 'px');
        $('#butAdd').css('margin-bottom', -18 + 'px');
        $('#butAdd').css('margin-rigth', 3 + 'px');


        $('#deleteOrEdit').css('height', 50 + 'px');
        $('#butDel').css('height', 35 + 'px');
        $('#butAdd').css('height', 35 + 'px');

        $("tr").not(':first').hover(
            function () {
                $(this).css("background", "DarkSeaGreen ");
            },
            function () {
                $(this).css("background", "");
            }
        );
    }
}); 


