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
                            <div class="card-body">
                                <div id="content-comment-post`+ postID +`"></div>
                                <div id="push-comment-post1">
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Do you have comments?" aria-label="Recipient's username" aria-describedby="button-addon2">
                                        <div class="input-group-append">
                                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Push</button>
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