// detect if site is WebApp

const parseQuery = new URLSearchParams(window.location.search);
const isWebApp = parseQuery.get("isWebApp");
if (isWebApp == "1") {
  console.log("this is a webapp");
  defineMaria();
} else {
  // console.log("this is NOT a webapp");
  window.location.replace("NotAPWA");
}
// code: https://sitepoint.com/get-url-parameters-with-javascript 


// redirect to sites

function defineMaria() {
  const mariaDef = parseQuery.get("mariaDef");
  if (mariaDef == "1") {
    console.log("First Maria");
  } else if (mariaDef == "2") {
    console.log("Second Maria");
  } else if (mariaDef == "3") {
    console.log("Third Maria");
  } else {
    console.log("undefined");
  }
}