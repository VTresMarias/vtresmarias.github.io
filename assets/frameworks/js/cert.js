// global variables
var ref, type, num,
  vCK, vGte, vGto, vDt;
let vtmCertKind = [
    "Certificate of Blessing",
    "Certificate of Inauguration",
    "Certificate of Introduction"
  ],
  vtmGrantees = [
    "Aga, the Incumbent First CosMaria🍃💐",
    "Dani, the Incumbent Second CosMaria🪷💐",
    "Eri, the Incumbent Third CosMaria🌸💐",
    "Shunni, the Fourth CosMaria💐",
    "Patring, the Fifth CosMaria💐",
    "Shira, the Sixth CosMaria💐",
    "Elle, the Seventh CosMaria💐",
    "Issa, Apprentice to the CosMarias",
    "Gravity B., Apprentice to the CosMarias",
    "Shichide, Apprentice to the CosMarias",
    "Seushi, Apprentice to the CosMarias",
    "Sonica, Apprentice to the CosMarias",
    "Tris, the Eighth CosMaria💐"
  ],
  vtmcsmGrantees = [
    "Shunni / Samahan ng Puso",
    "VOLs Production",
    "Connxt: Anime Popculture Event × Arterion Philippines",
    "Bataan Anime Convention (BACon)",
    "Concentrix CVG Philippines, Inc."
  ],
  vtmGrantors = [
    "Mother Agatha, the First Maria🍃",
    "Aura Ostara, the Second Maria🪷",
    "Hina Oujo, the Third Maria🌸"
  ],
  vtmCertDate = [
    "22 Dec 2024",
    "30 Dec 2024",
    "15 Mar 2025",
    "8 Jun 2025",
    "23 Jun 2025",
    "30 Jun 2025"
  ]

function certInit() {
  
  ref = new URLSearchParams(window.location.search).get("ref");

  if (ref == null) {
    // return nothing
  } else {
    var c6 = ref.substring(0, 6);
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
          return;
        case "000000002":
          vCK = vtmCertKind[1];
          vGte = vtmGrantees[1];
          vGto = vtmGrantors[0];
          vDt = vtmCertDate[1];
          showDetails();
          return;
        case "000000003":
          vCK = vtmCertKind[1];
          vGte = vtmGrantees[2];
          vGto = vtmGrantors[0];
          vDt = vtmCertDate[1];
          showDetails();
          return;
        case "000000004":
          vCK = vtmCertKind[1];
          vGte = vtmGrantees[3];
          vGto = vtmGrantors[0];
          vDt = vtmCertDate[1];
          showDetails();
          return;
        case "000000005":
          vCK = vtmCertKind[1];
          vGte = vtmGrantees[4];
          vGto = vtmGrantors[0];
          vDt = vtmCertDate[1];
          showDetails();
          return;
        case "000000006":
          vCK = vtmCertKind[1];
          vGte = vtmGrantees[5];
          vGto = vtmGrantors[0];
          vDt = vtmCertDate[1];
          showDetails();
          return;
        case "000000007":
          vCK = vtmCertKind[1];
          vGte = vtmGrantees[6];
          vGto = vtmGrantors[0];
          vDt = vtmCertDate[2];
          showDetails();
          return;
        case "000000008":
          vCK = vtmCertKind[1];
          vGte = vtmGrantees[12];
          vGto = vtmGrantors[0];
          vDt = vtmCertDate[5];
          showDetails();
          return;
        default:
          // return nothing
          return;
      }
    case "VTMCSM":
      switch(num) {
        case "000000001":
          vCK = vtmCertKind[0];
          vGte = vtmcsmGrantees[0];
          vGto = vtmGrantors[0];
          vDt = vtmCertDate[0];
          showDetails();
          return;
        case "000000002":
          vCK = vtmCertKind[2];
          vGte = vtmGrantees[7];
          vGto = vtmGrantors[0];
          vDt = vtmCertDate[1];
          showDetails();
          return;
        case "000000003":
          vCK = vtmCertKind[2];
          vGte = vtmGrantees[8];
          vGto = vtmGrantors[0];
          vDt = vtmCertDate[1];
          showDetails();
          return;
        case "000000004":
          vCK = vtmCertKind[2];
          vGte = vtmGrantees[9];
          vGto = vtmGrantors[0];
          vDt = vtmCertDate[1];
          showDetails();
          return;
        case "000000005":
          vCK = vtmCertKind[2];
          vGte = vtmGrantees[10];
          vGto = vtmGrantors[0];
          vDt = vtmCertDate[2];
          showDetails();
          return;
        case "000000006":
          vCK = vtmCertKind[2];
          vGte = vtmGrantees[11];
          vGto = vtmGrantors[0];
          vDt = vtmCertDate[2];
          showDetails();
          return;
        case "000000007":
          vCK = vtmCertKind[0];
          vGte = vtmcsmGrantees[1];
          vGto = vtmGrantors[0];
          vDt = vtmCertDate[2];
          showDetails();
          return;
        case "000000008":
          vCK = vtmCertKind[0];
          vGte = vtmcsmGrantees[2];
          vGto = vtmGrantors[0];
          vDt = vtmCertDate[3];
          showDetails();
          return;
        case "000000009":
          vCK = vtmCertKind[0];
          vGte = vtmcsmGrantees[3];
          vGto = vtmGrantors[0];
          vDt = vtmCertDate[3];
          showDetails();
          return;
        case "000000010":
          vCK = vtmCertKind[0];
          vGte = vtmcsmGrantees[4];
          vGto = vtmGrantors[0];
          vDt = vtmCertDate[4];
          showDetails();
          return;
        default:
          // return nothing
          return;
      }
    default:
      // return nothing
      return;
  }

}

function passCertNum() {
  var v = document.getElementById("certInput").value;
  window.location.replace(`/cert?ref=${v}`);
}

function showDetails() {
  
  document.getElementById("certHTML").innerHTML = 
  `
  <div class="frontText">
    <div>
      <div>
        <p>certificate reference number</p>
        <h3>${ref}</h3>
        <br><br>
        <p>certificate type</p>
        <h2>${vCK}</h2>
        <br>
        <p>name of Grantee</p>
        <h2>${vGte}</h2>
        <br>
        <p>date of grant</p>
        <h3>${vDt}</h3>
        <br>
        <p>name of Grantor</p>
        <h3>${vGto}</h3>
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
  </div>
  `;

  new QRCode("vtmQR", `https://vtresmarias.github.io/cert?ref=${ref}`)

  return;

}