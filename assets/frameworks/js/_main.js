// root launch args
function init() {

  // init nextgen loader (the segoeLoaders Project)
  const segoeLdrrrr = document.createElement("script");
  segoeLdrrrr.src = "https://cdn.jsdelivr.net/gh/thebelovedmoon/segoeLoaders@rebuild/assets/js/segoeLoaders.js";
  segoeLdrrrr.type = "text/javascript";
  segoeLdrrrr.onload = () => {
    if (typeof window.segoeLdrs === "function") { window.segoeLdrs(".segLdrTrial"); }
  };
  document.head.appendChild(segoeLdrrrr);

  const finishInit = () => {
    pageInit(); // pageInit() args
    removeSplash();
    cookieDetect();
  };

  // QRCODE GENERATOR, load only if there's data-requiresqr in body
  if (document.body.dataset.requiresqr == "true") {
    const qrRequires = document.createElement("script");
    qrRequires.src = "https://cdn.jsdelivr.net/npm/qrcode_js/qrcode.min.js";
    qrRequires.type = "text/javascript";
    qrRequires.onload = finishInit;
    document.head.appendChild(qrRequires);
    return;
  }

  finishInit();
  
}

function removeSplash() {
  setTimeout(() => {
    document.querySelector("#loaderFade").style.opacity = "0";
    setTimeout(() => {
      document.querySelector("#loaderFade").style.display = "none";
      document.querySelector("#loadBlock").style.height = "0";
      setTimeout(() => { document.querySelector("#loadBlock").remove(); }, 1250);
    }, 1250);
  }, 1250);
}