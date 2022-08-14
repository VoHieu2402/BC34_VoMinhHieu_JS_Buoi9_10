function Validation() {
    // check null
    this.nullCheck = function(value,errorId,mess) {
        if(value.length==0) {
            document.getElementById(errorId).style.display = "block";
            document.getElementById(errorId).innerHTML = mess;
            return false;
        } else {
            document.getElementById(errorId).style.display = "none";
            document.getElementById(errorId).innerHTML = "";
            return true;
        }
    };

    // check the length
    this.lengthCheck = function(value,errorId,mess,max,min) {
        if(value.length>max || value.length<min) {
            document.getElementById(errorId).style.display = "block";
            document.getElementById(errorId).innerHTML = mess;
            return false;
        } else {
            document.getElementById(errorId).style.display = "none";
            document.getElementById(errorId).innerHTML = "";
            return true;
        }
    }; 

    // check whitespace
    this.whitespaceCheck = function(value,errorId,mess) {
        var regex = /\s/;
        if(regex.test(value)) {
            document.getElementById(errorId).style.display = "block";
            document.getElementById(errorId).innerHTML = mess;
            return false;
        } else {
            document.getElementById(errorId).style.display = "none";
            document.getElementById(errorId).innerHTML = "";
            return true;
        }
    };

    // check string
    this.stringCheck = function(value,errorId,mess) {
        var letter =
            "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
            "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
            "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";

        if (value.match(letter)) {
        //true
        getEle(errorId).style.display = "none";
        getEle(errorId).innerHTML = "";
        return true;
        }

        //false
        getEle(errorId).style.display = "block";
        getEle(errorId).innerHTML = mess;
        return false;
    };

    // check email
    this.emailCheck = function(value,errorId,mess) {
        var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
        if (value.match(letter)) {
            //true
            getEle(errorId).style.display = "none";
            getEle(errorId).innerHTML = "";
            return true;
        }
  
        //false
        getEle(errorId).style.display = "block";
        getEle(errorId).innerHTML = mess;
        return false;
    };

    // check password
    this.passwordCheck = function(value,errorId,mess) {
        var letter = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
  
        if (value.match(letter)) {
            //true
            getEle(errorId).style.display = "none";
            getEle(errorId).innerHTML = "";
            return true;
        }
  
        //false
        getEle(errorId).style.display = "block";
        getEle(errorId).innerHTML = mess;
        return false;
    };

    // check salary
    this.salaryCheck = function(value,errorId,mess) {
        if(value<1000000 || value>20000000) {
            document.getElementById(errorId).style.display = "block";
            document.getElementById(errorId).innerHTML = mess;
            return false;
        } else {
            document.getElementById(errorId).style.display = "none";
            document.getElementById(errorId).innerHTML = "";
            return true;
        }
    };

    // check title
    this.titleCheck = function(value,errorId,mess) {
        if(value=="Chọn chức vụ") {
            document.getElementById(errorId).style.display = "block";
            document.getElementById(errorId).innerHTML = mess;
            return false;
        } else {
            document.getElementById(errorId).style.display = "none";
            document.getElementById(errorId).innerHTML = "";
            return true;
        }
    }

    // check working hours
    this.workingHoursCheck = function(value,errorId,mess) {
        if(value<80 || value>200) {
            document.getElementById(errorId).style.display = "block";
            document.getElementById(errorId).innerHTML = mess;
            return false;
        } else {
            document.getElementById(errorId).style.display = "none";
            document.getElementById(errorId).innerHTML = "";
            return true;
        }
    };
}