let isSoundMuted = false;

function getBgMusic() {
  return document.getElementById("bgMusic");
}

function openCard() {
  const cover = document.getElementById("cover");
  const cardContent = document.getElementById("cardContent");
  const bgMusic = getBgMusic();

  cover.style.display = "none";
  cardContent.style.display = "block";

  // Phát nhạc khi mở thiệp
  if (bgMusic && !isSoundMuted) {
    bgMusic.volume = 0.5; // Âm lượng 50%
    bgMusic.currentTime = 0; // Reset về đầu
    bgMusic.play().catch((e) => console.log("Không thể phát nhạc:", e));
  }
}

function closeCard() {
  const cover = document.getElementById("cover");
  const cardContent = document.getElementById("cardContent");
  const bgMusic = getBgMusic();

  cover.style.display = "block";
  cardContent.style.display = "none";

  // Dừng nhạc khi đóng thiệp
  if (bgMusic) {
    bgMusic.pause();
    bgMusic.currentTime = 0;
  }
}

function toggleSound() {
  const button = document.querySelector(".btn-sound");
  const bgMusic = getBgMusic();
  isSoundMuted = !isSoundMuted;

  if (isSoundMuted) {
    button.textContent = "🔇";
    if (bgMusic) bgMusic.pause();
  } else {
    button.textContent = "🔊";
    if (
      bgMusic &&
      document.getElementById("cardContent").style.display !== "none"
    ) {
      bgMusic.play().catch((e) => console.log("Không thể phát nhạc:", e));
    }
  }
}

// Add click event to cover
document.addEventListener("DOMContentLoaded", function () {
  const coverElement = document.getElementById("cover");
  if (coverElement) {
    coverElement.addEventListener("click", openCard);
  }
});
