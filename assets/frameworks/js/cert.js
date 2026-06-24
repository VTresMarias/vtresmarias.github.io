// global variables
let ref = new URLSearchParams(window.location.search).get("ref");

function certInit() {

  if (!ref) { return; }
  else {
    let c6 = ref.substring(0, 6);
    if (c6.includes("VTMCSM") || c6.includes("CSMBCN")) {
      type = c6;
      num = ref.substring(6, 15);
    } else {
      let c3 = ref.substring(0, 3);
      if (c3.includes("VTM")) {
        type = c3;
        num = ref.substring(3, 12);
      }
    }
  }

  switch (type) {
    case "VTM":
      switch (num) {
        case "000000001": return showDetails(
          ref,
          "Certificate of Inauguration",
          "Aga, the Incumbent First CosMaria🍃💐",
          "Mother Agatha, the First Maria🍃",
          "30 Dec 2024"
        );
        case "000000002": return showDetails(
          ref,
          "Certificate of Inauguration",
          "Dani, the Incumbent Second CosMaria🪷💐",
          "Mother Agatha, the First Maria🍃",
          "30 Dec 2024"
        );
        case "000000003": return showDetails(
          ref,
          "Certificate of Inauguration",
          "Eri, the Incumbent Third CosMaria🌸💐",
          "Mother Agatha, the First Maria🍃",
          "30 Dec 2024"
        );
        case "000000004": return showDetails(
          ref,
          "Certificate of Inauguration",
          "Shunni, the Fourth CosMaria💐",
          "Mother Agatha, the First Maria🍃",
          "30 Dec 2024"
        );
        case "000000005": return showDetails(
          ref,
          "Certificate of Inauguration",
          "Patring, the Fifth CosMaria💐",
          "Mother Agatha, the First Maria🍃",
          "30 Dec 2024"
        );
        case "000000006": return showDetails(
          ref,
          "Certificate of Inauguration",
          "Shira, the Sixth CosMaria💐",
          "Mother Agatha, the First Maria🍃",
          "30 Dec 2024"
        );
        case "000000007": return showDetails(
          ref,
          "Certificate of Inauguration",
          "Elle, the Seventh CosMaria💐",
          "Mother Agatha, the First Maria🍃",
          "15 Mar 2025"
        );
        case "000000008": return showDetails(
          ref,
          "Certificate of Inauguration",
          "Tris, the Eighth CosMaria💐",
          "Mother Agatha, the First Maria🍃",
          "30 Jun 2025"
        );
        case "000000009": return showDetails(
          ref,
          "Certificate of Inauguration",
          "Seushi, the Ninth CosMaria💐",
          "Mother Agatha, the First Maria🍃",
          "15 Mar 2026"
        );
        case "000000010": return showDetails(
          ref,
          "Certificate of Inauguration",
          "Issa, the Tenth CosMaria💐",
          "Mother Agatha, the First Maria🍃",
          "15 Mar 2026"
        );
        case "000000011": return showDetails(
          ref,
          "Certificate of Inauguration",
          "Divi, the Eleventh CosMaria💐",
          "Mother Agatha, the First Maria🍃",
          "15 Mar 2026"
        );
        default: return certInvalid(ref);
      }
    case "VTMCSM":
      switch (num) {
        case "000000001": return showDetails(
          ref,
          "Certificate of Blessing",
          "Shunni / Samahan ng Puso",
          "Mother Agatha, the First Maria🍃",
          "22 Dec 2024"
        );
        case "000000002": return window.location.replace("/cert?ref=VTM000000010");
        case "000000003": return showDetails(
          ref,
          "Certificate of Introduction",
          "Gravity B., Apprentice to the CosMarias",
          "Mother Agatha, the First Maria🍃",
          "30 Dec 2024"
        );
        case "000000004": return showDetails(
          ref,
          "Certificate of Introduction",
          "Shichide, Apprentice to the CosMarias",
          "Mother Agatha, the First Maria🍃",
          "30 Dec 2024"
        );
        case "000000005": return window.location.replace("/cert?ref=VTM000000009");
        case "000000006": return window.location.replace("/cert?ref=VTMCSM000000012");
        case "000000007": return showDetails(
          ref,
          "Certificate of Blessing",
          "VOLs Production",
          "Mother Agatha, the First Maria🍃",
          "15 Mar 2025"
        );
        case "000000008": return showDetails(
          ref,
          "Certificate of Blessing",
          "Connxt: Anime Popculture Event × Arterion Philippines",
          "Mother Agatha, the First Maria🍃",
          "8 Jun 2025"
        );
        case "000000009": return showDetails(
          ref,
          "Certificate of Blessing",
          "Bataan Anime Convention (BACon)",
          "Mother Agatha, the First Maria🍃",
          "8 Jun 2025"
        );
        case "000000010": return certRevoked(ref);
        case "000000011": return showDetails(
          ref,
          "Certificate of Ascension",
          "Lia B., Mistress of CosMarias👙",
          "Mother Agatha, the First Maria🍃",
          "30 Dec 2025"
        );
        case "000000012": return showDetails(
          ref,
          "Certificate of Ascension",
          "Sonica, Mistress of CosMarias👙",
          "Mother Agatha, the First Maria🍃",
          "30 Dec 2025"
        );
        case "000000013": return showDetails(
          ref,
          "Certificate of Introduction",
          "Jaja, Apprentice to the CosMarias",
          "Mother Agatha, the First Maria🍃",
          "30 Dec 2025"
        );
        case "000000014": return showDetails(
          ref,
          "Certificate of Introduction",
          "Cess, Apprentice to the CosMarias",
          "Mother Agatha, the First Maria🍃",
          "30 Dec 2025"
        );
        case "000000015": return showDetails(
          ref,
          "Certificate of Introduction",
          "Kitz, Apprentice to the CosMarias",
          "Mother Agatha, the First Maria🍃",
          "30 Dec 2025"
        );
        case "000000016": return showDetails(
          ref,
          "Certificate of Introduction",
          "Zume, Apprentice to the CosMarias",
          "Mother Agatha, the First Maria🍃",
          "30 Dec 2025"
        );
        case "000000017": return showDetails(
          ref,
          "Certificate of Introduction",
          "Menako, Apprentice to the CosMarias",
          "Mother Agatha, the First Maria🍃",
          "30 Dec 2025"
        );
        case "000000018": return showDetails(
          ref,
          "Certificate of Introduction",
          "Hanako, Apprentice to the CosMarias",
          "Mother Agatha, the First Maria🍃",
          "30 Dec 2025"
        );
        case "000000019": return showDetails(
          ref,
          "Certificate of Introduction",
          "Cleo M., Apprentice to the CosMarias",
          "Mother Agatha, the First Maria🍃",
          "30 Dec 2025"
        );
        case "000000020": return showDetails(
          ref,
          "Certificate of Introduction",
          "Lusherina, Apprentice to the CosMarias",
          "Mother Agatha, the First Maria🍃",
          "30 Dec 2025"
        );
        // case "000000021": return showDetails(
        //   ref,
        //   "Certificate of Introduction",
        //   "Teelo, Apprentice to the CosMarias",
        //   "Mother Agatha, the First Maria🍃",
        //   "30 Dec 2026"
        // );
        default: return certInvalid(ref);
      }
    case "CSMBCN":
      switch (num) {
        case "000000001": return showDetails(
          ref,
          "Certificate of Baconette's Blessing",
          "Shunni, the Fourth CosMaria💐",
          "Mother Agatha, the First Maria🍃",
          "4 Jan 2026"
        );
        case "000000002": return showDetails(
          ref,
          "Certificate of Baconette's Blessing",
          "Shira, the Sixth CosMaria💐",
          "Mother Agatha, the First Maria🍃",
          "4 Jan 2026"
        );
        default: return certInvalid(ref);
      }
    default:
      switch (ref) {
        // only for non-VTM/CSM certificates
        default: return certInvalid(ref);
      }
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
      case "Certificate of Ascension":
        return "CSM";
      case "Certificate of Baconette's Blessing":
        return "CSMBCN";
      default: event.stopPropagation();
    }
  }

  function VTMorCSM_grantor(type) {
    switch (type) {
      case "Certificate of Blessing":
        return canvas.width / 1.85;
      case "Certificate of Inauguration":
      case "Certificate of Introduction":
      case "Certificate of Ascension":
      case "Certificate of Baconette's Blessing":
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
        return `for showcasing their spirit that upholds the Marias' Core Values\nthrough cosplay and other fields -- inducting as the Apprentice of CSM.\n\nthis certificate was granted on ${certDate}.`;
      case "Certificate of Ascension":
        return `for displaying their utmost dedication and love for cosplay that\nhas led to their ascension as part of one of the sub-units of CSM.\n\nthis certificate was granted on ${certDate}.`;
      case "Certificate of Baconette's Blessing":
        return `for exerting their ways of cosplay that outline with BACon's Core\nValues -- leading to their representation as "Baconette".\n\nthis certificate was granted on ${certDate}.`;
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

      if (certKind == "Certificate of Baconette's Blessing") {
        ctx.fillStyle = "#ffffff";
      } else { ctx.fillStyle = "#3d374c"; }

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

      ctx.strokeStyle = "#ffffff";
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