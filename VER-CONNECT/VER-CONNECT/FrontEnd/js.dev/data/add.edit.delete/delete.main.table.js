$(document).ready(function () {
    var names = [];
    $(".delete").click(function (e) {
        e.preventDefault();
        var id = $(this).parent().parent().attr('id');
        // To do code delete data. 
        names.push(id); 

        $("#delete-success").click(function (e) {
            e.preventDefault();
            onClickDelete(names);
        });
    });


    $("#butDel").click(function () {
        $("#delete-success").click(function (e) {
            e.preventDefault();
            names = [];
            onClickDelete(names);
        });
    })

})



function onClickDelete(names) {
    $('#contenst-table input:checked').each(function () {
        var id = $(this).parent().parent().parent().attr('id');
        names.push(id);
    });
    console.log(names);
   
    for (var x = 0; x < names.length; x++) {
        $.ajax({
            url: urlemployeedetails + "/" + (names[x]),
            type: 'DELETE',
            async: false
        });
    }
    location.reload();
}

// delete table element 

function deleteContactfun(i) {
    $.ajax({
        url: urlcontactemployeeinfoes + "/" + idGenaral[1][i],
        type: 'DELETE',
        async: false
    });
    location.reload();
}
