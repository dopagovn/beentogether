// Chặn những người nhiều chuyện như thằng ranh con Vinh chẳng hạn xem source code chứ cũng chả chặn hoàn toàn được =))).
// Ai có nhã ý muốn tham khảo có thể ib vào https://facebook.com/dop4go

// $(document).ready(function () {
//   $(document).on("contextmenu", function (e) {
//     e.preventDefault();
//   });

//   $(document).on("keydown", function (e) {
//     // Chặn người dùng nhấn F12 hoặc CTRL+U
//     if (
//       (e.key === "F12" && e.ctrlKey === false) ||
//       (e.ctrlKey === true && e.key === "u")
//     ) {
//       e.preventDefault();
//       alert(
//         "Độc quyền của thisisquocthinh đấy. Không có xem code được đâu mấy bé!"
//       );
//     }
//   });
// });

let isPlay = false;
var icon = $(".pause-play-btn i");
const playBtn = $(".pause-play-btn");
const songTitle = $(".song-title");
const timeControl = $(".time-control");
const songImage = $(".song-image");
const music = $(".music");
const next = $("#next");
const prev = $("#prev");
const list = $(".playlist");


// handle show dashboard

$(".btn-agree").click(() => {
  $(".main-hi").removeClass("show");
  $(".btn-agree").removeClass("show");
  $(".main-hi").addClass("hide");
  $(".btn-agree").addClass("hide");
  setTimeout(() => {
    $(".main-hi").css("display", "none");
    $(".btn-agree").css("display", "none");
  }, 1999)
  setTimeout(() => {
    $(".dashboard").removeClass("hide");
    $(".dashboard").addClass("show");
    $(".dashboard").css("display", "flex");
  }, 2001)
})

const app = {
  listMusic: [
    {
      name: 'A song for you - Joonil Jung',
      url: '../music/asongforyou.mp3',
      image: '../image/image1.jpg',
    },
    {
      name: 'A thousand years - Christina Perri',
      url: '../music/athousandyears.mp3',
      image: '../image/image2.jpg',
    },
    {
      name: 'Tip Toe - HYBS',
      url: '../music/tiptoe.mp3',
      image: '../image/image3.jpg',
    },
    {
      name: 'Ride - HYBS',
      url: '../music/ride.mp3',
      image: '../image/image4.jpg',
    },
    {
      name: 'One call away - Charlie Puth',
      url: '../music/onecallaway.mp3',
      image: '../image/image5.webp',
    },
    {
      name: 'Patient - Charlie Puth',
      url: '../music/patient.mp3',
      image: '../image/image6.webp',
    },
    {
      name: 'Golden hour - JVKE',
      url: '../music/goldenhour.mp3',
      image: '../image/image7.jpg',
    },
    {
      name: 'Van Gogh - Dept',
      url: '../music/vangogh.mp3',
      image: '../image/image8.jpg',
    },
    {
      name: 'This is what falling in love feels like - Dept',
      url: '../music/this-is-what-falling-love-feels-like.mp3',
      image: '../image/image9.jpg',
    },
  ],
  currentIndex: 0,

  defineProperties: function () {
    Object.defineProperty(this, 'currentSong', {
      get: function () {
        return this.listMusic[this.currentIndex];
      }
    })
  },

  loadCurrentSong: function () {
    songTitle.text(this.currentSong.name);
    songImage.attr("src", this.currentSong.image);
    music.attr("src", this.currentSong.url);
  },

  render: function () {
    const htmls = this.listMusic.map(song => {
      return `<div class="song-element">
      <div class="left-item">
        <img class="image-list" src="${song.image}" alt="">
      </div>
      <div class="right-item">
        <span>${song.name}</span>
      </div>
    </div>`
    })
    list.append(htmls);
  },

  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.listMusic.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
    music[0].play();
    music[0].currentTime = 0;
    timeControl.attr("defaultValue", 0);
    timeControl.attr("value", 0);
    timeControl.attr("valueAsNumber", 0);
  },

  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.listMusic.length - 1;
    }
    this.loadCurrentSong();
    music[0].play();
    music[0].currentTime = 0;
    timeControl.attr("defaultValue", 0);
    timeControl.attr("value", 0);
    timeControl.attr("valueAsNumber", 0);
  },

  handleEvent: function () {
    const songImageWidth = songImage.width();
    $(".playlist").on("scroll", function () {

      const scrollTop = $(".playlist").scrollTop();
      const newWidth = songImageWidth - scrollTop;
      console.log(scrollTop)

      newWidth > 0 ? (songImage.css("width", `${newWidth}px`),
        songImage.css("height", `${newWidth}px`)) : (songImage.css("width", "0px"),
        songImage.css("height", "0px"))

        console.log(newWidth);

    })


    var _this = this;
    playBtn.click(() => {
      if (isPlay) {
        music[0].pause();
      } else {
        music[0].play();
      }
    })

    music[0].onplay = function () {
      isPlay = true;
      icon.removeClass("bi-play-fill").addClass("bi-pause")
    }

    music[0].onpause = function () {
      isPlay = false;
      icon.removeClass("bi-pause").addClass("bi-play-fill")
    }

    music[0].ontimeupdate = function () {
      if (music[0].duration) {
        const progress = Math.floor(music[0].currentTime / music[0].duration * 100);
        timeControl.attr("value", progress);
        timeControl.attr("defaultValue", progress);
        timeControl.attr("valueAsNumber", progress);
        timeControl.val(progress);
      }
    }

    timeControl[0].oninput = function (e) {
      const seekTime = music[0].duration / 100 * e.target.value;
      music[0].currentTime = seekTime;
    }

    next.click(function () {
      _this.nextSong();
    })

    prev.click(function () {
      _this.prevSong();
    })
  },




  start: function () {
    // Định nghĩa các thuộc tính object; 
    this.defineProperties();

    // Lắng nghe/xử lý sự kiện
    this.handleEvent();

    // Load bài hát hiện tại 
    this.loadCurrentSong();

    // Render danh sách nhạc
    this.render();

  },


};


app.start();