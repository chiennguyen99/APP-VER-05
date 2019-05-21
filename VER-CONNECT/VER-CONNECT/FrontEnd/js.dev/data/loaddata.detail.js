var idGenaral; 
var listIDcontact; 
var listIDsalary; 
var listIDtime; 
var listIDquanlification; 
var listIDwork; 

$(document).ready(function () {
    $(".btn-eye").click(function (e) {
        e.preventDefault();

        idGenaral = [];
        listIDcontact = [];
        listIDsalary = [];
        listIDtime = [];
        listIDquanlification = [];
        listIDwork = []; 

        // get userID and Roles
        let userID = $("#usernameaut").attr("title");
        let userRoles = $("#imageaut").attr("title");

        var id = $(this).parent().parent().attr('id');
        $(".pagination li").removeClass('active');
        $("#page .list-group").hide();
        $("#page .list-group:eq(" + 1 + ")").show();
        $("#btn-0").css("background-color", "#858796");
        $("#btn-1").css("background-color", "red");
        $("#btn-2").css("background-color", "#858796");
        // To do code get data.     
        // add to employee detail
        var emd = dbEmployeeDetail.find(dbEmployeeDetail => dbEmployeeDetail.employeeID == id); 

        var detail = `
            <div class="alert alert-success" role="alert">
                ID employee:` + emd.employeeID + `
            </div>

            <div class="alert alert-success" role="alert">
                First name: ` + emd.firstName + `
            </div>

            <div class="alert alert-success" role="alert">
                Last name: ` + emd.lastName + `
            </div>

            <div class="alert alert-success" role="alert">
                Date of birth: ` + emd.dateOfBirth + `
            </div>
        `;

        $("#detail-gr2").html(detail);

        if (userID == emd.employeeID || userRoles == "Admin") {
            $("#detail-gr2").append(
                `
                    <a href="#editEmployeeDetailModal" class="edit" data-toggle="modal">
                        <button type="button" class="btn btn-outline-warning">Edit</button>
                    </a>
                `
            ); 
        }

        // add to contact employee
        var emc = dbEmployeeContact.filter(dbEmployeeContact => dbEmployeeContact.employeeID == id); 
        $("#table-contact").html(""); 
        for (var i = 0; i < emc.length; i++){
            listIDcontact.push(emc[i].idContact); 
            let button = `unavailable`; 

            if (userID == emd.employeeID || userRoles == "Admin") {
                button = `
                    <a href="#editContactEmployeeModal" class="edit" onclick="editContactfun(`+ i +`)" data-toggle="modal"><i class="fas fa-user-edit"></i></a>
                `; 
            }

            var row = `
                <tr>
                    <th scope="row">`+ (i + 1) +`</th>
                    <td> `+ emc[i].phoneNumber +` </td>
                    <td> `+ emc[i].ctCity +` </td>
                    <td> `+ emc[i].ctAddress +` </td>
                    <td> `+ emc[i].ctPostalCode + ` </td>
                    <td> `+ button +` </td>
                </tr>
            `; 
            $("#table-contact").append(row); 
        }
        // add to salary info
        var ems = dbEmployeeSalary.filter(dbEmployeeSalary => dbEmployeeSalary.employeeID == id);
        $("#table-salary").html(""); 
        for (var i = 0; i < ems.length; i++){
            listIDsalary.push(ems[i].idSalaryInfo); 

            let button = `unavailable`;

            if (userID == emd.employeeID || userRoles == "Admin") {
                button = `
                    <a href="#editSalaryInfoModal" class="edit" onclick="editSalaryfun(`+ i +`)" data-toggle="modal"><i
                    class="fas fa-user-edit"></i></a>
                `;
            }

            var row = `
            <tr>
                <th scope="row"> ` + (i + 1) + `</th>
                <td>` + ems[i].monthlySalary + `</td>
                <td>` + ems[i].monneyCurrency +  `</td>
                <td>` + ems[i].monneyDeductions + `</td>
                <td>` + ems[i].monneyInsurance + `</td>
                <td>` + button + `</td>
            </tr>
            `; 
            $("#table-salary").append(row); 
        }

        // add work history
        var emh = dbEmployeeWorkHistory.filter(dbEmployeeWorkHistory => dbEmployeeWorkHistory.employeeID == id);
        $("#table-work").html(""); 
        for (var i = 0; i < emh.length; i++){
            listIDwork.push(emh[i].idWorkHistory); 

            let button = `unavailable`;

            if (userID == emd.employeeID || userRoles == "Admin") {
                button = `
                    <a href="#editWorkHistoryModal" class="edit" onclick="editWorkHistoryfun(`+ i +`)" data-toggle="modal"><i
                    class="fas fa-user-edit"></i></a>
                `;
            }

            var row = `
            <tr>
                <th scope="row"> ` + (i + 1) + `</th>
                <td>` + emh[i].companyName + `</td>
                <td>` + emh[i].address +  `</td>
                <td>` + emh[i].phoneNumber + `</td>
                <td>` + emh[i].officenumber + `</td>
                <td>` + button +  `</td>
            </tr>
            `; 
            $("#table-work").append(row); 
        }
        // add qualification
        var emq = dbEmployeeQualification.filter(dbEmployeeQualification => dbEmployeeQualification.employeeID == id);
        $("#table-qualification").html(""); 
        for (var i = 0; i < emq.length; i++){
            listIDquanlification.push(emq[i].idQualification); 

            let button = `unavailable`;

            if (userID == emd.employeeID || userRoles == "Admin") {
                button = `
                    <a href="#editQualificationModal" class="edit" onclick="editQualificationfun(`+ i +`)" data-toggle="modal"><i
                    class="fas fa-user-edit"></i></a>
                `;
            }

            var row = `
            <tr>
                <th scope="row"> ` + (i + 1) + `</th>
                <td>` + emq[i].experience + `</td>
                <td>` + button + `</td>
            </tr>
            `; 
            $("#table-qualification").append(row); 
        }
        // add time infomation
        var emt = dbEmployeeTimeInfo.filter(dbEmployeeTimeInfo => dbEmployeeTimeInfo.employeeID == id);
        $("#table-time").html(""); 
        for (var i = 0; i < emt.length; i++){
            listIDtime.push(emt[i].idTime); 

            let button = `unavailable`;

            if (userID == emd.employeeID || userRoles == "Admin") {
                button = `
                    <a href="#editTimeinfoModal" class="edit" onclick="editTimeinfofun(`+ i +`)" data-toggle="modal"><i
                    class="fas fa-user-edit"></i></a>
                `;
            }

            var row = `
                <tr>
                    <th scope="row"> ` + (i + 1) + `</th>
                    <td>` + emt[i].workHours + `</td>
                    <td>` + emt[i].offDay +  `</td>
                    <td>` + emt[i].overTime + `</td>
                    <td>` + emt[i].extraday + `</td>
                    <td>` + button + `</td>
                </tr>
            `; 
            $("#table-time").append(row); 
        }
        idGenaral = [id, listIDcontact, listIDsalary, listIDwork, listIDquanlification, listIDtime];
    });
});
