var btnSubmit = document.forms["register-form"]["btn-submit"];
btnSubmit.onclick = function () {
    var txtUsername = document.forms["register-form"] ["username"];
    var msgUsername = txtUsername.nextElementSibling;
    if (txtUsername == null || txtUsername.value.length == 0) {
        msgUsername.innerHTML = "*Vui lòng nhập tên của bạn.";
        msgUsername.classList.remove("hidden-text");
    }
    else if (txtUsername.value.length < 5) {
        msgUsername.innerHTML = "*tên của bạn quá ngắn.";
        msgUsername.classList.remove("hidden-text");
    } else if (txtUsername.value.length > 20) {
        msgUsername.innerHTML = "*tên của bạn quá dài.";
        msgUsername.classList.remove("hidden-text");
    } else {


        msgUsername.innerHTML = "* Tên hợp lệ";


        msgUsername.classList.remove("hidden-text");


        msgUsername.classList.remove("danger-text");


        msgUsername.classList.add("success-text");


    }
    var txtPassword = document.forms["register-form"]["password"];
    var msgPassword = txtPassword.nextElementSibling;
    if (txtPassword == null || txtPassword.value.length == 0) {
        msgPassword.innerHTML = "* Vui lòng nhập mật khẩu";
        msgPassword.classList.remove("hidden-text");
    } else {
        msgPassword.innerHTML = "* Mật khẩu hợp lệ";
        msgPassword.classList.remove("hidden-text");
        msgPassword.classList.remove("danger-text");
        msgPassword.classList.add("success-text");
    }
    var txtFullname = document.forms["register-form"] ["fullName"];
    var msgFullname = txtFullname.nextElementSibling;
    if (txtFullname == null || txtFullname.value.length == 0) {
        msgFullname.innerHTML = "*Vui lòng nhập đầy đủ họ và tên của bạn.";
        msgFullname.classList.remove("hidden-text");
    }
    else if (txtFullname.value.length < 5) {
        msgFullname.innerHTML = "*tên của bạn quá ngắn.";
        msgFullname.classList.remove("hidden-text");
    } else if (txtFullname.value.length > 30) {
        msgFullname.innerHTML = "*tên của bạn quá dài.";
        msgFullname.classList.remove("hidden-text");
    } else {
        msgFullname.innerHTML = "* Tên hợp lệ";
        msgFullname.classList.remove("hidden-text");
        msgFullname.classList.remove("danger-text");
        msgFullname.classList.add("success-text");
    }
    var txtEmail = document.forms["register-form"]["email"];
    var msgEmail = txtEmail.nextElementSibling;
    var valueTxtEmail = txtEmail.value
    if (txtEmail == null || txtEmail.value.length == 0) {
        msgEmail.innerHTML = "* Vui lòng nhập email";
        msgEmail.classList.remove("hidden-text");
    } else {
        if (valueTxtEmail.search('@') == -1) {
            msgEmail.innerHTML = "* Email không hợp lệ";
            msgEmail.classList.remove("hidden-text");
        } else {
            msgEmail.innerHTML = "* Email hợp lệ";
            msgEmail.classList.remove("hidden-text");
            msgEmail.classList.remove("danger-text");
            msgEmail.classList.add("success-text");
        }
    }

}