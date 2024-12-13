function navQuery() {

  var vtm = new URLSearchParams(window.location.search).get("vtm");

  // related answer: https://stackoverflow.com/a/56825511 
  const importCSS = css => document.head.appendChild(document.createElement("style")).innerHTML = css;

  if (vtm == "anniversary") {

    document.title = "anniversaries of the Marias";

    document.getElementById("home").style.display = "none";
    document.getElementById("anniversary").style.display = "block";
    document.getElementById("story").style.display = "none";
    document.getElementById("event").style.display = "none";
    document.getElementById("letter").style.display = "none";
    document.getElementById("press").style.display = "none";

    importCSS("@import url('/assets/frameworks/css/nav/index/anniversary.css');");

    navBtnHide(vtm);

  } else if (vtm == "story") {

    document.title = "the story of the First Maria ～最初のマリアの物語～";

    document.getElementById("home").style.display = "none";
    document.getElementById("anniversary").style.display = "none";
    document.getElementById("story").style.display = "block";
    document.getElementById("event").style.display = "none";
    document.getElementById("letter").style.display = "none";
    document.getElementById("press").style.display = "none";

    importCSS("@import url('/assets/frameworks/css/nav/index/story.css');");
    
    document.getElementById("vtmLogoHead").src = "/assets/web/maria_story_logo.png";

    navBtnHide(vtm);

  } else if (vtm == "event") {

    document.title = "events";
    document.getElementById("home").style.display = "none";

    document.getElementById("anniversary").style.display = "none";
    document.getElementById("story").style.display = "none";
    document.getElementById("event").style.display = "block";
    document.getElementById("letter").style.display = "none";
    document.getElementById("press").style.display = "none";

    importCSS("@import url('/assets/frameworks/css/nav/index/event.css');");

    navBtnHide(vtm);

  } else if (vtm == "letter") {

    document.title = "letters from the First Maria🍃";

    document.getElementById("home").style.display = "none";
    document.getElementById("anniversary").style.display = "none";
    document.getElementById("story").style.display = "none";
    document.getElementById("event").style.display = "none";
    document.getElementById("letter").style.display = "block";
    document.getElementById("press").style.display = "none";

    importCSS("@import url('/assets/frameworks/css/nav/index/letter.css');");

    navBtnHide(vtm);

  } else if (vtm == "press") {

    document.title = "press releases";

    document.getElementById("home").style.display = "none";
    document.getElementById("anniversary").style.display = "none";
    document.getElementById("story").style.display = "none";
    document.getElementById("event").style.display = "none";
    document.getElementById("letter").style.display = "none";
    document.getElementById("press").style.display = "block";

    importCSS("@import url('/assets/frameworks/css/nav/index/press.css');");

    navBtnHide(vtm);

  } else {

    document.title = "「VTresMarias - V三人のマリア - 」";

    navBtnHide("home");

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
    document.getElementById("bgmPlay").style.display = "none";
    document.getElementById("bgmPause").style.display = "inline-block";
    document.getElementById("storyBGM").play();
  } else if (arg == "pause") {
    document.getElementById("bgmPlay").style.display = "inline-block";
    document.getElementById("bgmPause").style.display = "none";
    document.getElementById("storyBGM").pause();
  }
}

function launchStory() {
  window.open("story");
  mus("pause");
}

function navBtnHide(lbl) {
  let format = ["desktop", "mobile"];
  for (let v = 0; v < format.length; v++) {
    document.getElementById("btn-" + lbl + "-" + format[v]).style.display = "none";
  }
}