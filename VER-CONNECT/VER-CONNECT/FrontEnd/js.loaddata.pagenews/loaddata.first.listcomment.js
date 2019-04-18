var datacomments = []; 

// loaddata by PostID. 
function loaddatacomment(postID) {  
    $.ajax({
        type: "GET",
        dataType: "json",
        async: false,
        url: "http://localhost:49734/api/comments/" + postID,
        success: function (data) {
            datacomments = JSON.parse(data);
            console.log(datacomments);
        }
    });
}