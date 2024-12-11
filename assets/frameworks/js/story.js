// global variables
let num = 0,
  closeTries = 0;

// workaround: https://stackoverflow.com/questions/217776/how-to-apply-css-to-iframe 
function storyLoadCSS() {
  var loadStyle = document.createElement("link");
  loadStyle.rel = "stylesheet";
  loadStyle.href = "/assets/frameworks/css/nav/story/chapter.css";
  loadStyle.type = "text/css";
  loadStyle.media = "all"
  window.frames[0].document.head.appendChild(loadStyle);
}

function nav(n) {
  num += n;
  if (num < 0) {
    alert("you're at the beginning of the story!!");
    num = 0;
  } else if (num > 20) {
    alert("you're at the end of the story!!");
    num = 20;
  } else {
    saveLeftOff(num);
    document.getElementById("storyNav").style.pointerEvents = "none";
    document.getElementById("storyNav").style.cursor = "wait";
    document.getElementById("storyNav").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("storyNav").src = "/story/chapter" + num + ".html";
      setTimeout(() => {
        document.getElementById("storyNav").style.opacity = "1";
        document.getElementById("storyNav").style.cursor = "initial";
        document.getElementById("storyNav").style.pointerEvents = "initial";
      }, 750);
    }, 750);
  }
}

function navToChapter() {
  let navi = parseInt(prompt("enter a chapter that you wish to read [0-20]:", "")),
    prevVal = num;
  num = navi;
  if (num < 0 || num > 20) { navToChapter() } else {
    if (isNaN(num)) {
      num = prevVal;
    }
    saveLeftOff(num);
    document.getElementById("storyNav").style.pointerEvents = "none";
    document.getElementById("storyNav").style.cursor = "wait";
    document.getElementById("storyNav").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("storyNav").src = "/story/chapter" + num + ".html";
      setTimeout(() => {
        document.getElementById("storyNav").style.opacity = "1";
        document.getElementById("storyNav").style.cursor = "initial";
        document.getElementById("storyNav").style.pointerEvents = "initial";
      }, 750);
    }, 750);
  }
}

function panelOpen() {
  document.getElementById("mobileNav").style.transform = "initial";
}
function panelClose() {
  document.getElementById("mobileNav").style.transform = "translateY(-15rem)";
}

function mus(arg) {
  if (arg == "play") {
    document.getElementById("playMob").style.display = "none";
    document.getElementById("pausMob").style.display = "inline-block";
    document.getElementById("playDes").style.display = "none";
    document.getElementById("pausDes").style.display = "inline-block";
    document.getElementById("storyBGM").play();
  } else if (arg == "pause") {
    document.getElementById("playMob").style.display = "inline-block";
    document.getElementById("pausMob").style.display = "none";
    document.getElementById("playDes").style.display = "inline-block";
    document.getElementById("pausDes").style.display = "none";
    document.getElementById("storyBGM").pause();
  }
}

function closeApp() {
  window.close();
  closeTries++;
  if (closeTries > 5) {
    alert("it appears that you can't close it this way. try CTRL-W or closing the tab manually on your browser.");
    closeTries = 5;
  }
}