import {User} from "../Modal/UserInfo.js";
import { GENDER } from "../Modal/gender.js";
var userAll = [];
document.getElementById("submit").onclick = async function () {
  let user = new User();
  // console.log(user)
  user.email = document.querySelector("#email").value;
  user.password = document.querySelector("#password").value;
  user.passwordConfirm = document.querySelector("#passwordConfirm").value;
  user.name = document.querySelector("#name").value;
  user.phone = document.querySelector("#phone").value;
  //lấy giá trị Gender ( C1)
  user.gender =
    GENDER[document.querySelector("input[type = radio]:checked").value];
  //lấy giá trị Gender ( C2 đặt value 2 inp bên html là true và false )
  // user.gender = "";
  //   let radios = document.getElementsByName("selector");
  //   console.log(radios);
  //   for (let genderValue of radios) {
  //     if (genderValue.checked) {
  //       user.gender = genderValue.value;
  //       console.log(user.gender);
  //     //   return user.gender;
  //     }
  //   }
  // console.log(userAll);

  let isValid = validition();
  if (!isValid) {
    return alert("Please check all informations again");
  }

  let promise = axios({
    url: "https://shop.cyberlearn.vn/api/Users/signup",
    method: "POST",
    data: user,
  });
  promise.then((result) => {
    window.location.reload();
    alert(result.data.message);
  });
  promise.catch((err) => {
    alert(err.response?.data.message);
  });
};

function validition() {
  // Kiểm tra validation
  // hàm checkValidity() là hàm kiểm tra xem các input bên trong tag form
  // typeMismatch : kiểm tra các input có type đặc biệt như email,date,...

  var isValid = document.getElementById("formRegister").checkValidity();
  if (!isValid) {
    // DOM tới input Email và kiểm tra hợp lệ
    let inpEmail = document.getElementById("email");
    let spanEmail = document.getElementById("form-message-email");
    if (inpEmail.validity.valueMissing) {
      spanEmail.innerHTML = "Email không được để trống !";
    } else if (
      inpEmail.validity.typeMismatch ||
      inpEmail.validity.patternMismatch
    ) {
      spanEmail.innerHTML = "Email không đúng định dạng !";
    } else {
      spanEmail.innerHTML = "";
    }
    // DOM tới input Name và kiểm tra hợp lệ
    let inpName = document.getElementById("name");
    let spanName = document.getElementById("form-message-name");
    if (inpName.validity.valueMissing) {
      spanName.innerHTML = "Name không được để trống !";
    } else if (
      inpName.validity.valueMissing ||
      inpName.validity.patternMismatch
    ) {
      spanName.innerHTML = "Name không có kí tự đặc biệt ! ";
    } else {
      spanName.innerHTML = "";
    }
    // DOM tới input Phone và kiểm tra hợp lệ
    let inpPhone = document.getElementById("phone");
    let spanPhone = document.getElementById("form-message-phone");
    if (inpPhone.validity.valueMissing) {
      spanPhone.innerHTML = "Phone không được để trống !";
    } else if (
      inpPhone.validity.valueMissing ||
      inpPhone.validity.patternMismatch
    ) {
      spanPhone.innerHTML = "Phone phải từ 03 05 07 08 09 và có 10 số ";
    } else {
      spanPhone.innerHTML = "";
    }
    // DOM tới input Password và kiểm tra hợp lệ
    let inpPass = document.getElementById("password");
    let spanPass = document.getElementById("form-message-password");
    if (inpPass.validity.valueMissing) {
      spanPass.innerHTML = "Password không được để trống";
    } else if (
      inpPass.validity.valueMissing ||
      inpPass.validity.patternMismatch
    ) {
      spanPass.innerHTML = "Password bao gồm 1 chữ Hoa, 1chữ thường và 1 số  ";
    } else {
      spanPass.innerHTML = "";
    }
    // DOM tới input Password và kiểm tra hợp lệ
    let inpPassCf = document.getElementById("passwordConfirm");
    let spanPassCf = document.getElementById("form-message-passwordConfirm");
    if (inpPassCf.value !== inpPass.value) {
      spanPassCf.innerHTML = "PasswordConfirm không khớp với Password ! ";
    } else {
      spanPassCf.innerHTML = "";
    }
  }
  return isValid;
}
