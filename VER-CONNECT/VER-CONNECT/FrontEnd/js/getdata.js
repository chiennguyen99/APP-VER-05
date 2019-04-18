var dbEmployeeDetail = []; 
var dbEmployeeContact = []; 
var dbEmployeeSalary = []; 
var dbEmployeeWorkHistory = []; 
var dbEmployeeQualification = [];
var dbEmployeeTimeInfo = []; 

var urlemployeedetails = "http://localhost:49734/api/employeedetails"; 
var urlcontactemployeeinfoes = "http://localhost:49734/api/contactemployeeinfoes"; 
var urlsalaryinfoes = "http://localhost:49734/api/salaryinfoes"; 
var urlworkhistories = "http://localhost:49734/api/workhistories"; 
var urlqualifications = "http://localhost:49734/api/qualifications"; 
var urltimeinfoes = "http://localhost:49734/api/timeinfoes"; 


$(document).ready(function () {
    $.ajax({
        type: "GET",
        dataType: "json",
        async: false, 
        url: urlemployeedetails,
        success: function (data) {
            dbEmployeeDetail = data;
        }
    });

    $.ajax({
        type: "GET",
        dataType: "json",
        async: false,
        url: urlcontactemployeeinfoes,
        success: function (data) {
            dbEmployeeContact = data;
        }
    });

    $.ajax({
        type: "GET",
        dataType: "json",
        async: false,
        url: urlsalaryinfoes,
        success: function (data) {
            dbEmployeeSalary = data;
        }
    });

    $.ajax({
        type: "GET",
        dataType: "json",
        async: false,
        url: urlworkhistories,
        success: function (data) {
            dbEmployeeWorkHistory = data;
        }
    });

    $.ajax({
        type: "GET",
        dataType: "json",
        async: false,
        url: urlqualifications,
        success: function (data) {
            dbEmployeeQualification = data;
        }
    });

    $.ajax({
        type: "GET",
        dataType: "json",
        async: false,
        url: urltimeinfoes,
        success: function (data) {
            dbEmployeeTimeInfo = data;
        }
    });

})