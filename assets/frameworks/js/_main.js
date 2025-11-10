// root launch args
function init() {
  pageInit(); // pageInit() args
  removeSplash();
  cookieDetect();
}

function removeSplash() {
  setTimeout(() => {
    document.querySelector("#loaderFade").setAttribute("style", "opacity: 0;");
    setTimeout(() => {
      document.querySelector("#loaderFade").setAttribute("style", "display: none;");
      document.querySelector("#loadBlock").setAttribute("style", "height: 0;");
    }, 1250);
  }, 1250);
}