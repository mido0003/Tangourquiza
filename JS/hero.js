const video = document.getElementById("heroVideo");

// Optional: start a little into the video
video.addEventListener("loadedmetadata", () => {
  video.currentTime = 2;
});

// When video ends → pause on last frame
video.addEventListener("ended", () => {
  video.pause();
});
