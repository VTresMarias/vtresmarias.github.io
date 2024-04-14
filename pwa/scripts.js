// detect if site is WebApp

const parseQuery = new URLSearchParams(window.location.search); // global value

function isWebApp() {
  const isWebApp = parseQuery.get("isWebApp");
  if (isWebApp == "1") {
    console.log("this is a webapp");
  } else {
    console.log("this is NOT a webapp");
    window.location.replace("/pwa/NotAPWA");
  }
}
// code: https://sitepoint.com/get-url-parameters-with-javascript 


// redirect to sites

function defineMaria() {
  const mariaDef = parseQuery.get("mariaDef");
  if (mariaDef == "1") {
    console.log("First Maria");
    document.getElementById("mariaDeleg").innerHTML = "First Maria🍃";
    document.getElementById("blurStuff").style.filter = "blur(.5em)";
    document.getElementById("AreYouSure").style.display = "block";
    document.getElementById("mariaCont").setAttribute("onclick", "window.open('https://thebelovedmoon.github.io')");
    // setAttribute answer: https://stackoverflow.com/a/4689368 
  } else if (mariaDef == "2") {
    console.log("Second Maria");
    document.getElementById("mariaDeleg").innerHTML = "Second Maria🪷";
    document.getElementById("blurStuff").style.filter = "blur(.5em)";
    document.getElementById("AreYouSure").style.display = "block";
    document.getElementById("mariaCont").setAttribute("onclick", "window.open('https://thebelovedmoon.github.io/auraostara')");
  } else if (mariaDef == "3") {
    console.log("Third Maria");
    document.getElementById("mariaDeleg").innerHTML = "Third Maria🌸";
    document.getElementById("blurStuff").style.filter = "blur(.5em)";
    document.getElementById("AreYouSure").style.display = "block";
    document.getElementById("mariaCont").setAttribute("onclick", "window.open('https://thebelovedmoon.github.io/hinaoujo')");
  } else {
    console.log("undefined");
  }
}


// back to page

function backToPage() {
  document.getElementById("blurStuff").style.filter = "unset";
  document.getElementById("AreYouSure").style.display = "none";
}