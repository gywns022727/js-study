const enter = addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    check();
  }
});

const check = () => {
  const form = document.forms["form"];

  if (!form["id"].value) {
    alert("아이디를 입력해주세요.");
    form["id"].focus();
    return false;
  } else if (!form["password"].value) {
    alert("비밀번호를 입력해주세요.");
    form["password"].focus();
    return false;
  } else if (!form["passwordCheck"].value) {
    alert("비밀번호를 다시 입력해주세요.");
    form["passwordCheck"].focus();
    return false;
  } else if (form["password"].value !== form["passwordCheck"].value) {
    alert("비밀번호가 일치하지 않습니다.");
    form["passwordCheck"].focus();
    return false;
  } else {
    alert("회원가입에 성공했습니다.");
  }
};

const date = new Date();
const year = date.getFullYear();
let month = date.getMonth() + 1;
if (month < 10) {
  month = "0" + month;
}
let day = date.getDate();
if (day < 10) {
  day = "0" + day;
}

const fullDate = year + "-" + month + "-" + day;
const toDay = document.getElementById("toDay");
toDay.setAttribute("value", fullDate);

window.onload = () => {
  alert("브라우저가 로드되었습니다.");
};
