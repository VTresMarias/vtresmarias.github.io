function pressInit() {
  let ref = new URLSearchParams(window.location.search).get("ref");
  if (!(!ref)) { ajxLdr(ref); } else { window.location.replace("/?vtm=press"); }
}

function ajxLdr(r) {

  // related code: https://www.w3schools.com/js/js_ajax_intro.asp 
  let ajx = new XMLHttpRequest();
  ajx.onload = function() { document.querySelector("#articlTxt").innerHTML = this.responseText; }
  ajx.open("GET", `/assets/ajx/press/${r}.txt`);
  ajx.send();

  let y = r.substring(0, 4),
    m = r.substring(4, 6),
    d = r.substring(6, 8),
    mD = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  switch (r) {
    // 2026
    case "20260426":
      document.title = `rebutting all the allegations in relation to the recent cosplay visit \u2014 ${d.replace(/^0+/, "")} ${mD[m - 1]} ${y}`;
      document.querySelector("meta[name='og:title']").setAttribute("content", `rebutting all the allegations in relation to the recent cosplay visit \u2014 ${d.replace(/^0+/, "")} ${mD[m - 1]} ${y}`);
      document.querySelector("meta[name='og:image']").setAttribute("content", "https://vtresmarias.github.io/assets/images/backgrounds/vtm_bg_3.png");
      document.querySelector("meta[name='og:url']").setAttribute("content", `https://vtresmarias.github.io/press?ref=${r}`);
      document.querySelector("meta[name='og:description']").setAttribute("content", `VTresMarias has been informed of a potential controversy involving the so-called "allegations" made against the First Maria🍃 in relation to her recent cosplay involvement. she is strongly rebutting those assertions.`);
      return r;
    // 2025
    case "20250610":
      document.title = `AN URGENT CALL: hold the Trump Administration accountable on ALL GROUNDS \u2014 ${d.replace(/^0+/, "")} ${mD[m - 1]} ${y}`;
      document.querySelector("meta[name='og:title']").setAttribute("content", `AN URGENT CALL: hold the Trump Administration accountable on ALL GROUNDS \u2014 ${d.replace(/^0+/, "")} ${mD[m - 1]} ${y}`);
      document.querySelector("meta[name='og:image']").setAttribute("content", "https://vtresmarias.github.io/assets/images/backgrounds/vtm_bg_3.png");
      document.querySelector("meta[name='og:url']").setAttribute("content", `https://vtresmarias.github.io/press?ref=${r}`);
      document.querySelector("meta[name='og:description']").setAttribute("content", `VTresMarias -- along with other related organizations -- has officially denounced US President Donald J. Trump due to his contributions and role in shattering the country's democracy -- as well as his antics against Members of the Press.`);
      return r;
    case "20250605":
      document.title = `uplifting the Marias' Core Values through cosplay \u2014 ${d.replace(/^0+/, "")} ${mD[m - 1]} ${y}`;
      document.querySelector("meta[name='og:title']").setAttribute("content", `uplifting the Marias' Core Values through cosplay \u2014 ${d.replace(/^0+/, "")} ${mD[m - 1]} ${y}`);
      document.querySelector("meta[name='og:image']").setAttribute("content", "https://vtresmarias.github.io/assets/images/backgrounds/vtm_bg_3.png");
      document.querySelector("meta[name='og:url']").setAttribute("content", `https://vtresmarias.github.io/press?ref=${r}`);
      document.querySelector("meta[name='og:description']").setAttribute("content", `two more organizations are set to receive the "Certificate of Blessing" in light of the First Maria🍃's observations during cosplay conventions.`);
      return r;
    case "20250312":
      document.title = `statement on the First Maria🍃's condition regarding an unfortunate event \u2014 ${d.replace(/^0+/, "")} ${mD[m - 1]} ${y}`;
      document.querySelector("meta[name='og:title']").setAttribute("content", `statement on the First Maria🍃's condition regarding an unfortunate event \u2014 ${d.replace(/^0+/, "")} ${mD[m - 1]} ${y}`);
      document.querySelector("meta[name='og:image']").setAttribute("content", "https://vtresmarias.github.io/assets/images/backgrounds/vtm_bg_3.png");
      document.querySelector("meta[name='og:url']").setAttribute("content", `https://vtresmarias.github.io/press?ref=${r}`);
      document.querySelector("meta[name='og:description']").setAttribute("content", `the First Maria🍃 has suffered an unfortunate circumstance that almost cost her her own life.`);
      return r;
    // 2024
    case "20241227":
      document.title = `VTresMarias debuts its improved look to celebrate its 2nd Anniversary \u2014 ${d.replace(/^0+/, "")} ${mD[m - 1]} ${y}`;
      document.querySelector("meta[name='og:title']").setAttribute("content", `VTresMarias debuts its improved look to celebrate its 2nd Anniversary \u2014 ${d.replace(/^0+/, "")} ${mD[m - 1]} ${y}`);
      document.querySelector("meta[name='og:image']").setAttribute("content", "https://vtresmarias.github.io/assets/images/backgrounds/vtm_bg_3.png");
      document.querySelector("meta[name='og:url']").setAttribute("content", `https://vtresmarias.github.io/press?ref=${r}`);
      document.querySelector("meta[name='og:description']").setAttribute("content", `the website has been improved in light of the Collective's Second Anniversary.`);
      return r;
    case "20241218":
      document.title = `our stance with involved persons/organizations moving forward \u2014 ${d.replace(/^0+/, "")} ${mD[m - 1]} ${y}`;
      document.querySelector("meta[name='og:title']").setAttribute("content", `our stance with involved persons/organizations moving forward \u2014 ${d.replace(/^0+/, "")} ${mD[m - 1]} ${y}`);
      document.querySelector("meta[name='og:image']").setAttribute("content", "https://vtresmarias.github.io/assets/images/backgrounds/vtm_bg_3.png");
      document.querySelector("meta[name='og:url']").setAttribute("content", `https://vtresmarias.github.io/press?ref=${r}`);
      document.querySelector("meta[name='og:description']").setAttribute("content", `VTresMarias has learned that certain people or organizations have been taken advantage of the Marias' kindness for their own collective gain.`);
      return r;
    case "20241210":
      document.title = `VTresMarias announces first-ever Fortification of Blessing for Organization "Samahan ng Puso" \u2014 ${d.replace(/^0+/, "")} ${mD[m - 1]} ${y}`;
      document.querySelector("meta[name='og:title']").setAttribute("content", `VTresMarias announces first-ever Fortification of Blessing for Organization "Samahan ng Puso" \u2014 ${d.replace(/^0+/, "")} ${mD[m - 1]} ${y}`);
      document.querySelector("meta[name='og:image']").setAttribute("content", "https://vtresmarias.github.io/assets/images/backgrounds/vtm_bg_3.png");
      document.querySelector("meta[name='og:url']").setAttribute("content", `https://vtresmarias.github.io/press?ref=${r}`);
      document.querySelector("meta[name='og:description']").setAttribute("content", `Shunni's "Samahan ng Puso" becomes the first organization to receive the Certificate of Blessing from the Marias.`);
      return r;
    // 2023
    case "20231231": return window.location.replace("https://mamanyosquad.github.io/blog?article=20231231");
    default: return window.location.replace("/?vtm=press");
  }

}