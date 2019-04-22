function AjaxPostCmt(postID) {
    var idcontent = "#Contentcmt" + postID;
    var idimage = "#ImageFilecmt" + postID;
    var formData = new FormData();
    formData.append('postID', postID);
    formData.append('Contentcmt', $(idcontent).val());
    formData.append('ImageFilecmt', $(idimage)[0].files[0]); 

    $.ajax({
        type: "POST",
        url: "/PostComment/Post",
        data: formData,
        contentType: false,
        processData: false,
        success: function (result) {
            $(idimage).val(""); 
            $(idcontent).val(""); 
            if (result != null) {
                $.connection.hub.start().done(function () {
                    console.log("succsess"); 
                    $.connection.commentHub.server.broadcastEvent(result.idcmt, result.postID, result.avtURL, result.userName, result.textContent, result.Image, result.datetime);
                });
            } 
        }
    });
}

$(function () {
    var app = $.connection.commentHub;
    app.client.broadcastEvent = function (idcmt, postID, avtURL, userName, textContent, Image, datetime) {
        var tx = `
            <div id="cmt`+ idcmt + `">
                <div class="first-comment">
                    <div class="head-comment">
                        <div class="head-text-comment">
                            <img class="img-profile rounded-circle" src="` + avtURL + `" style="width: 28px; height: 28px">
                            <b>`+ userName + `</b>
                            <p class="content-cmt">`+ textContent + `</p>
                        </div>
                        <div>
                            <img class="img-profile" src="` + Image + `" style="max-width: 100%; max-height: 200px;">
                        </div>
                    </div>
                    <div class="time-comment">
                        `+ datetime + `
                    </div>
                </div>
                <div class="second-comment">
                    <a href="#listcmt` + idcmt + `" onclick = "loadlistsecondcomment(` + idcmt + `)" class="py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCardExample" >
                        <h6 class="m-0 font-weight-bold text-primary">Reply</h6>
                    </a>
                    <div class="content-second-comment collapse" id="listcmt` + idcmt + `">

                            <div id="loadsecondlist`+ idcmt + `">
                            </div>                            

                            <div id="push-second-comment`+ idcmt + `">
                                <div class="input-group mb-3">
                                    <div id="push-second-cmt`+ idcmt + `" class="btn btn-primary btn-icon-split" style="width: 100%">
                                        <input type="text" class="form-control" placeholder="Do you have comments?"
                                        aria-label="Recipient's username" aria-describedby="button-addon2" id="content-second-cmt`+ idcmt + `">
                                        <span class="btn-file btn-primary icon text-white-50" id="img-comment">
                                            <i class="fas fa-file-image">
                                                <input type="file" id="ImageFileSecondcmt`+ idcmt + `">
                                            </i>
                                        </span>
                                        <div class="input-group-append">
                                            <button class="btn btn-facebook btn-block" onclick="PostSecondcomment(`+ idcmt + `)">Push</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                    </div>
                    
                </div> 
            </div>
            `;
        $(`#content-comment-post` + postID + ``).append(tx);
    };

    $.connection.hub.start().done(function () {

    });
});