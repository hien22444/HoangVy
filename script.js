let isSoundMuted = false;

function openCard() {
  const cover = document.getElementById("cover");
  const cardContent = document.getElementById("cardContent");

  cover.style.display = "none";
  cardContent.style.display = "block";
}

function closeCard() {
  const cover = document.getElementById("cover");
  const cardContent = document.getElementById("cardContent");

  cover.style.display = "block";
  cardContent.style.display = "none";
}

function toggleSound() {
  const button = document.querySelector(".btn-sound");
  isSoundMuted = !isSoundMuted;
  button.textContent = isSoundMuted ? "🔇" : "🔊";
  // Thêm logic phát nhạc nếu cần
}

// Add click event to cover
document.getElementById("cover").addEventListener("click", openCard);
