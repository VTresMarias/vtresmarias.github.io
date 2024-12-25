// global variables
var num = 0,
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
    num = 0;
  } else if (n > 20) {
    alert("you're at the end of the story!!");
    num = 20;
  } else {
    saveLeftOff(n);
    document.getElementById("navList").style.display = "inline-block";
    document.getElementById("resumeRead").style.display = "none";
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
  num = parseInt(prompt("enter a chapter that you wish to read [0-20]:", ""));
  if (num < 0 || num > 20) { navToChapter() } else {
    if (isNaN(num)) {
      navToChapter();
    }
    navigateToStory(num);
  }
}
function navStory(s) {
  switch(s) {
    case "prev":
      num -= 1;
      navigateToStory(num);
      break;
    case "next":
      num += 1;
      navigateToStory(num);
      break;
    default:
      // do nothing
      break;
  }
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

function initRead() {
  loadAjax(0);
}

function closeApp() {
  window.close();
  closeTries++;
  if (closeTries > 5) {
    alert("it appears that you can't close it this way. try CTRL-W or closing the tab manually on your browser.");
    closeTries = 5;
  }
}

// migration from html to txt for a cleaner navigation
function loadAjax(r) {

  // related code: https://www.w3schools.com/js/js_ajax_intro.asp 
  const ajaxLoad = new XMLHttpRequest();
  ajaxLoad.onload = function() {
    window.frames[0].document.body.innerHTML = this.responseText;
  }
  ajaxLoad.open("GET", "/assets/text/story/chapter" + r + ".txt");
  ajaxLoad.send();

  return;

}