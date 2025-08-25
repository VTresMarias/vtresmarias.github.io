function pressInit() {
  let ref = new URLSearchParams(window.location.search).get("ref");
  if (!(!ref)) { ajxLdr(ref); } else { window.location.replace("/?vtm=press"); }
}

function ajxLdr(r) {

  // related code: https://www.w3schools.com/js/js_ajax_intro.asp 
  let ajx = new XMLHttpRequest();
  ajx.onload = function() { document.getElementById("articlTxt").innerHTML = this.responseText; }
  ajx.open("GET", `/assets/ajx/press/${r}.txt`);
  ajx.send();

  let y = r.substring(0, 4),
    m = r.substring(4, 6),
    d = r.substring(6, 8),
    mD = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  switch (r) {
    case "20250623": return document.title = `inclusivity with Pride: a BPO's recognitional tale — ${d.replace(/^0+/, "")} ${mD[m - 1]} ${y}`;
    case "20250610": return document.title = `AN URGENT CALL: hold the Trump Administration accountable on ALL GROUNDS — ${d.replace(/^0+/, "")} ${mD[m - 1]} ${y}`;
    case "20250605": return document.title = `uplifting the Marias' Core Values through cosplay — ${d.replace(/^0+/, "")} ${mD[m - 1]} ${y}`;
    case "20250312": return document.title = `statement on the First Maria🍃's condition regarding an unfortunate event — ${d.replace(/^0+/, "")} ${mD[m - 1]} ${y}`;
    case "20241227": return document.title = `VTresMarias debuts its improved look to celebrate its 2nd Anniversary — ${d.replace(/^0+/, "")} ${mD[m - 1]} ${y}`;
    case "20241218": return document.title = `our stance with involved persons/organizations moving forward — ${d.replace(/^0+/, "")} ${mD[m - 1]} ${y}`;
    // case "20241210": return document.title = `VTresMarias announces first-ever Fortification of Blessing for Organization "Samahan ng Puso" — ${d.replace(/^0+/, "")} ${mD[m - 1]} ${y}`;
    case "20231231": return window.location.replace("https://mamanyosquad.github.io/blog/20231231");
    default: return window.location.replace("/?vtm=press");
  }

}