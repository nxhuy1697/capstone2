import getUserInfo from "../Modal/UserInfo.js";
let form = document.querySelector("form");
// console.log(form)
document.getElementById("submit").onclick = async function () {
  let user = new getUserInfo();
  user.email = document.querySelector("#email").value;
  user.password = document.querySelector("#password").value;
  user.name = document.querySelector("#name").value;
  user.phone = document.querySelector("#phone").value;
  user.gender = "";
  let radios = document.getElementsByName("selector");
  console.log(radios)
  for (let genderValue of radios) {
    if (genderValue.checked) {
      user.gender = genderValue.value;

    //   console.log(user.gender);
      //   return user.gender;
    }
  }

//   console.log(user)
  let promise = axios({
    url: "https://shop.cyberlearn.vn/api/Users/signup",
    method: "post",
    data: user,
  });
  promise.then(function (result) {
    console.log(result);
    alert(result.data.message);
  });
  promise.catch(function (err) {
    console.log(err)
    alert(err.response?.data.message);
  });
};
