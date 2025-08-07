const lists = [
  { url: "img/top1.jpg", position: "center 63%" },
  { url: "img/top2.jpg", position: "center 58%" },
  { url: "img/top3.jpg", position: "center 45%" },
  { url: "img/top5.jpg", position: "center 50%" },
  { url: "img/top6.jpg", position: "center 35%" },
  { url: "img/top7.jpg", position: "center 55%" }
];

const track = document.getElementById("sliderTrack");
const slides = document.querySelectorAll(".slide");
const slideCount = slides.length;
let index = 0;
const interval = 5000;

// 最初のスライドをクローンして末尾に追加（無限ループ用）
const firstClone = slides[0].cloneNode(true);
track.appendChild(firstClone);

function moveSlide() {
  index++;
  track.style.transition = "transform 1s ease-in-out";
  track.style.transform = `translateX(-${index * 100}%)`;

  // 最後のクローンに到達したら、瞬時に戻す
  if (index === slideCount) {
    setTimeout(() => {
      track.style.transition = "none";
      track.style.transform = `translateX(0%)`;
      index = 0;
    }, 1000); // transition時間と同じ
  }
}

// 5秒ごとにスライド
setInterval(moveSlide, interval);
