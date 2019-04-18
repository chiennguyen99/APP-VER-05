var arrcheckload = []; 

function loadlistcomment(postID) {
    var check = arrcheckload.findIndex(e => e == postID); 
    if (postID != null && check < 0){
        loaddatacomment(postID);
        datacomments.forEach(cm => {
            var idcmt = cm.idcmt; 
            var avturl = cm.avtURL; 
            var name = cm.name; 
            var contenttext = cm.text; 
            var contentImg = cm.img; 
            var timecmt = cm.time; 
            var tx = `
            <div id="cmt`+ idcmt +`">
                <div class="first-comment">
                    <div class="head-comment">
                        <div class="head-text-comment">
                            <img class="img-profile rounded-circle" src="` + avturl + `" style="width: 28px; height: 28px">
                            <b>`+ name +`</b>
                            <p class="content-cmt">`+ contenttext +`</p>
                        </div>
                        <div>
                            <img class="img-profile" src="` + contentImg + `" style="max-width: 100%; max-height: 200px;">
                        </div>
                    </div>
                    <div class="time-comment">
                        `+ timecmt +`
                    </div>
                </div>
                <div class="second-comment">
                    <a href="#listcmt` + idcmt + `" onclick = "loadlistsecondcomment(`+ idcmt +`)" class="py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCardExample" >
                        <h6 class="m-0 font-weight-bold text-primary">Reply</h6>
                    </a>
                    <div class="content-second-comment collapse" id="listcmt` + idcmt + `"></div>
                    <div class="push-second-comment">
						<div class="input-group mb-3">
							<input type="text" class="form-control" placeholder="Do you have comments?" aria-label="Recipient's username" aria-describedby="button-addon2">
							<div class="input-group-append">
								<button class="btn btn-outline-secondary" type="button"
									id="button-addon2">Push</button>
							</div>
						</div>
					</div>
                </div> 
            </div>
            `;

            $(`#content-comment-post` + postID + ``).append(tx);
        });
        arrcheckload.push(postID); 
    }
}