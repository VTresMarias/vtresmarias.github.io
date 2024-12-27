// root launch args
function init() {
  pageInit(); // pageInit() args
  removeSplash();
  cookieDetect();
}

function removeSplash() {
  setTimeout(() => {
    document.getElementById("loaderFade").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("loaderFade").style.display = "none";
      document.getElementById("loadBlock").style.height = "0";
    }, 1250);
  }, 1250);
}