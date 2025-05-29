// the functions that you'll be seeing here make use of cookies.

let consent, leftOff;

// detect cookies
function cookieDetect() {
  consent = document.cookie.split("; ").find((row) => row.startsWith("acceptCookie="))?.split("=")[1];
  if (Boolean(consent).valueOf() == true) {
    document.getElementById("cookieConsent").setAttribute("style", "display: none;");
    document.cookie = `acceptCookie=${consent}; path=/; max-age=604800`;
  }
}

// accept cookies (path set to to "/", resets every week when unvisited)
function cookieAccept() {
  consent = true;
  document.cookie = `acceptCookie=${consent}; path=/; max-age=604800`;
  document.getElementById("cookieConsent").setAttribute("style", "opacity: 0; transform: translateY(7.5rem);");
  setTimeout(() => {
    document.getElementById("cookieConsent").setAttribute("style", "display: none;");
  }, 750);
}

// decline cookies (prompt will reappear on the next site visit)
function cookieDecline() {
  // consent = false;
  // document.cookie = "acceptCookie=" + consent + "; path=/";
  document.getElementById("cookieConsent").setAttribute("style", "opacity: 0; transform: translateY(7.5rem);");
  setTimeout(() => {
    document.getElementById("cookieConsent").setAttribute("style", "display: none;");
  }, 750);
}

// pick up where you left off (resets every week except when updating values)
function pickUpDetect() {
  leftOff = document.cookie.split("; ").find((row) => row.startsWith("storyLeftOff="))?.split("=")[1];
  if (isNaN(parseInt(leftOff)) || leftOff == 0) {
    document.getElementById("navList").setAttribute("style", "display: inline-block;");
    document.getElementById("resumeRead").setAttribute("style", "display: none;");
  }
}
function pickUpWhereYouLeftOff() {
  document.getElementById("navList").setAttribute("style", "display: inline-block;");
  document.getElementById("resumeRead").setAttribute("style", "display: none;");
  navigateToStory(leftOff);
  storyChap = leftOff;
}
function saveLeftOff(s) {
  document.cookie = `storyLeftOff=${s}; path=/; max-age=604800`;
}