function LstOfEmployees() {
    this.arr = [];

    // add employees
    this.addEmp = function(emp) {
        this.arr.push(emp);
    };

    // find the index of employees
    this.findIndex = function(empUsername) {
        var index = -1;
        this.arr.forEach(function(emp,indexEmp){
            if(emp.empUsername==empUsername) {
                index = indexEmp;
            }
        })
        return index;
    };

    // remove employees
    this.removeEmp = function(empUsername) {
        var index = this.findIndex(empUsername);
        this.arr.splice(index,1);
    };

    // get employees info after clicking on the Sua button
    this.getEmp = function(empUsername) {
        var emp = null;
        this.arr.forEach(function(element) {
            if(element.empUsername==empUsername) {
                emp = element;
            }
        });
        return emp;
    };

    // update and save info changes
    this.updateEmp = function(emp) {
        var indexEmp = this.findIndex(emp.empUsername);
        if(indexEmp!=-1) {
            this.arr[indexEmp] = emp;
        }
    };

    // search by classification
    this.searchByClass = function(keyword) {
        var lstMatches = [];
        if(keyword!=""){
            this.arr.forEach(function(emp) {
                var classLowerCase = emp.classification.toLowerCase();
                var keywordLowerCase = keyword.toLowerCase();
                if(keywordLowerCase==classLowerCase) {
                    lstMatches.push(emp);
                }
            })
            return lstMatches;
        }
        return this.arr;
    }
}