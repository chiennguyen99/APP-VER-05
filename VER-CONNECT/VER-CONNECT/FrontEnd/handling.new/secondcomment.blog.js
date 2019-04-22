function PostSecondcomment(commentID) {
    let idcontent = "#content-second-cmt" + commentID;
    let idimage = "#ImageFileSecondcmt" + commentID;

    var formData = new FormData();
    formData.append('commentID', commentID);
    formData.append('Contentcmt', $(idcontent).val());
    formData.append('ImageFilecmt', $(idimage)[0].files[0]);

    $.ajax({
        type: "POST",
        url: "/PostSecComment/Post",
        data: formData,
        contentType: false,
        processData: false,
        success: function (result) {
            $(idcontent).val("");
            $(idimage).val("");
            if (result != null) {
                $.connection.hub.start().done(function () {
                    $.connection.secondCommentHub.server.broadcastEvent(result.idsecondcomment, result.commentID, result.avtURL, result.userName, result.textContent, result.Image, result.datetime);
                });
            }
        }
    });
}

$(function () {
    var secondcomment = $.connection.secondCommentHub;
    secondcomment.client.broadcastEvent = function (idsecondcomment, commentID, avtURL, userName, textContent, Image, datetime) {
        let tx = `
            <div id="scmt`+ idsecondcomment + `">
                <div class="head-comment">
                    <div class="head-text-comment">
                        <img class="img-profile rounded-circle" src="`+ avtURL + `" style="width: 28px; height: 28px">
                        <b>`+ userName + `</b>
                        <p class="content-cmt">`+ textContent + `</p>
                    </div>
                    <div>
                        <img class="img-profile" src="` + Image + `" style="max-width: 100%; max-height: 150px;">
                    </div>
                </div>
                <div class="time-comment">
                    ` + datetime + `
                </div>
            </div>
            `;
        $(`#loadsecondlist` + commentID + ``).append(tx);
    };

    $.connection.hub.start().done(function () {

    });
});
