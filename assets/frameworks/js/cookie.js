// the functions that you'll be seeing here make use of cookies.

let consent, leftOff;

// detect cookies
function cookieDetect() {
  consent = document.cookie.split("; ").find((row) => row.startsWith("acceptCookie="))?.split("=")[1];
  if (Boolean(consent).valueOf() == true) {
    document.getElementById("cookieConsent").style.display = "none";
    document.cookie = "acceptCookie=" + consent + "; path=/; max-age=604800";
  }
}

// accept cookies (path set to to "/", resets every week when unvisited)
function cookieAccept() {
  consent = true;
  document.cookie = "acceptCookie=" + consent + "; path=/; max-age=604800";
  document.getElementById("cookieConsent").style.opacity = "0";
  document.getElementById("cookieConsent").style.transform = "translateY(7.5rem)";
  setTimeout(() => {
  document.getElementById("cookieConsent").style.display = "none";
  }, 750);
}

// decline cookies (prompt will reappear on the next site visit)
function cookieDecline() {
  // consent = false;
  // document.cookie = "acceptCookie=" + consent + "; path=/";
  document.getElementById("cookieConsent").style.opacity = "0";
  document.getElementById("cookieConsent").style.transform = "translateY(7.5rem)";
  setTimeout(() => {
  document.getElementById("cookieConsent").style.display = "none";
  }, 750);
}

// pick up where you left off (path set to to "/story", resets every week except when updating values)
function pickUpDetect() {
  leftOff = document.cookie.split("; ").find((row) => row.startsWith("storyLeftOff="))?.split("=")[1];
  if (isNaN(parseInt(leftOff))) {
    document.getElementById("navList").style.display = "inline-block";
    document.getElementById("resumeRead").style.display = "none";
  }
}
function pickUpWhereYouLeftOff() {
  num = leftOff;
  document.getElementById("navList").style.display = "inline-block";
  document.getElementById("resumeRead").style.display = "none";
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
function saveLeftOff(s) {
  document.cookie = "storyLeftOff=" + s + "; path=/story; max-age=604800";
}