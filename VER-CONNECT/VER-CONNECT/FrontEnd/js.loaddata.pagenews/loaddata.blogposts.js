var loaddatablogs = []; 
$(document).ready(function () {
    asyncCall(); 
});

function asyncCall() {
    $.ajax({
        type: "GET",
        dataType: "json",
        async: false,
        url: "http://localhost:49734/api/blogposts",
        success: function (data) {
            loaddatablogs = JSON.parse(data);
            console.log(loaddatablogs);
        }
    });
}
  