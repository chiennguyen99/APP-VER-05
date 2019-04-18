$(document).ready(function () {
    // edit detail employee. 
    $("#addsuccess-maintb").click(function (e) { 
        e.preventDefault();
        var id = $("#add-id-maintb").val(); 
        var fname = $("#add-fname-maintb").val(); 
        var lname = $("#add-lname-maintb").val(); 
        var date = $("#add-birthday-maintb").val(); 
        // add check id.
        // add to array.
        var detail = {"employeeID": id,"firstName": fname,"lastName": lname,"dateOfBirth": date,"contactemployeeinfoes":[],"qualifications":[],"timeinfoes":[],"workhistories":[]}; 

        var datapost = JSON.stringify(detail); 

        $.ajax({
            type: "POST",
            url: urlemployeedetails,
            contentType: "application/json; charset=utf-8",
            data: datapost,
            dataType: "json",
            success: function () {
                location.reload();
            }
        });
    });
 
});
