// global variables
let ref = new URLSearchParams(window.location.search).get("ref"),
  type,
  vtmCertKind = [
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

  let revokedCerts = [
    "VTMCSM000000010"
  ];

  if (!ref) { return; }
  else if (revokedCerts.includes(ref)) { return certRevoked(ref); }
  else {
    let c6 = ref.substring(0, 6);
    if (c6 == "VTMCSM") {
      type = c6;
      num = ref.substring(6, 15);
    } else {
      let c3 = ref.substring(0, 3);
      if (c3 == "VTM") {
        type = c3;
        num = ref.substring(3, 12);
      }
    }
  }

  switch (type) {
    case "VTM":
      switch (num) {
        case "000000001": return showDetails(ref, vtmCertKind[1], vtmGrantees[0], vtmGrantors[0], vtmCertDate[1]);
        case "000000002": return showDetails(ref, vtmCertKind[1], vtmGrantees[1], vtmGrantors[0], vtmCertDate[1]);
        case "000000003": return showDetails(ref, vtmCertKind[1], vtmGrantees[2], vtmGrantors[0], vtmCertDate[1]);
        case "000000004": return showDetails(ref, vtmCertKind[1], vtmGrantees[3], vtmGrantors[0], vtmCertDate[1]);
        case "000000005": return showDetails(ref, vtmCertKind[1], vtmGrantees[4], vtmGrantors[0], vtmCertDate[1]);
        case "000000006": return showDetails(ref, vtmCertKind[1], vtmGrantees[5], vtmGrantors[0], vtmCertDate[1]);
        case "000000007": return showDetails(ref, vtmCertKind[1], vtmGrantees[6], vtmGrantors[0], vtmCertDate[2]);
        case "000000008": return showDetails(ref, vtmCertKind[1], vtmGrantees[12], vtmGrantors[0], vtmCertDate[5]);
        default: return certInvalid(ref);
      }
    case "VTMCSM":
      switch (num) {
        case "000000001": return showDetails(ref, vtmCertKind[0], vtmcsmGrantees[0], vtmGrantors[0], vtmCertDate[0]);
        case "000000002": return showDetails(ref, vtmCertKind[2], vtmGrantees[7], vtmGrantors[0], vtmCertDate[1]);
        case "000000003": return showDetails(ref, vtmCertKind[2], vtmGrantees[8], vtmGrantors[0], vtmCertDate[1]);
        case "000000004": return showDetails(ref, vtmCertKind[2], vtmGrantees[9], vtmGrantors[0], vtmCertDate[1]);
        case "000000005": return showDetails(ref, vtmCertKind[2], vtmGrantees[10], vtmGrantors[0], vtmCertDate[2]);
        case "000000006": return showDetails(ref, vtmCertKind[2], vtmGrantees[11], vtmGrantors[0], vtmCertDate[2]);
        case "000000007": return showDetails(ref, vtmCertKind[0], vtmcsmGrantees[1], vtmGrantors[0], vtmCertDate[2]);
        case "000000008": return showDetails(ref, vtmCertKind[0], vtmcsmGrantees[2], vtmGrantors[0], vtmCertDate[3]);
        case "000000009": return showDetails(ref, vtmCertKind[0], vtmcsmGrantees[3], vtmGrantors[0], vtmCertDate[3]);
        // case "000000010": return showDetails(ref, vtmCertKind[0], vtmcsmGrantees[4], vtmGrantors[0], vtmCertDate[4]);
        default: return certInvalid(ref);
      }
    default: return certInvalid(ref);
  }

}

function showDetails(certRef, certKind, certGrantee, certDate, certGrantor) {
  
  document.getElementById("certHTML").innerHTML = `
    <div class="frontText">
      <div>
        <div>
          <h1>certificate details</h1>
          <br>
          <p>reference number</p>
          <h3>${certRef}</h3>
          <br><br>
          <p>type</p>
          <h2>${certKind}</h2>
          <br>
          <p>name of Grantee</p>
          <h2>${certGrantee}</h2>
          <br>
          <p>date of grant</p>
          <h3>${certDate}</h3>
          <br>
          <p>name of Grantor</p>
          <h3>${certGrantor}</h3>
          <br><br>
          <p style="margin-bottom: 0.5rem !important;">QR code</p>
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

  new QRCode("vtmQR", `https://vtresmarias.github.io/cert?ref=${ref}`);

  return;

}

function certInvalid(CRN) {
  
  return document.getElementById("certHTML").innerHTML = `
    <div class="frontText">
      <div>
        <div>
          <h2>certificate '${CRN}' is invalid</h2>
          <br>
          <p>the reference number you entered is invalid or unavailable.</p>
          <br>
          <p>
            please confirm the reference number on the physical copy that you have
            received or use the QR code to verify the certificate.
          </p>
        </div>
      </div>
    </div>
  `;
  
}

function certRevoked(CRN) {
  
  return document.getElementById("certHTML").innerHTML = `
    <div class="frontText">
      <div>
        <div>
          <h2>certificate '${CRN}' has been revoked</h2>
          <br>
          <p>
            the reference number associated with the certificate has been revoked
            following thorough decisions from VTresMarias.
          </p>
          <br>
          <p>
            as such, all records associated with this certificate have been purged from
            the system, and all further issuances of this certificate have been
            invalidated.
          </p>
        </div>
      </div>
    </div>
  `;
  
}