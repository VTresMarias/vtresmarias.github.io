function ltrInit() {

  var ref = new URLSearchParams(window.location.search).get("ref");

  if (ref !== null) {
    loadAjax(ref);
  } else {
    window.location.replace("/?vtm=letter");
  }

}

function loadAjax(r) {

  let y = r.substring(0, 4),
    m = r.substring(4, 6),
    d = r.substring(6, 8),
    mD = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  switch(r) {
    case "20240128":
      document.title = "💗the Third Maria will always stay with us forever.🌸 — " + d.replace(/^0+/, "") + " " +  mD[m - 1] + " " + y;
      break;
    case "20231231":
      document.title = "Happy 1st Anniversary!!🍃🪷🌸 — " + d.replace(/^0+/, "") + " " +  mD[m - 1] + " " + y;
      break;
    default:
      window.location.replace("/?vtm=letter");
      break;
  }

  // related code: https://www.w3schools.com/js/js_ajax_intro.asp 
  const ajaxLoad = new XMLHttpRequest();
  ajaxLoad.onload = function() {
    document.getElementById("articlTxt").innerHTML = this.responseText;
  }
  ajaxLoad.open("GET", "/assets/text/letter/" + r + ".txt");
  ajaxLoad.send(); 

}