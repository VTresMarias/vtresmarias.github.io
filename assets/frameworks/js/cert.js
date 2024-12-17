// global variables
var ref, type, num,
  vCK, vGte, vGto, vDt;
let vtmCertKind = [
    "Certificate of Blessing",
    "Certificate of Inauguration"
  ],
  vtmGrantees = [
    "Aga, the Incumbent First CosMaria",
    "Dani, the Incumbent Second CosMaria",
    "Eri, the Incumbent Third CosMaria",
    "Shunni, the Fourth CosMaria",
    "Patring, the Fifth CosMaria",
    "Shira, the Sixth CosMaria"
  ],
  vtmcsmGrantees = [
    "Shunni / Samahan ng Puso"
  ],
  vtmGrantors = [
    "Mother Agatha, the First Maria🍃",
    "Aura Ostara, the Second Maria🪷",
    "Hina Oujo, the Third Maria🌸"
  ],
  vtmCertDate = [
    "22 Dec 2024",
    "30 Dec 2024"
  ]

function certInit() {
  
  ref = new URLSearchParams(window.location.search).get("ref");

  if (ref == null) {
    // return nothing
  } else {
    c6 = ref.substring(0, 6);
    if (c6 == "VTMCSM") {
      type = c6;
      num = ref.substring(6, 15);
    } else {
      var c3 = ref.substring(0, 3);
      if (c3 == "VTM") {
        type = c3;
        num = ref.substring(3, 12);
      }
    }
  }

  switch(type) {
    case "VTM":
      switch(num) {
        case "000000001":
          vCK = vtmCertKind[1];
          vGte = vtmGrantees[0];
          vGto = vtmGrantors[0];
          vDt = vtmCertDate[1];
          showDetails();
          break;
        case "000000002":
          vCK = vtmCertKind[1];
          vGte = vtmGrantees[1];
          vGto = vtmGrantors[0];
          vDt = vtmCertDate[1];
          showDetails();
          break;
        case "000000003":
          vCK = vtmCertKind[1];
          vGte = vtmGrantees[2];
          vGto = vtmGrantors[0];
          vDt = vtmCertDate[1];
          showDetails();
          break;
        case "000000004":
          vCK = vtmCertKind[1];
          vGte = vtmGrantees[3];
          vGto = vtmGrantors[0];
          vDt = vtmCertDate[1];
          showDetails();
          break;
        case "000000005":
          vCK = vtmCertKind[1];
          vGte = vtmGrantees[4];
          vGto = vtmGrantors[0];
          vDt = vtmCertDate[1];
          showDetails();
          break;
        case "000000006":
          vCK = vtmCertKind[1];
          vGte = vtmGrantees[5];
          vGto = vtmGrantors[0];
          vDt = vtmCertDate[1];
          showDetails();
          break;
        default:
          // return nothing
          break;
      }
      break;
    case "VTMCSM":
      switch(num) {
        case "000000001":
          vCK = vtmCertKind[0];
          vGte = vtmcsmGrantees[0];
          vGto = vtmGrantors[0];
          vDt = vtmCertDate[0];
          showDetails();
          break;
        default:
          // return nothing
          break;
      }
      break;
    default:
      //return nothing
      break;
  }

  

}

function passCertNum() {
  var v = document.getElementById("certInput").value;
  window.location.replace("/cert?ref=" + v);
}

function showDetails() {
  
  document.getElementById("certHTML").innerHTML = 
  `
  <div class="frontText">
    <div>
      <p>certificate reference number</p>
      <h3>` + ref + `</h3>
      <br><br>
      <p>certificate type</p>
      <h2>` + vCK + `</h2>
      <br>
      <p>name of grantee</p>
      <h2>` + vGte + `</h2>
      <br>
      <p>date of grant</p>
      <h3>` + vDt + `</h3>
      <br>
      <p>name of grantor</p>
      <h3>` + vGto + `</h3>
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

  return;

}