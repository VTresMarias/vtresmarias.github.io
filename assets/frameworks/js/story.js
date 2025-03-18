// global variables
var storyChap = 0,
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

function navigateToStory(n) {
  if (n < 0) {
    alert("you're at the beginning of the story!!");
    storyChap = 0;
    throw new Error("you're at the beginning of the story!!");
  } else if (n > 20) {
    alert("you're at the end of the story!!");
    storyChap = 20;
    throw new Error("you're at the end of the story!!");
  } else {
    saveLeftOff(n);
    document.getElementById("navList").style.display = "inline-block";
    document.getElementById("resumeRead").style.display = "none";
    window.frames[0].document.body.scrollTop = 0;
    document.getElementById("storyNav").style.pointerEvents = "none";
    document.getElementById("storyNav").style.cursor = "wait";
    document.getElementById("storyNav").style.opacity = "0";
    setTimeout(() => {
      loadAjax(n);
      setTimeout(() => {
        document.getElementById("storyNav").style.opacity = "1";
        document.getElementById("storyNav").style.cursor = "initial";
        document.getElementById("storyNav").style.pointerEvents = "initial";
      }, 750);
    }, 750);
  }
}
function navToChapter() {
  storyChap = parseInt(prompt("enter a chapter that you wish to read [0-20]:", ""));
  if (storyChap < 0 || storyChap > 20) {
    alert("chapter selection must be from 0 to 20.");
    throw new Error("chapter selection must be from 0 to 20.");
  } else {
    if (isNaN(storyChap)) { throw new Error("operation canceled."); }
    navigateToStory(storyChap);
  }
}
function navStory(s) {
  if (s == "prev") {
    storyChap--;
    navigateToStory(storyChap);
  } else if (s == "next") {
    storyChap++;
    navigateToStory(storyChap);
  }
}

function mus(arg) {
  if (arg == "play") {
    document.getElementById("playBtn").style.display = "none";
    document.getElementById("pausBtn").style.display = "inline-block";
    document.getElementById("storyBGM").play();
  } else if (arg == "pause") {
    document.getElementById("playBtn").style.display = "inline-block";
    document.getElementById("pausBtn").style.display = "none";
    document.getElementById("storyBGM").pause();
  }
}

function initRead() { loadAjax(0); }

function closeApp() {
  window.close();
  closeTries++;
  if (closeTries > 5) {
    alert("it appears that you can't close it this way. try CTRL+W (or CMD+W) or closing the tab manually on your browser.");
    closeTries = 5;
    throw new Error("it appears that you can't close it this way. try CTRL+W (or CMD+W) or closing the tab manually on your browser.");
  }
}

// migration from html to txt for a cleaner navigation
function loadAjax(r) {

  // related code: https://www.w3schools.com/js/js_ajax_intro.asp 
  const ajaxLoad = new XMLHttpRequest();
  ajaxLoad.onload = function() { window.frames[0].document.body.innerHTML = this.responseText; }
  ajaxLoad.open("GET", "/assets/text/story/chapter" + r + ".txt");
  ajaxLoad.send();

  return;

}