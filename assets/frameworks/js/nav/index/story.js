function mus(arg) {
  if (arg == "play") {
    document.querySelector("#bgmPlayPause").onclick = () => { mus("pause"); };
    document.querySelector("#bgmPlayPause").innerText = "pause";
    document.querySelector("#storyBGM").play();
  } else if (arg == "pause") {
    document.querySelector("#bgmPlayPause").onclick = () => { mus("play"); };
    document.querySelector("#bgmPlayPause").innerText = "play_arrow";
    document.querySelector("#storyBGM").pause();
  }
}

function launchStory() {
  window.open("story");
  mus("pause");
}