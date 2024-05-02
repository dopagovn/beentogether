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

const btnAgree = $(".btn-agree");
const titleElement = $(".title");
const buttonContainer = $(".buttons");
const yesButton = $(".btn--yes");
const noButton = $(".btn--no");
const catImg = $(".cat-img");

const MAX_IMAGE = 5;
let play = true;
let noCount = 0;

var music = document.getElementsByClassName("music");

btnAgree.on("click", function () {
  $(".content").toggleClass("fadeIn fadeOut");
  setTimeout(function () {
    $(".content").toggleClass("show hidden");
  }, 1001);
  music[0].play();
  setTimeout(function () {
    $(".valentine").toggleClass("hidden show");
    $(".valentine").addClass("fadeIn");
  }, 1002);
});

function handleYesClick() {
  titleElement.html("Yayyyy! :3");
  buttonContainer.addClass("hidden");
  changeImage("yes");
}

function handleNoClick() {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGE);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGE) {
      play = false;
    }
  }
}

function resizeYesButton() {
  const fontSize = yesButton.css("font-size");
  const newFontSize = parseFloat(fontSize) * 1.6;
  console.log(newFontSize);
  yesButton.css("font-size", `${newFontSize}px`);
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Are you sure?",
    "Pookie please",
    "Don't do this to me :(",
    "You're breaking my heart",
    "I'm gonna cry...",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.attr("src", `image/cat-${image}.jpg`);
}

function updateNoButtonText() {
  noButton.html(generateMessage(noCount));
}

yesButton.on("click", handleYesClick);
noButton.on("click", handleNoClick);
