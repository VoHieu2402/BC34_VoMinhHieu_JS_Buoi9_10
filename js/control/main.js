// create a list of employee from the class LstOfEmployees
var lstOfEmployees = new LstOfEmployees();

// create an object of validation from the class Validation
var validation = new Validation();

// function getting elements by id
function getEle(id) {
    return document.getElementById(id);
}

getLocalStorage();

// get emp info
function getEmpInfo() {
    var empUsername = getEle("tknv").value;
    var empName = getEle("name").value;
    var empEmail = getEle("email").value;
    var empPass = getEle("password").value;
    var empBirthday = getEle("datepicker").value;
    var empSalary = getEle("luongCB").value * 1;
    var empTitle = getEle("chucvu").value;
    var empWorkingHours = getEle("gioLam").value * 1;

    // warning flag for validation
    var isValid = true;

    // check Username
    isValid &= validation.nullCheck(empUsername,"tbTKNV","(*) Vui lòng nhập tài khoản") &&
    validation.lengthCheck(empUsername,"tbTKNV","(*) Vui lòng nhập tài khoản từ 4-6 ký tự",6,4) &&
    validation.whitespaceCheck(empUsername,"tbTKNV","(*) Vui lòng nhập chuỗi ký tự không có khoảng trắng");

    // check Name
    isValid &= validation.nullCheck(empName,"tbTen","(*) Vui lòng nhập tên") &&
    validation.stringCheck(empName,"tbTen","(*) Vui lòng nhập dữ liệu chuỗi");

    // check Email
    isValid &= validation.nullCheck(empEmail,"tbEmail","(*) Vui lòng nhập email") &&
    validation.emailCheck(empEmail,"tbEmail","(*) Vui lòng nhập dữ liệu email");

    // check password
    isValid &= validation.nullCheck(empPass,"tbMatKhau","(*) Vui lòng nhập password") &&
    validation.passwordCheck(empPass,"tbMatKhau","(*) Mật khẩu phải chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt");

    // check workingdate
    isValid &= validation.nullCheck(empBirthday,"tbNgay","(*) Vui lòng chọn ngày làm");

    // check salary
    isValid &= validation.nullCheck(empSalary,"tbLuongCB","(*) Vui lòng nhập lương cơ bản") &&
    validation.salaryCheck(empSalary,"tbLuongCB","(*) Lương cơ bản phải từ 1.000.000 đến 20.000.000");

    // check title
    isValid &= validation.titleCheck(empTitle,"tbChucVu","(*) Vui lòng chọn chức vụ");

    // check working hours
    isValid &= validation.nullCheck(empWorkingHours,"tbGiolam","(*) Vui lòng nhập số giờ làm") &&
    validation.workingHoursCheck(empWorkingHours,"tbGiolam","(*) Số giờ làm phải từ 80 giờ đến 200 giờ");
    

    if(isValid==true) {
        // create an employee from the class Employee
        var emp = new Employee(
            empUsername,
            empName,
            empEmail,
            empPass,
            empBirthday,
            empSalary,
            empTitle,
            empWorkingHours
        );
        // calculate the total of salary
        emp.calTotalSalary();
        // classify employees
        emp.classifyEmp();

        return emp;
    } else {
        return null;
    }

}


getEle("btnThemNV").addEventListener("click", function() {
    if(getEmpInfo()) {
        var emp = getEmpInfo();

        // push emp into list of emps
        lstOfEmployees.addEmp(emp);
    
        // set the local storage
        setLocalStorage();
    
        renderTable(lstOfEmployees.arr);
    }
})

// create a row of info on the table
function renderTable(lstEmp) {
    content = "";
    lstEmp.forEach(function(emp){
        content += `
            <tr>
                <td>${emp.empUsername}</td>
                <td>${emp.empName}</td>
                <td>${emp.empEmail}</td>
                <td>${emp.empBirthday}</td>
                <td>${emp.empTitle}</td>
                <td>${emp.totalSalary}</td>
                <td>${emp.classification}</td>
                <td>
                    <button class="btn btn-info" onclick="changeInfo('${emp.empUsername}')" data-toggle="modal"
                    data-target="#myModal">Sửa</button>
                    <button class="btn btn-danger" onclick="deleteEmp('${emp.empUsername}')">Xoá</button>
                </td>
            </tr>
        `
    });
    getEle("tableDanhSach").innerHTML = content;
}

// delete a row of info
function deleteEmp(empUsername) {
    lstOfEmployees.removeEmp(empUsername);
    renderTable(lstOfEmployees.arr);
}

// allow user to change their info
function changeInfo(empUsername) {
    var emp = lstOfEmployees.getEmp(empUsername);
    // DOM to get value
    getEle("tknv").value = emp.empUsername;
    getEle("tknv").disabled = true;
    getEle("name").value = emp.empName;
    getEle("email").value = emp.empEmail;
    getEle("password").value = emp.empPass;
    getEle("datepicker").value = emp.empBirthday;
    getEle("luongCB").value = emp.empSalary;
    getEle("chucvu").value = emp.empTitle;
    getEle("gioLam").value = empWorkingHours;
}

// update and save data
getEle("btnCapNhat").addEventListener("click",function() {
    // get update of emp info
    var emp = getEmpInfo();
    // update and save update
    lstOfEmployees.updateEmp(emp);
    // render table
    renderTable(lstOfEmployees.arr);
    // save to local storage
    setLocalStorage();
})

// search by classification
getEle("searchName").addEventListener("keyup",function() {
    var keyword = getEle("searchName").value;
    lstMatches = lstOfEmployees.searchByClass(keyword);
    renderTable(lstMatches);
})

// set local storage
function setLocalStorage() {
    // convert JSON into string
    var dataString = JSON.stringify(lstOfEmployees.arr);
    // save data to the local storage
    localStorage.setItem("List of Employees",dataString);
}

// get data from the local storage
function getLocalStorage() {
    if(localStorage.getItem("List of Employees")) {
        var dataString = localStorage.getItem("List of Employees");
        var dataJSON = JSON.parse(dataString);
        lstOfEmployees.arr = dataJSON;
        renderTable(lstOfEmployees.arr);
    }
}

