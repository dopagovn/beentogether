// Block view page source
// $(document).ready(function () {
//   $(document).on("contextmenu", function (e) {
//     e.preventDefault();
//   });
// });

const password = "24092006";
const passwordInput = $(".input");
const login = $(".btn");
const loginContent = $(".login_content");
const message1 = $(".message1");
const buttonOption = $(".button_option");
const agree = $(".btn_agree");
// on user click button

$(document).ready(function () {
  login.click(function () {
    if (password === passwordInput.val()) {
      var audio = document.getElementById("myMusic");
      audio.play();
      loginContent.addClass("hidden");

      setTimeout(function () {
        loginContent.css("display", "none");
        message1.css("display", "block");

        // Tạo hiệu ứng mờ dần đến rõ
        var opacity = 0;
        var interval = 1000 / 6; // Chia ra thành 6 phần trong 1s
        var timer = setInterval(function () {
          opacity += 0.2; // Mỗi lần tăng thêm 20%
          message1.css("opacity", opacity);
          buttonOption.css("display", "flex");
          buttonOption.css("opacity", opacity);

          if (opacity >= 1) {
            clearInterval(timer); // Dừng khi đạt opacity = 1
          }
        }, interval);
        setTimeout(function () {
          $(".text2").css("display", "block");
        }, 5500);
      }, 1000); // Thời gian chờ của setTimeout
    } else {
      alert("Xin lỗi nhưng điều này không dành cho bạn!");
    }
  });

  agree.click(function () {
    message1.css("display", "none");
  });
});
