var datasecondcmt = []; 

// loaddata by commentID. 
function loaddatasecondcmt(commentID) {
    $.ajax({
        type: "GET",
        dataType: "json",
        async: false,
        url:  "http://localhost:49734/api/secondcomments/" + commentID,
        success: function (data) {
            datasecondcmt = JSON.parse(data);
        }
    });
    console.log(commentID); 
}