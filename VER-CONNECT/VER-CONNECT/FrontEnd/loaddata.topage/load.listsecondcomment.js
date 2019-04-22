var arrcheckloadsec = []; 

function loadlistsecondcomment(commentID) {
    var check = arrcheckloadsec.findIndex(e => e == commentID); 
    if (commentID != null && check < 0){
        loaddatasecondcmt(commentID)
        datasecondcmt.forEach(scm => {
            var id = scm.idcmt; 
            var avturl = scm.avtURL; 
            var name = scm.name; 
            var contenttext = scm.text; 
            var contentimg = scm.img; 
            var time = scm.time; 
            var tx = `
            <div id="scmt`+ id +`">
                <div class="head-comment">
                    <div class="head-text-comment">
                        <img class="img-profile rounded-circle" src="`+ avturl +`" style="width: 28px; height: 28px">
                        <b>`+ name +`</b>
                        <p class="content-cmt">`+ contenttext +`</p>
                    </div>
                    <div>
                        <img class="img-profile" src="` + contentimg + `" style="max-width: 100%; max-height: 150px;">
                    </div>
                </div>
                <div class="time-comment">
                    ` + time + `
                </div>
            </div>
            `;
            $(`#loadsecondlist` + commentID + ``).append(tx);
        });
        arrcheckloadsec.push(commentID); 
    }
}