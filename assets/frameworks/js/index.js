function navQuery() {

  let vtm = new URLSearchParams(window.location.search).get("vtm"),
    importCSS = css => document.head.appendChild(document.createElement("style")).innerHTML = css; // related answer: https://stackoverflow.com/a/56825511 

  switch (vtm) {
    case "anniversary":
      document.title = "anniversaries of the Marias";
      document.querySelector(`#${vtm}`).setAttribute("style", "display: block;");
      navBtnHide(vtm);
      importCSS(`@import url("/assets/frameworks/css/nav/index/${vtm}.css");`);
      return;
    case "story":
      document.title = "the story of the First Maria ～最初のマリアの物語～";
      document.querySelector(`#${vtm}`).setAttribute("style", "display: block;");
      navBtnHide(vtm);
      importCSS(`@import url("/assets/frameworks/css/nav/index/${vtm}.css");`);
      document.querySelector("#vtmLogoHead").src = "/assets/web/maria_story_logo.png";
      return;
    case "music":
      document.title = "V三人のマリア: the music of the Marias🍃🪷🌸"
      document.querySelector(`#${vtm}`).setAttribute("style", "display: block;");
      navBtnHide(vtm);
      importCSS(`@import url("/assets/frameworks/css/nav/index/${vtm}.css");`);
      return;
    case "event":
      document.title = "events"
      document.querySelector(`#${vtm}`).setAttribute("style", "display: block;");
      navBtnHide(vtm);
      importCSS(`@import url("/assets/frameworks/css/nav/index/${vtm}.css");`);
      return;
    case "letter":
      document.title = "letters from the First Maria🍃";
      document.querySelector(`#${vtm}`).setAttribute("style", "display: block;");
      navBtnHide(vtm);
      importCSS(`@import url("/assets/frameworks/css/nav/index/${vtm}.css");`);
      return;
    case "press":
      document.title = "press releases";
      document.querySelector(`#${vtm}`).setAttribute("style", "display: block;");
      navBtnHide(vtm);
      importCSS(`@import url("/assets/frameworks/css/nav/index/${vtm}.css");`);
      return;
    default:
      document.title = "「VTresMarias - V三人のマリア - 」";
      document.querySelector("#home").setAttribute("style", "display: block;");
      navBtnHide("home");
      importCSS(`@import url("/assets/frameworks/css/nav/index/home.css");`);
      return;
  }

}

function panelOpen() { document.querySelector("#mobileNav").setAttribute("style", "transform: initial;"); }
function panelClose() { document.querySelector("#mobileNav").setAttribute("style", "transform: translateY(-15rem);"); }

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

function navBtnHide(lbl) {
  let format = ["desktop", "mobile"];
  for (let v = 0; v < format.length; v++) { document.getElementById(`btn-${lbl}-${format[v]}`).setAttribute("style", "display: none;"); }
}

function mariaDialogOpen(maria, type) {
  document.body.insertAdjacentHTML("afterbegin", `
    <div id="mariaDiag" onclick="mariaDialogClose()">
      <div style="width: 30rem; height: 50rem;" onclick="{ event.stopPropagation(); noUndefined(); }">
        <img style="width: 20rem; border: 0.5rem solid ${isMariaClr(maria)};" src="/assets/images/profile/maria_pfp_${isMariaNum(maria)}.png" alt="${isMariaName(maria)}, ${isMariaDesignation(maria)}">
        <br>
        <h2>${isMariaName(maria)}</h2>
        <span>${isMariaDesignation(maria)}</span>
        <br>
        <div isUndefined id="mariaDesc">${isMariaDescription(isMariaNum(maria))}</div>
      </div>
    </div>
  `);
  noUndefined();
  function isMariaClr(clr) {
    switch (clr) {
      case "firstMaria": return "#793a80";
      case "secondMaria": return "#66a898";
      case "thirdMaria": return "#f0a9a9";
      default: return null;
    }
  }
  function isMariaNum(num) {
    switch (num) {
      case "firstMaria": return 1;
      case "secondMaria": return 2;
      case "thirdMaria": return 3;
      default: return null;
    }
  }
  function isMariaName(nmm) {
    switch (nmm) {
      case "firstMaria": return "Mother Agatha";
      case "secondMaria": return "Aura Ostara";
      case "thirdMaria": return "Hina Oujo";
      default: return null;
    }
  }
  function isMariaDesignation(dsg) {
    switch (dsg) {
      case "firstMaria": return " the First Maria🍃";
      case "secondMaria": return " the Second Maria🪷";
      case "thirdMaria": return " the Third Maria🌸";
      default: return null;
    }
  }
  function isMariaDescription(nmb) {
    let ajx = new XMLHttpRequest();
    ajx.onload = function() { document.getElementById("mariaDesc").innerHTML = this.responseText; }
    ajx.open("GET", `/assets/ajx/maria/${type}/maria${nmb}.txt`);
    ajx.send();
  }
  // document.getElementById("mariaDiag").setAttribute("style", "opacity: 1;");
}
function mariaDialogClose() {
  document.getElementById("mariaDiag").remove();
}

function subCollOpen(name) {
  document.body.insertAdjacentHTML("afterbegin", `
    <div id="mariaDiag" onclick="mariaDialogClose()">
      <div isUndefined id="subCollTxt" style="width: 30rem; height: 50rem;" onclick="{ event.stopPropagation(); }">
        ${whatSubColl(name)}
      </div>
    </div>
  `);
  noUndefined();
  function whatSubColl(sbcl) {
    let path;
    switch (sbcl) {
      case "cosmaria":
        path = "/assets/ajx/subcollective/cosmaria/synopsis.txt";
        break;
      default: return null;
    }
    let ajx = new XMLHttpRequest();
    ajx.onload = function() { document.getElementById("subCollTxt").innerHTML = this.responseText; }
    ajx.open("GET", `${path}`);
    ajx.send();
  }
}

function noUndefined() {
  let el = document.querySelectorAll("div[isUndefined]");
  for (let i = 0; i < el.length; i++) {
    if (el[i].innerHTML.includes("undefined")) { el[i].innerHTML = `<p><i>loading data..</i></p>`; }
  }
}

function ytPlayer(nm) {
  let wdth, aspr, ytId;
  switch (nm) {
    case "csm2025":
      wdth = "75rem";
      aspr = "16 / 9";
      ytId = "LLSOjWAf3vA";
      break;
    default: return null;
  }
  document.body.insertAdjacentHTML("afterbegin", `
    <div id="mariaDiag" onclick="mariaDialogClose()">
      <iframe style="width: ${wdth}; aspect-ratio: ${aspr};" src="https://www.youtube-nocookie.com/embed/${ytId}?controls=1&rel=0&showinfo=0&modestbranding=1&playsinline=1" title="YT Player" frameborder="0" allowfullscreen onclick="{ event.stopPropagation(); }"></iframe>
    </div>
  `);
}

function mediaPlay(file) {
  document.querySelector("audio[mediaExec]").src = `https://media.githubusercontent.com/media/VTresMarias/vtresmarias.github.io/refs/heads/vtm-music/${file}.mp3`;
  document.querySelector("audio[mediaExec]").play();
}