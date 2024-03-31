// Chặn những người nhiều chuyện như thằng ranh con Vinh chẳng hạn xem source code chứ cũng chả chặn hoàn toàn được =))).
// Ai có nhã ý muốn tham khảo có thể ib vào https://facebook.com/dop4go

$(document).ready(function () {
  $(document).on("contextmenu", function (e) {
    e.preventDefault();
  });

  $(document).on("keydown", function (e) {
    // Chặn người dùng nhấn F12 hoặc CTRL+U
    if (
      (e.key === "F12" && e.ctrlKey === false) ||
      (e.ctrlKey === true && e.key === "u")
    ) {
      e.preventDefault();
      alert(
        "Độc quyền của thisisquocthinh đấy. Không có xem code được đâu mấy bé!"
      );
    }
  });
});

const password = "24092006";
const passwordInput = $(".input");
const login = $(".btn");
const loginContent = $(".login_content");
const message1 = $(".message1");
const message2 = $(".message2");
const buttonOption = $(".button_option");
const agree = $(".btn_agree");
const ok = $(".btn_ok");

// Các function cho các effect!

const fadeInAnimation = (element, duration) => {
  if (!element || !element.length) return;

  var opacity = 0;
  const interval = 1000 / 8;

  if (element.css("opacity") == 0) {
    setTimeout(() => {
      element.css("display", "flex");
      const timer = setInterval(() => {
        opacity += 0.2;
        element.css("opacity", opacity);

        if (opacity >= 1) {
          clearInterval(timer);
        }
      }, interval);
    }, duration);
  }
};

const fadeOutAnimation = (element, duration) => {
  if (!element || !element.length) return;

  var opacity = 1;
  const interval = 1000 / 8;

  if (element.css("opacity") == 1) {
    setTimeout(() => {
      const timer = setInterval(() => {
        opacity -= 0.2;
        element.css("opacity", opacity);

        if (opacity <= -1) {
          clearInterval(timer);
          element.css("display", "none");
        }
      }, interval);
    }, duration);
  }
};

// Khi người tôi yêu click vào các button

$(document).ready(function () {
  // Click login
  login.click(function () {
    if (password === passwordInput.val()) {
      // alert

      alert("Mình cùng nghe tí nhạc nha ❤️");
      var audio = document.getElementById("myMusic");
      audio.play();
      loginContent.addClass("hidden");
      setInterval(createHeart, 300);

      setTimeout(function () {
        loginContent.css("display", "none");
        fadeInAnimation(message1, 1000);

        setTimeout(function () {
          $(".text2").css("display", "block");
        }, 5500);

        if ($(".text2").css("opacity") == 1) {
          setTimeout(() => {
            fadeInAnimation(buttonOption, 1000);
          }, 9500);
        }
      }, 1000); // Thời gian chờ của setTimeout
    } else {
      alert("Xin lỗi nhưng điều này không dành cho bạn!");
    }
  });
  // Đồng ý khi xem tiếp
  agree.click(() => {
    fadeOutAnimation(message1, 1000);
    fadeInAnimation(message2, 1000);

    let currentTextIndex = 1; // Bắt đầu với text-1

    const fadeInText = (index) => {
      fadeInAnimation($(`.text-${index}`), 1000);
    };

    const fadeOutText = (index) => {
      fadeOutAnimation($(`.text-${index}`), 1000);
    };

    const displayDuration = 8000;

    // Lặp lại hiệu ứng
    const intervalId = setInterval(() => {
      fadeInText(currentTextIndex);

      // Hiển thị văn bản hiện tại trong một khoảng thời gian
      setTimeout(() => {
        fadeOutText(currentTextIndex);
        currentTextIndex++; // Tăng chỉ số văn bản

        // Nếu đã hiển thị hết tất cả các văn bản
        if (currentTextIndex > 9) {
          clearInterval(intervalId); // Dừng chu trình lặp lại khi đạt đến text-5

          setTimeout(() => {
            fadeInAnimation($(".last-mess"), 1000);
          }, 2000);
          setTimeout(() => {
            fadeInAnimation($(".btn_ok"), 2000);
          }, 1000);
        }
      }, displayDuration);

      // Chuyển sang văn bản tiếp theo sau mỗi chu kỳ
    }, displayDuration + 2000); // Tổng thời gian của mỗi chu kỳ là thời gian hiển thị + 2 giây cho hiệu ứng chuyển đổi
  });
  ok.click(() => {
    fadeOutAnimation($(".ready-to-end"), 1000);
    setTimeout(() => {
      fadeInAnimation($(".message3"), 1000);
    }, 2000);

    setTimeout(() => {
      fadeInAnimation($(".ending-mess"), 3000);
    }, 3000);
  });
});

// Tạo cơn mưa trái tim

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";

  heart.innerText = "💗";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}
