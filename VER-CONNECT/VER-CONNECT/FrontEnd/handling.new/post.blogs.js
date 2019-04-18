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
    var test = new FormData(formData); 
    var ajaxConfig = {
        type: "POST",
        url: "/Post/Postdata",
        data: new FormData(formData),
        success: function (result) {
            alert(result); 
            // add method loaddata. 

        }
    }
    if ($(formData).attr('enctype') == "multipart/form-data") {
        ajaxConfig["contentType"] = false;
        ajaxConfig["processData"] = false;
    }
    $.ajax(ajaxConfig);
    return false;
}