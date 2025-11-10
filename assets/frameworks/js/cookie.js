// the functions that you'll be seeing here make use of cookies.

let cookie, leftOff;

// detect cookies
function cookieDetect() {
  cookie = document.cookie.split("; ").find((row) => row.startsWith("acceptCookie="))?.split("=")[1].toString();
  if (cookie.valueOf() == "true") {
    document.querySelector("#cookieConsent").setAttribute("style", "display: none;");
    document.cookie = `acceptCookie=true; path=/; max-age=604800`;
    return;
  } else if (cookie.valueOf() == "false") {
    document.querySelector("#cookieConsent").setAttribute("style", "display: none;");
  }
}

// accept cookies (path set to to "/", resets every week when unvisited)
function cookieAccept() {
  document.cookie = `acceptCookie=true; path=/; max-age=604800`;
  document.querySelector("#cookieConsent").setAttribute("style", "opacity: 0; transform: translateY(7.5rem);");
  setTimeout(() => { document.querySelector("#cookieConsent").setAttribute("style", "display: none;"); }, 750);
}

// decline cookies (prompt will reappear on the next site visit)
function cookieDecline() {
  document.cookie = `acceptCookie=false; path=/;`;
  document.querySelector("#cookieConsent").setAttribute("style", "opacity: 0; transform: translateY(7.5rem);");
  setTimeout(() => { document.querySelector("#cookieConsent").setAttribute("style", "display: none;"); }, 750);
}

// pick up where you left off (resets every week except when updating values)
function pickUpDetect() {
  leftOff = document.cookie.split("; ").find((row) => row.startsWith("storyLeftOff="))?.split("=")[1];
  if (isNaN(parseInt(leftOff)) || leftOff == 0) {
    document.querySelector("#navList").setAttribute("style", "display: inline-block;");
    document.querySelector("#resumeRead").setAttribute("style", "display: none;");
  }
}
function pickUpWhereYouLeftOff() {
  document.querySelector("#navList").setAttribute("style", "display: inline-block;");
  document.querySelector("#resumeRead").setAttribute("style", "display: none;");
  navigateToStory(leftOff);
  storyChap = leftOff;
}
function saveLeftOff(s) { document.cookie = `storyLeftOff=${s}; path=/; max-age=604800`; }