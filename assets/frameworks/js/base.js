function navQuery() {
  let vtm = new URLSearchParams(window.location.search).get("vtm"),
    importCSS = css => document.head.appendChild(document.createElement("style")).innerHTML = css; // related answer: https://stackoverflow.com/a/56825511 
    importJS = js => document.head.appendChild(document.createElement("script")).src = js;

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
      importJS(`/assets/frameworks/js/nav/index/`);
      document.querySelector("#vtmLogoHead").src = "/assets/web/maria_story_logo.png";
      createYouTubePlayer("storyEmbed", "yMrf3ZXDgN4", {
        title: "Related ASMR readings",
        playerVars: {
          list: "PLQZt5lx5sFp-gUaNyBG_a0eJZavXjNevX",
          rel: 0,
          playsinline: 1
        }
      });
      return;
    case "music":
      document.title = "the Marias' Discography"
      document.querySelector(`#${vtm}`).setAttribute("style", "display: block;");
      navBtnHide(vtm);
      importCSS(`@import url("/assets/frameworks/css/nav/index/${vtm}.css");`);
      importJS(`/assets/frameworks/js/nav/index/${vtm}.js`);
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
      importJS(`/assets/frameworks/js/nav/index/home.js`);
      return;
  }
}

function panelOpen() { document.querySelector("#mobileNav").setAttribute("style", "transform: initial;"); }
function panelClose() { document.querySelector("#mobileNav").setAttribute("style", "transform: translateY(-15rem);"); }

function navBtnHide(lbl) {
  let format = ["desktop", "mobile"];
  for (let v = 0; v < format.length; v++) { document.querySelector(`#btn-${lbl}-${format[v]}`).setAttribute("style", "display: none;"); }
}