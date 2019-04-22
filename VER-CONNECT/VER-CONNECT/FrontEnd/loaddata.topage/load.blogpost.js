$(document).ready(function () {

    loaddatablogs.forEach(data => {
        var avt = data.avturl;
        var username = data.name;
        var blogTitle = data.blogtitle;
        var createtime = data.postdate;
        var contentblog = data.contentpost;
        var imageblog = data.imgpost;
        var numlike = data.numlike;
        var postID = data.idpost; 
        var entity1 = `<div id="new-info2">
            <div class="card mb-4">
                    <div class="card-header">
                        <div>
                            <img class="img-profile rounded-circle" src="` + avt + `" style="width: 28px; height: 28px">
                            <b>` + username + `</b>
                            <b class="album">album: ` + blogTitle + `</b>
                        </div>
                        <div>
                            post date: ` + createtime + `
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="text-content-blogpost">
                            <p>` + contentblog + `</p>
                        </div>   
                        <div>
                            <img class="img-profile" src="` + imageblog + `" style="max-width: 100%; max-height: 500px;">
                        </div>
                        <hr>
                        <div class="act-like-blogposts">
                            <button type="button" class="btnt-Like" >Like</button>
                            <i class="fas fa-thumbs-up">` + numlike +  `</i>
                        </div>
                    </div>
                    <div class="card-comment">
                        <a href="#collapseCardExample`+ postID +`" onclick="loadlistcomment(`+ postID +`)" class="d-block card-header py-3 collapsed" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCardExample">
                            <h6 class="m-0 font-weight-bold text-primary">Comment</h6>
                        </a>
                        <div class="collapse" id="collapseCardExample`+ postID +`">
                            <div class="card-body" id="body-comment">
                                <div id="content-comment-post`+ postID +`">
                                </div>

                                <div id="push-comment-post`+ postID +`">
                                      <div class="input-group mb-3">
                                            <div id="push-cmt`+ postID + `" class="btn btn-primary btn-icon-split" style="width: 100%">
                                                <input type="text" class="form-control" placeholder="Do you have comments?"
                                                aria-label="Recipient's username" aria-describedby="button-addon2" id="Contentcmt`+ postID +`">
                                                <span class="btn-file btn-primary icon text-white-50" id="img-comment">
                                                <i class="fas fa-file-image">
                                                    <input type="file" id="ImageFilecmt`+ postID +`">
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

        $("#data-news").append(entity1);
    });
});