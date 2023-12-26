function lotusLoading() {
  setTimeout(function() {
    document.getElementById("vtmLotus").remove();
    document.getElementById("loading").style.height = "0";
  }, 1000);
}

//code from https://linuxhint.com/change-image-on-hover-in-javascript 
function aura_hover() {
  document.getElementById("aura-hover").src = "https://vtresmarias.github.io/media/svg/vtm_aura_hover.svg";
  document.getElementById("aura-hover").style.transition = "0.5s";
}
function aura_hoverOut() {
  document.getElementById("aura-hover").src = "https://vtresmarias.github.io/media/svg/vtm_aura.svg";
  document.getElementById("aura-hover").style.transition = "0.5s";
}
function aga_hover() {
  document.getElementById("aga-hover").src = "https://vtresmarias.github.io/media/svg/vtm_aga_hover.svg";
  document.getElementById("aga-hover").style.transition = "0.5s";
}
function aga_hoverOut() {
  document.getElementById("aga-hover").src = "https://vtresmarias.github.io/media/svg/vtm_aga.svg";
  document.getElementById("aga-hover").style.transition = "0.5s";
}
function hina_hover() {
  document.getElementById("hina-hover").src = "https://vtresmarias.github.io/media/svg/vtm_hina_hover.svg";
  document.getElementById("hina-hover").style.transition = "0.5s";
}
function hina_hoverOut() {
  document.getElementById("hina-hover").src = "https://vtresmarias.github.io/media/svg/vtm_hina.svg";
  document.getElementById("hina-hover").style.transition = "0.5s";
}

var auraDesc = `
  <h2>我慢 ～Perseverance～</h2>
  <p>
    A period of transformation. Learning from past lives and adapting
    to this life's experiences. Emerge and devote yourself to the
    change.
  </p>
  <p>Tarot card reader: MystearicaVT</p>
  <br>
  <p>click anywhere to dismiss..</p>
`,
agaDesc = `
  <h2>復活 ～Rebirth～</h2>
  <p>
    Keep paving the path that calls to you. Keep moving forward, don't
    turn your back. You have the support and guidance you need. Trust
    the process!
  </p>
  <p>Tarot card reader: MystearicaVT</p>
  <br>
  <p>click anywhere to dismiss..</p>
`,
hinaDesc = `
  <h2>落ち着き ～Stability～</h2>
  <p>
    A moment to reflect on your boundaries, whether they be with friends,
    family, work etc. Check on where you should be saying "No" to
    realign with yourself and energy.
  </p>
  <p>Tarot card reader: MystearicaVT</p>
  <br>
  <p>click anywhere to dismiss..</p>
`;

function showSym(description) {
  document.getElementById("manipulateStuff").style.filter = "blur(5px)";
  document.getElementById("showModal").style.display = "block";
  document.getElementById("textView").innerHTML = description;
}
function exitDialog() {
  document.getElementById("manipulateStuff").style.filter = "none";
  document.getElementById("showModal").style.display = "none";
}