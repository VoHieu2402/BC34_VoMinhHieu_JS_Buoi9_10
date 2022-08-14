function Employee(empUsername,empName,empEmail,empPass,empBirthday,empSalary,empTitle,empWorkingHours) {
    // property
    this.empUsername = empUsername;
    this.empName = empName;
    this.empEmail = empEmail;
    this.empPass = empPass;
    this.empBirthday = empBirthday;
    this.empSalary = empSalary;
    this.empTitle = empTitle;
    this.empWorkingHours = empWorkingHours;
    this.totalSalary = 0;
    this.classification = "";

    // method

    // calculate the total of salary
    this.calTotalSalary = function() {
        if(this.empTitle=="Sếp") {
            this.totalSalary = this.empSalary * 3;
        } else if(this.empTitle=="Trưởng phòng") {
            this.totalSalary = this.empSalary * 2;
        } else {
            this.totalSalary = this.empSalary;
        }
    }

    // classify employees
    this.classifyEmp = function() {
        if(this.empWorkingHours>=192) {
            this.classification = "Xuất sắc";
        } else if(this.empWorkingHours>=176) {
            this.classification = "Giỏi";
        } else if(this.empWorkingHours>=160) {
            this.classification = "Khá";
        } else {
            this.classification = "Trung bình";
        }
    }
}