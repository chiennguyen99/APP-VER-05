var Employee = []; 

$(document).ready(function () {
    for (var i = 0; i < dbEmployeeDetail.length; i++){
        var contact = dbEmployeeContact.filter(dbEmployeeContact => dbEmployeeContact.employeeID == dbEmployeeDetail[i].employeeID); 
        var salary = dbEmployeeSalary.filter(dbEmployeeSalary => dbEmployeeSalary.employeeID == dbEmployeeDetail[i].employeeID); 
        var work = dbEmployeeWorkHistory.filter(dbEmployeeWorkHistory => dbEmployeeWorkHistory.employeeID == dbEmployeeDetail[i].employeeID); 
        var qualification = dbEmployeeQualification.filter(dbEmployeeQualification => dbEmployeeQualification.employeeID == dbEmployeeDetail[i].employeeID); 
        var time = dbEmployeeTimeInfo.filter(dbEmployeeTimeInfo => dbEmployeeTimeInfo.employeeID == dbEmployeeDetail[i].employeeID);
        Employee[i] = [dbEmployeeDetail[i], contact, salary, work, qualification, time]; 
    }   
});