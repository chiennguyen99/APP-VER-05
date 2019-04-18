$(document).ready(function () {
    loaddata(); 
    selectallchange(); 
    checkitemchange(); 
});

function loaddata() {
    var userID = $("#usernameaut").attr("title");
    var userRoles = $("#imageaut").attr("title");
    console.log(userID + " " + userRoles); 
    var str2 = `
            <td>
                <a data-toggle="modal" class="btn-eye"><i class="fas fa-eye"></i></a>
            </td>
        </tr>
    `; 
    var str0 = `
        <input type="checkbox" class="checkitem">
        <label></label>
    `; 
    if (userRoles == "Admin") {
        str2 = `
            <td>
                <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="fas fa-user-minus"></i></a>
                <a data-toggle="modal" class="btn-eye"><i class="fas fa-eye"></i></a>
            </td>
          </tr>
        `;
    } else {
        $("#checkboxAll").html("0");
    }
    
    for (var i = 0; i < Employee.length; i++) {

        var id = Employee[i][0].employeeID; 
        var name = Employee[i][0].firstName + " " + Employee[i][0].lastName; 
        var phone = "NULL"; 
        var qualification = "NULL"; 
        if ( Employee[i][4][0] != null ){
            qualification = Employee[i][4][0].experience; 
        }

        if (Employee[i][1][0] != null){
            phone = Employee[i][1][0].phoneNumber; 
        }
        if (userRoles != "Admin") {
            str0 = i + 1; 
        }
        var str = `
                <tr id = "` + id + `">
                    <td>
                    <span class="custom-checkbox" id="checkboxIndex">
                        ` + str0 + `
                    </span>
                    </td>
                    <td>` + id + `</td>
                    <td>` + name + `</td>
                    <td>` + qualification + `</td>
                    <td>` + phone + `</td>`;
        var str3 = str + str2; 
        $("#contenst-table").append(str3);
    }
}