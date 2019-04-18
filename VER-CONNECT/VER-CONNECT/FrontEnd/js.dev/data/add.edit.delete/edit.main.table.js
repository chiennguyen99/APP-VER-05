// To do code edit data
$(document).ready(function () {

    $("#edit-detail-employee").click(function (e) {
        e.preventDefault();
        console.log(idGenaral); 
        var firstname, lastname, date;
        firstname = $("#firstname-fix-detail").val();
        lastname = $("#lastname-fix-detail").val();
        date = $("#date-fix-detail").val(); 

        var data = { "employeeID": idGenaral[0], "firstName": firstname, "lastName": lastname, "dateOfBirth": date, "contactemployeeinfoes": [], "qualifications": [], "timeinfoes": [], "workhistories": [] };
        var dataToPost = JSON.stringify(data);

        $.ajax({
            type: 'PUT',
            url: urlemployeedetails + '/' + idGenaral[0],
            data: dataToPost, 
            headers: {
                'x-auth-token': localStorage.accessToken,
                "Content-Type": "application/json"
            },
            dataType: 'json'
        }).done(function () {
            console.log('SUCCESS');
            location.reload();
        }).fail(function (msg) {
            console.log('FAIL');
        }).always(function (msg) {
            console.log('ALWAYS');
        });
    });

})

function editContactfun(i) {
    var idContact = idGenaral[1][i]; 
    $("#edit-contact-employee").click(function (e) {
        e.preventDefault();
        var phone = $("#phone-edit-detail").val();
        var city = $("#city-edit-detail").val();
        var adress = $("#adress-edit-detail").val(); 
        var postal = $("#postal-edit-detail").val(); 
        var dataget = { "idContact": idContact, "employeeID": idGenaral[0], "phoneNumber": phone, "ctCity": city, "ctAddress": adress, "ctPostalCode": postal, "employeedetail": null }
        var dataContactPost = JSON.stringify(dataget); 
        $.ajax({
            type: 'PUT',
            url: urlcontactemployeeinfoes + '/' + idContact,
            data: dataContactPost,
            headers: {
                'x-auth-token': localStorage.accessToken,
                "Content-Type": "application/json"
            },
            dataType: 'json'
        }).done(function () {
            console.log('SUCCESS');
            location.reload();
        })
    })
}

// salary edit. 

function editSalaryfun(i) {
    var idSalary = idGenaral[2][i];
    $("#edit-salary-employee").click(function (e) {
        e.preventDefault();
        var monthly = $("#monthly-edit-employee").val();
        var moneyCurren = $("#moneyCurren-edit-employee").val();
        var moneyDeduc = $("#moneyDeduc-edit-employee").val();
        var moneyInsur = $("#moneyInsur-edit-employee").val();
        var dataget = { "idSalaryInfo": idSalary, "employeeID": idGenaral[0], "monthlySalary": monthly, "moneyCurrency": moneyCurren, "moneyDeductions": moneyDeduc, "moneyInsurance": moneyInsur };
        var dataSalaryPost = JSON.stringify(dataget); 
        $.ajax({
            type: 'PUT',
            url: urlsalaryinfoes + '/' + idSalary,
            data: dataSalaryPost,
            headers: {
                'x-auth-token': localStorage.accessToken,
                "Content-Type": "application/json"
            },
            dataType: 'json'
        }).done(function () {
            console.log('SUCCESS');
            location.reload();
        })
    })
}

// work history edit

function editWorkHistoryfun(i) {

    var workHistoryID = idGenaral[3][i]; 
    $("#edit-workHistory-employee").click(function (e) {
        e.preventDefault();
        var companyName = $("#companyName-edit-employee").val();
        var address = $("#address-edit-employee").val();
        var phone = $("#phone-edit-employee").val();
        var office = $("#office-edit-employee").val(); 
        var dataget = { "idWorkHistory": workHistoryID, "employeeID": idGenaral[0], "companyName": companyName, "address": address, "phoneNumber": phone, "officenumber": office, "employeedetail": null };
        var dataPostWork = JSON.stringify(dataget); 
        $.ajax({
            type: 'PUT',
            url: urlworkhistories + '/' + workHistoryID,
            data: dataPostWork,
            headers: {
                'x-auth-token': localStorage.accessToken,
                "Content-Type": "application/json"
            },
            dataType: 'json'
        }).done(function () {
            console.log('SUCCESS');
            location.reload();
        })
    })
}

// qualification edit
function editQualificationfun(i) {
    var QualificationID = idGenaral[4][i];
    $("#qualification-edit-employee").click(function (e) {
        e.preventDefault();
        var exprience = $("#exprience-edit-employee").val(); 
        var dataget = { "idQualification": QualificationID, "employeeID": idGenaral[0], "experience": exprience, "employeedetail": null };
        var dataPostQual = JSON.stringify(dataget); 
        $.ajax({
            type: 'PUT',
            url: urlqualifications + '/' + QualificationID,
            data: dataPostQual,
            headers: {
                'x-auth-token': localStorage.accessToken,
                "Content-Type": "application/json"
            },
            dataType: 'json'
        }).done(function () {
            console.log('SUCCESS');
            location.reload();
        })
    })
}

// time info edit.

function editTimeinfofun(i) {
    var idTimeInfo = idGenaral[5][i];
    $("#timeinfo-edit-employee").click(function (e) {
        e.preventDefault();
        var workhours = $("#workhours-edit-employee").val();
        var offDay = $("#offDay-edit-employee").val();
        var overTime = $("#overTime-edit-employee").val();
        var extraDay = $("#extraDay-edit-employee").val(); 

        var dataget = { "idTime": idTimeInfo, "employeeID": idGenaral[0], "workHours": workhours, "offDay": offDay, "overTime": overTime, "extraday": extraDay, "employeedetail": null };
        var dataPostTime = JSON.stringify(dataget); 
        $.ajax({
            type: 'PUT',
            url: urltimeinfoes + '/' + idTimeInfo,
            data: dataPostTime,
            headers: {
                'x-auth-token': localStorage.accessToken,
                "Content-Type": "application/json"
            },
            dataType: 'json'
        }).done(function () {
            console.log('SUCCESS');
            location.reload();
        })
    })
}