const button = document.getElementById("audioBtn");
const audio = document.getElementById("audio");

button.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
