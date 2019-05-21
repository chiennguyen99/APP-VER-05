// load data when click to push your blogs.
var listTitle = [];
var checkClick = true;


function loadtitle(id) {
    if (checkClick) {
        $.ajax({
            type: "GET",
            dataType: "json",
            async: false,
            url: "http://localhost:49734/api/userpost/" + id,
            success: function (data) {
                listTitle = JSON.parse(data);
                console.log(listTitle);
            } 
        });
    }
}

// load Title post title.
$(document).ready(function () {
    $("#dropdownMenuButton").click(function (e) {
        if(checkClick){
            e.preventDefault();
            document.getElementById("loadTitleBlog").innerHTML = "";
            for(var i = 0; i < listTitle.length; i++){
                var tx = `<a class="dropdown-item" onclick="loadNameTitle(`+ i +`)">` + listTitle[i].title + `</a>`;
                $("#loadTitleBlog").append(tx);
            }
            checkClick = false; 
        }
    });
});

function loadNameTitle(i){
    document.getElementById("title-push").value = listTitle[i].title; 
}


document.getElementById('image-content').onchange = function () {
    document.getElementById("namefileImage").innerHTML = this.files.item(0).name;
};


function AjaxPost(formData) {
    var ajaxConfig = {
        type: "POST",
        url: "/Post/Postdata",
        data: new FormData(formData),
        success: function (result) {
            $("#form-push-data")[0].reset();
            document.getElementById("namefileImage").innerHTML = "";
            if (result != null) {
                $.connection.hub.start().done(function () {
                    $.connection.eventHub.server.broadcastEvent(result.avtUrl, result.userName, result.album, result.datetime, result.content, result.image, result.postID);
                });
            }
            
        }
    }
    if ($(formData).attr('enctype') == "multipart/form-data") {
        ajaxConfig["contentType"] = false;
        ajaxConfig["processData"] = false;
    }
    $.ajax(ajaxConfig);
    return false;
}

$(function () {
    var app = $.connection.eventHub;
    app.client.broadcastEvent = function (avtUrl, userName, album, datetime, content, image, postID) {
        // Html encode display name and message. 
        var str = `<div id="new-info2">
            <div class="card mb-4">
                    <div class="card-header">
                        <div>
                            <img class="img-profile rounded-circle" src="` + avtUrl + `" style="width: 28px; height: 28px">
                            <b>` + userName + `</b>
                            <b class="album">album: ` + album + `</b>
                        </div>
                        <div>
                            post date: ` + datetime + `
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="text-content-blogpost">
                            <p>` + content + `</p>
                        </div>   
                        <div>
                            <img class="img-profile" src="` + image + `" style="max-width: 100%; max-height: 500px;">
                        </div>
                        <hr>
                        <div class="act-like-blogposts">
                            <button type="button" class="btnt-Like" >Like</button>
                            <i class="fas fa-thumbs-up">` + 0 + `</i>
                        </div>
                    </div>
                    <div class="card-comment">
                        <a href="#collapseCardExample`+ postID + `" onclick="loadlistcomment(` + postID + `)" class="d-block card-header py-3 collapsed" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCardExample">
                            <h6 class="m-0 font-weight-bold text-primary">Comment</h6>
                        </a>
                        <div class="collapse" id="collapseCardExample`+ postID + `">
                            <div class="card-body" id="body-comment">
                                <div id="content-comment-post`+ postID + `">
                                </div>

                                <div id="push-comment-post`+ postID + `">
                                      <div class="input-group mb-3">
                                            <div id="push-cmt`+ postID + `" class="btn btn-primary btn-icon-split" style="width: 100%">
                                                <input type="text" class="form-control" placeholder="Do you have comments?"
                                                aria-label="Recipient's username" aria-describedby="button-addon2" id="Contentcmt`+ postID + `">
                                                <span class="btn-file btn-primary icon text-white-50" id="img-comment">
                                                <i class="fas fa-file-image">
                                                    <input type="file" id="ImageFilecmt`+ postID + `">
                                                </i>
                                                </span>
                                                <div class="input-group-append">
                                                    <button class="btn btn-facebook btn-block" onclick="AjaxPostCmt(` + postID +`)">Push</button>
                                                </div>
                                            </div>
                                      </div>
                                </div>

                            </div>      
                        </div>
                    </div>
            </div>
        </div>`;
        $("#data-news").prepend(str);
    };

    $.connection.hub.start().done(function () {

    });

});