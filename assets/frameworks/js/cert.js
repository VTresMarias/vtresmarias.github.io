function passCertNum() {
  var r = document.getElementById("vtmInput").value;
  window.location.replace("/cert?ref=" + r);
}

function validateCert() {

  var ref = new URLSearchParams(window.location.search).get("ref");

  if (ref == "VTMCSM000000001") {

    document.getElementById("certHTML").innerHTML = 
    `
    <div class="frontText">
      <div>
        <p>certificate reference number</p>
        <h3>VTMCSM000000001</h3>
        <br><br>
        <p>certificate type</p>
        <h2>Certificate of Blessing</h2>
        <br>
        <p>name of grantee</p>
        <h2>Shunni / Samahan ng Puso</h2>
        <br>
        <p>date granted</p>
        <h3>22 Dec 2024</h3>
        <br>
        <p>name of grantor</p>
        <h3>Mother Agatha, the First Maria🍃</h3>
        <br><br>
        <p>QR code</p>
        <div id="vtmQR"></div>
        <br>
        <p><i>
          QR codes may vary as we depend on different providers, but they output the
          same.
        </i></p>
      </div>
    </div>
    `;

    var qrcode = new QRCode("vtmQR", "https://vtresmarias.github.io/cert?ref=" + ref)

  } else if (ref == "<input stuff here>") {

    // TODO -- replicate this code with ones from VTMCSM000000001

  }

}