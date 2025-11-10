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
    "RECORDS REVOKED"
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
    "RECORDS REVOKED",
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

function showDetails(certRef, certKind, certGrantee, certGrantor, certDate) {

  document.querySelector("#certHTML").innerHTML = `
    <div class="frontText">
      <div>
        <div>
          <h1>certificate details</h1>
          <br>
          <div class="vtmCertQR"></div>
          <canvas></canvas>
          <br><br>
          <p>
            you may save the image for future reference. a physical copy will be sent when
            certain requirements are met.
          </p>
        </div>
      </div>
    </div>
  `;

  function loadFont(fontName, fontUrl) {
  // only works for fonts assigned in /assets/fonts -- everything else
  // must be assigned as <link> in cert.html
  const font = new FontFace(fontName, `url(${fontUrl})`);
  return font.load()
    .then((loadedFont) => {
      document.fonts.add(loadedFont);
      return loadedFont;
    })
    .catch((error) => {
      console.error(`failed to load font "${fontName}" from "${fontUrl}":`, error);
    });
  }

  function VTMorCSM_img(type) {
    switch (type) {
      case "Certificate of Blessing":
        return "VTM";
      case "Certificate of Inauguration":
      case "Certificate of Introduction":
        return "CSM";
      default: event.stopPropagation();
    }
  }

  function VTMorCSM_grantor(type) {
    switch (type) {
      case "Certificate of Blessing":
        return canvas.width / 1.85;
      case "Certificate of Inauguration":
      case "Certificate of Introduction":
        return canvas.width / 1.575;
      default: return event.stopPropagation();
    }
  }

  function VTMorCSM_disp(type) {
    switch (type) {
      case "Certificate of Blessing":
        return `for uplifting the nation through your efforts whilst upholding\nthe Marias' Core Values that reaches beyond borders.\n\nthis certificate was granted on ${certDate}.`;
      case "Certificate of Inauguration":
        return `for her contributions that impact the community as a whole\nand upholding her integrity as a newly-inducted Cosplay Maria.\n\nthis certificate was granted on ${certDate}.`;
      case "Certificate of Introduction":
        return `for showcasing their spirit that upholds the Marias' Core Values\nthrough cosplay and other fields -- indicting as the Apprentice of CSM.\n\nthis certificate was granted on ${certDate}.`;
      default: return event.stopPropagation();
    }
  }

  new QRCode(document.querySelector(".vtmCertQR"), {
    text: `https://vtresmarias.github.io/cert?ref=${certRef}`,
    colorDark: "#3d374c",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  const qrDiv = document.querySelector(".vtmCertQR"),
    qrImage = qrDiv.querySelector("img"),
    canvas = document.querySelector(".frontText > div > div > canvas"),
    ctx = canvas.getContext("2d"),
    imge = new Image();
    
    imge.setAttribute("src", `/assets/images/cert/cert_${VTMorCSM_img(certKind)}.png`);
    
  imge.onload = () => {

    canvas.width = imge.width;
    canvas.height = imge.height;

    ctx.drawImage(imge, 0, 0, canvas.width, canvas.height);

    Promise.all([
      loadFont("Imperial Script", "/assets/fonts/ImperialScript-Regular.ttf"),
      loadFont("Windows 11 Emoji", "/assets/fonts/seguiemj.ttf")
    ]).then(() => {

      ctx.fillStyle = "#3d374c";

      ctx.font = `234pt "Imperial Script"`;
      ctx.textAlign = "center";
      ctx.fillText(certKind, canvas.width / 2, canvas.height / 3.1);

      ctx.font = `156pt "Imperial Script", "Windows 11 Emoji"`;
      ctx.fillText(certGrantee, canvas.width / 2, canvas.height / 1.935);

      ctx.font = `italic 58.5pt "Noto Serif Display", "Windows 11 Emoji"`;
      const text = `${VTMorCSM_disp(certKind)}`,
        lines = text.split("\n"),
        lineHeight = 87.75;
      let y = canvas.height / 1.67;
      lines.forEach((line) => {
        ctx.fillText(line, canvas.width / 2, y);
        y += lineHeight;
      });

      ctx.font = `600 italic 58.5pt "Noto Serif Display", "Windows 11 Emoji"`;
      ctx.fillText(certGrantor, `${VTMorCSM_grantor(certKind)}`, canvas.height / 1.195);

      ctx.strokeStyle = "white";
      ctx.lineWidth = 15;
      ctx.strokeRect(canvas.width / 1.18625 - 7.5, canvas.height / 1.314 - 7.5, 300 + 15, 300 + 15);
      ctx.drawImage(qrImage, canvas.width / 1.18625, canvas.height / 1.314, 300, 300);

    });

  };

  return;

}

function certInvalid(CRN) {
  
  return document.querySelector("#certHTML").innerHTML = `
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
  
  return document.querySelector("#certHTML").innerHTML = `
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