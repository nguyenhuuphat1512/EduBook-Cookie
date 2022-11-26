function FormValidate() {
    var name = document.getElementById('name').value;
    var errorName = document.getElementById('errorName');
    var regexName = /^[^\d+]*[\d+]{0}[^\d+]*$/;

    var phone = document.getElementById('phone').value;
    var erorPhone = document.getElementById('erorPhone');
    var regexPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    var email = document.getElementById('email').value;
    var errorEmail = document.getElementById('erorEmail');
    var reGexEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;

    if (name == '' || name == null) {
        errorName.innerHTML = "Họ tên không được để trống!";
    } else if (!regexName.test(name)) {
        errorName.innerHTML = "Họ tên không hợp lệ!";
        return false;
    } else {
        errorName.innerHTML = '';
    }

    if (phone == '' || phone == null) {
        erorPhone.innerHTML = "Số điện thoại không được để trống!";
    } else if (!regexPhone.test(phone)) {
        erorPhone.innerHTML = "SĐT không hợp lệ!";
        return false;
    } else {
        erorPhone.innerHTML = '';
    }

    if (email == '' || email == null) {
        errorEmail.innerHTML = "Email không được để trống!";
    } else if (!reGexEmail.test(email)) {
        errorEmail.innerHTML = "Email không hợp lệ!";
        email = '';
    } else {
        errorEmail.innerHTML = '';
    }

    var passW = document.getElementById('pass').value;
    var errorPass = document.getElementById('errorPass');

    if (passW == '' || passW == null) {
        errorPass.innerHTML = "Mật khẩu vui lòng không để trống!";
    } else {
        errorPass.innerHTML = "";
    }

    var ConPass = document.getElementById('passw').value;
    var errorConPass = document.getElementById('errorConPass');

    if (ConPass == '' || ConPass == null) {
        errorConPass.innerHTML = "Xác nhận mật khẩu vui lòng không để trống!";
    } else if (ConPass != passW) {
        alert("Xác nhận mật khẩu không trùng khớp!");
    } else {
        errorConPass.innerHTML = "";
    }

    if (name && phone && email && ConPass && passW && passW == ConPass) {
        // Người dùng đã nhập đúng thông tin
        alert("Đăng ký thành công!");
        // alert(location.href = "http://itplus-academy.edu.vn/");

        // return true; thực hiện việc submit form
    } else {

    }

    return false;
}