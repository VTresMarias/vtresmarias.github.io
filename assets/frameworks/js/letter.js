function ltrInit() {
  let ref = new URLSearchParams(window.location.search).get("ref");
  if (!(!ref)) { ajxLdr(ref); } else { window.location.replace("/?vtm=letter"); }
}

function ajxLdr(r) {

  // related code: https://www.w3schools.com/js/js_ajax_intro.asp 
  let ajx = new XMLHttpRequest();
  ajx.onload = function() { document.querySelector("#articlTxt").innerHTML = this.responseText; }
  ajx.open("GET", `/assets/ajx/letter/${r}.txt`);
  ajx.send();

  let y = r.substring(0, 4),
    m = r.substring(4, 6),
    d = r.substring(6, 8),
    mD = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  switch (r) {
    case "20260109":
      document.title = `in solidarity with Bataan Anime Convention.🧡💐 \u2014 ${d.replace(/^0+/, "")} ${mD[m - 1]} ${y}`;
      document.querySelector("meta[name='og:title']").setAttribute("content", `in solidarity with Bataan Anime Convention. \u2014 ${d.replace(/^0+/, "")} ${mD[m - 1]} ${y}`);
      document.querySelector("meta[name='og:image']").setAttribute("content", "https://vtresmarias.github.io/assets/images/backgrounds/vtm_bg_3.png");
      document.querySelector("meta[name='og:url']").setAttribute("content", `https://vtresmarias.github.io/letter?ref=${r}`);
      document.querySelector("meta[name='og:description']").setAttribute("content", "the First Maria🍃 -- on behalf of VTM and CSM -- stands in solidarity with Bataan Anime Convention (BACon) following their executive decision amid the major mishaps that occurred within the community.🧡💐");
      return r;
    case "20250827":
      document.title = `I don't wanna hear your excuses. \u2014 ${d.replace(/^0+/, "")} ${mD[m - 1]} ${y}`;
      document.querySelector("meta[name='og:title']").setAttribute("content", `I don't wanna hear your excuses. \u2014 ${d.replace(/^0+/, "")} ${mD[m - 1]} ${y}`);
      document.querySelector("meta[name='og:image']").setAttribute("content", "https://vtresmarias.github.io/assets/images/backgrounds/vtm_bg_3.png");
      document.querySelector("meta[name='og:url']").setAttribute("content", `https://vtresmarias.github.io/letter?ref=${r}`);
      document.querySelector("meta[name='og:description']").setAttribute("content", "in light of the IDF's bombing of a Gazan hospital at Khan Yunis -- which claimed the lives of 5 journalists -- the First Maria🍃 publishes her open letter to Israel's Benjamin Netanyahu demanding a full acknowledgement of his contributions to the the Israel-Gaza War.");
      return r;
    case "20241227":
      document.title = `celebrating our 2nd Anniversary as Marias🍃🪷🌸 \u2014 ${d.replace(/^0+/, "")} ${mD[m - 1]} ${y}`;
      document.querySelector("meta[name='og:title']").setAttribute("content", `celebrating our 2nd Anniversary as Marias🍃🪷🌸 \u2014 ${d.replace(/^0+/, "")} ${mD[m - 1]} ${y}`);
      document.querySelector("meta[name='og:image']").setAttribute("content", "https://vtresmarias.github.io/assets/images/backgrounds/vtm_bg_3.png");
      document.querySelector("meta[name='og:url']").setAttribute("content", `https://vtresmarias.github.io/letter?ref=${r}`);
      document.querySelector("meta[name='og:description']").setAttribute("content", "in light of the VTuber Collective's 2nd year, the First Maria🍃 sends an annual regards to the rest of the Marias.");
      return r;
    case "20240128":
      document.title = `💗the Third Maria will always stay with us forever.🌸 \u2014 ${d.replace(/^0+/, "")} ${mD[m - 1]} ${y}`;
      document.querySelector("meta[name='og:title']").setAttribute("content", `💗the Third Maria will always stay with us forever.🌸 \u2014 ${d.replace(/^0+/, "")} ${mD[m - 1]} ${y}`);
      document.querySelector("meta[name='og:image']").setAttribute("content", "https://vtresmarias.github.io/assets/images/backgrounds/vtm_bg_3.png");
      document.querySelector("meta[name='og:url']").setAttribute("content", `https://vtresmarias.github.io/letter?ref=${r}`);
      document.querySelector("meta[name='og:description']").setAttribute("content", "the First Maria🍃 publishes an open letter to the Third Maria🌸 in light of her full retirement as a vtuber to aid in her recovery.");
      return r;
    case "20231231":
      document.title = `Happy 1st Anniversary!!🍃🪷🌸 \u2014 ${d.replace(/^0+/, "")} ${mD[m - 1]} ${y}`;
      document.querySelector("meta[name='og:title']").setAttribute("content", `Happy 1st Anniversary!!🍃🪷🌸 \u2014 ${d.replace(/^0+/, "")} ${mD[m - 1]} ${y}`);
      document.querySelector("meta[name='og:image']").setAttribute("content", "https://vtresmarias.github.io/assets/images/backgrounds/vtm_bg_3.png");
      document.querySelector("meta[name='og:url']").setAttribute("content", `https://vtresmarias.github.io/letter?ref=${r}`);
      document.querySelector("meta[name='og:description']").setAttribute("content", "the First Maria🍃 celebrates the first year of the VTuber Collective with a special message to the rest of the Marias.");
      return r;
    default: return window.location.replace("/?vtm=letter");
  } 

}