function ltrInit() {
  let ref = new URLSearchParams(window.location.search).get("ref");
  if (!(!ref)) { ajxLdr(ref); } else { window.location.replace("/?vtm=letter"); }
}

function ajxLdr(r) {

  // related code: https://www.w3schools.com/js/js_ajax_intro.asp 
  let ajx = new XMLHttpRequest();
  ajx.onload = function() { document.getElementById("articlTxt").innerHTML = this.responseText; }
  ajx.open("GET", `/assets/text/letter/${r}.txt`);
  ajx.send();

  let y = r.substring(0, 4),
    m = r.substring(4, 6),
    d = r.substring(6, 8),
    mD = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  switch (r) {
    case "20241227": return document.title = `celebrating our 2nd Anniversary as Marias🍃🪷🌸 — ${d.replace(/^0+/, "")} ${mD[m - 1]} ${y}`;
    case "20240128": return document.title = `💗the Third Maria will always stay with us forever.🌸 — ${d.replace(/^0+/, "")} ${mD[m - 1]} ${y}`;
    case "20231231": return document.title = `Happy 1st Anniversary!!🍃🪷🌸 — ${d.replace(/^0+/, "")} ${mD[m - 1]} ${y}`;
    default: return window.location.replace("/?vtm=letter");
  } 

}