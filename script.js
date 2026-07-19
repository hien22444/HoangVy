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

// Add click event to cover
document.getElementById("cover").addEventListener("click", openCard);
