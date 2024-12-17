function pressInit() {

  var ref = new URLSearchParams(window.location.search).get("ref");

  if (ref !== null) {
    loadAjax(ref);
  } else {
    window.location.replace("/?vtm=press");
  }

}

function loadAjax(r) {

  let y = r.substring(0, 4),
    m = r.substring(4, 6),
    d = r.substring(6, 8),
    mD = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  switch(r) {
    case "20241227":
      document.title = "VTresMarias debuts its improved look to celebrate its 2nd Anniversary — " + d.replace(/^0+/, "") + " " +  mD[m - 1] + " " + y;
      break;
    case "20241210":
      document.title = "VTresMarias announces first-ever Fortification of Blessing for Organization \"Samahan ng Puso\" — " + d.replace(/^0+/, "") + " " +  mD[m - 1] + " " + y;
      break;
    case "20231231":
      window.location.replace("https://mamanyosquad.github.io/blog/20231231");
      break;
    default:
      window.location.replace("/?vtm=press");
      break;
  }

  // related code: https://www.w3schools.com/js/js_ajax_intro.asp 
  const ajaxLoad = new XMLHttpRequest();
  ajaxLoad.onload = function() {
    document.getElementById("articlTxt").innerHTML = this.responseText;
  }
  ajaxLoad.open("GET", "/assets/text/press/" + r + ".txt");
  ajaxLoad.send(); 

}