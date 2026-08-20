function panelOpen() { document.querySelector("#mobileNav").setAttribute("style", "transform: initial;"); }
function panelClose() { document.querySelector("#mobileNav").setAttribute("style", "transform: translateY(-15rem);"); }

function csmOpenView(csmIsCustom) {
  document.querySelector(".csmProfileFscr").setAttribute("style", "display: flex;");
  setTimeout(() => {
    document.querySelector(".csmProfileFscr").setAttribute("style", "display: flex; opacity: 1;");
    document.querySelector(".csmPrfDiag").setAttribute("style", "opacity: 1; transform: initial;");
  }, 0);
  if (csmIsCustom === true) {
    document.querySelector(".csmCustom > div").setAttribute("style", "transform: rotateY(360deg); transition: transform 0.75s;");
    setTimeout(() => {
      document.querySelector(".csmCustom > div").setAttribute("style", "transform: none; transition: none;");
      setTimeout(() => {
        document.querySelector(".csmCustom > div").setAttribute("style", "transition: transform 0.75s;");
      }, 0);
    }, 750);
  }
  return;
}

function csmCloseView() {
  document.querySelector(".csmProfileFscr").setAttribute("style", "display: flex; opacity: 0;");
  document.querySelector(".csmPrfDiag").setAttribute("style", "opacity: 0; transform: scale(0.95);");
  setTimeout(() => {
    document.querySelector(".csmProfileFscr").setAttribute("style", "display: none;");
  }, 750);
  return;
}

function csmPrfl(unit, pos, csmNm) {

  switch (unit) {
    case "CosMarias":
      switch (pos) {
        case 1:
          document.querySelector(".csmPrfGridView").innerHTML = `
            <div class="csmPrfGrd1">
              <div>
                <div class="csmCustom"
                  onmouseover="{
                    document.querySelector('.csmCustom > div').setAttribute('style', 'transform: rotateY(-180deg);');
                    document.querySelector('.csmPrfDiag').style.backgroundColor = '#dcc6bb';
                    document.querySelector('.csmPrfDiag').style.color = '#3d374c';
                    document.querySelectorAll('.csmSocials > .bi').forEach(btn => {
                      btn.style.color = '#3d374c';
                      btn.style.transition = '0.75s';
                    });
                    setTimeout(() => {
                      document.querySelectorAll('.csmSocials > .bi').forEach(btn => { btn.style.transition = 'none'; });
                    }, 750);
                    // document.querySelector('.csmCustomFront > img').style.border = '0.5rem solid #3d374c';
                    document.querySelector('.csmCustomFront > img').style.transition = '0.75s';
                    // document.querySelector('.csmCustomBack > img').style.border = '0.5rem solid #3d374c';
                    document.querySelector('.csmCustomBack > img').style.transition = '0.75s';
                  }"
                  onmouseout="{
                    document.querySelector('.csmCustom > div').setAttribute('style', 'transform: none;');
                    document.querySelector('.csmPrfDiag').style.backgroundColor = '#3d374c';
                    document.querySelector('.csmPrfDiag').style.color = '#ffffff';
                    document.querySelectorAll('.csmSocials > .bi').forEach(btn => {
                      btn.style.color = '#ffffff';
                      btn.style.transition = '0.75s';
                    });
                    setTimeout(() => {
                      document.querySelectorAll('.csmSocials > .bi').forEach(btn => { btn.style.transition = 'none'; });
                    }, 750);
                    // document.querySelector('.csmCustomFront > img').style.border = '0.5rem solid #793a80';
                    document.querySelector('.csmCustomFront > img').style.transition = '0.75s';
                    // document.querySelector('.csmCustomBack > img').style.border = '0.5rem solid #793a80';
                    document.querySelector('.csmCustomBack > img').style.transition = '0.75s';
                  }">
                  <div>
                    <div class="csmCustomFront">
                      <img class="csmImg" src="" style="border: 0.5rem solid #793a80;" alt="">
                    </div>
                    <div class="csmCustomBack">
                      <img class="csmImgCust" src="" style="border: 0.5rem solid #793a80;" alt="">
                    </div>
                  </div>
                </div>
                <div style="width: 100%; height: calc(15rem * 0.03125);"></div>
                <h1>Aga</h1>
                <p><b><i>the Incumbent First CosMaria🍃💐</i></b></p>
                <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
                <p><i>inaugurated 30 Dec 2024</i></p>
                <br>
                <div class="csmSocials" AgaChuu>
                  <i class="bi bi-flower1" title="V三人のマリア" onclick="{ window.open('/'); }"></i>
                  <i class="bi bi-globe" title="website" onclick="{ window.open('https://thebelovedmoon.github.io'); }"></i>
                  <i class="bi bi-twitter-x" title="X" onclick="{ window.open('https://x.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-facebook" title="facebook" onclick="{ window.open('https://web.facebook.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-instagram" title="instagram" onclick="{ window.open('https://instagram.com/themoon_follow'); }"></i>
                  <i class="bi bi-threads" title="threads" onclick="{ window.open('https://threads.com/themoon_follow'); }"></i>
                  <i class="bi bi-youtube" title="youtube" onclick="{ window.open('https://youtube.com/@thebelovedmoon'); }"></i>
                  <i class="bi bi-twitch" title="twitch" onclick="{ window.open('https://twitch.tv/thebelovedmoon'); }"></i>
                  <i class="bi bi-tiktok" title="tiktok" onclick="{ window.open('https://tiktok.com/@themoon_follow'); }"></i>
                  <i class="bi bi-reddit" title="reddit" onclick="{ window.open('https://reddit.com/user/thebelovedmoon'); }"></i>
                  <i class="bi bi-soundwave" title="soundcloud" onclick="{ window.open('https://soundcloud.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-github" title="github" onclick="{ window.open('https://github.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-envelope-at-fill" title="email" onclick="{ window.open('mailto:jelsa14018@gmail.com', '_self'); }"></i>
                </div>
              </div>
            </div>
            <div class="csmPrfGrd2">
              <h2>CosMaria Spotlight</h2>
              <span>info as of 15 Mar 2026</span>
              <br>
              <p>
                as the sole founder of the Sub-Collective and bearing the essence of the
                Leaf🍃, Aga -- known primarily as the First Maria🍃 -- hones the executive
                decisions that uphold its legacy at large. her presence became the backbone
                for the entirety of CSM, supporting her Cosplay Sisters behind the scenes.
              </p>
              <br>
              <p>
                recognized for her consistent cosplay as her VTuber self on an annual basis,
                she had set forth to other universes or fanbases to appreciate other
                characters that make their mark -- no matter how antagonistic or unpopular
                they may be.
              </p>
              <div style="width: 100%; height: calc(15rem * 0.3125);"></div>
              <h2>certificate reference</h2>
              <br>
              <div class="csmPrfQR"></div>
              <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
              <p>VTM000000001</p>
            </div>
          `;
          new QRCode(document.querySelector(".csmPrfQR"), {
            text: `https://vtresmarias.github.io/cert?ref=VTM000000001`,
            colorDark: "#3d374c",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
          });
          csmDiagImgLdr(2);
          return csmOpenView(true);
        case 2:
          document.querySelector(".csmPrfGridView").innerHTML = `
            <div class="csmPrfGrd1">
              <div>
                <img class="csmImg" src="" style="border: 0.5rem solid #66a898;" alt="">
                <div style="width: 100%; height: calc(15rem * 0.03125);"></div>
                <h1>Dani</h1>
                <p><b><i>the Incumbent Second CosMaria🪷💐</i></b></p>
                <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
                <p><i>inaugurated 30 Dec 2024</i></p>
                <br>
                <div class="csmSocials" AuraOstara>
                  <i class="bi bi-twitter-x" title="X" onclick="{ window.open('https://x.com/itsdanicxz'); }"></i>
                  <i class="bi bi-facebook" title="facebook" onclick="{ window.open('https://web.facebook.com/itsdanicxz'); }"></i>
                  <i class="bi bi-instagram" title="instagram" onclick="{ window.open('https://instagram.com/itsdanicxz'); }"></i>
                  <i class="bi bi-threads" title="threads" onclick="{ window.open('https://threads.com/itsdanicxz'); }"></i>
                  <i class="bi bi-youtube" title="youtube" onclick="{ window.open('https://youtube.com/@itsdanicxz'); }"></i>
                  <i class="bi bi-twitch" title="twitch" onclick="{ window.open('https://twitch.tv/itsdanicxz'); }"></i>
                  <i class="bi bi-tiktok" title="tiktok" onclick="{ window.open('https://tiktok.com/@itsdanicxz'); }"></i>
                  <i class="bi bi-envelope-at-fill" title="email" onclick="{ window.open('mailto:contact.danicxz@gmail.com', '_self'); }"></i>
                </div>
              </div>
            </div>
            <div class="csmPrfGrd2">
              <h2>CosMaria Spotlight</h2>
              <span>info as of 15 Mar 2026</span>
              <br>
              <p>
                directly supported by the Incumbent First, and bearing the essence of the
                Lotus🪷; Dani has been delving into the ranks of streaming as a way to make
                her mark in the creative industry. bearing both beauty and eagerness, her
                presence became one of the most unforgettable moments for her audience.
              </p>
              <br>
              <p>
                previously logged during her tenure as a cosplayer last 2023, her presence as
                Musashi gave way for CSM to make its mark -- her unwavering vibe has the
                audience yearn for more, way beyond what she can bear.
              </p>
              <div style="width: 100%; height: calc(15rem * 0.3125);"></div>
              <h2>certificate reference</h2>
              <br>
              <div class="csmPrfQR"></div>
              <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
              <p>VTM000000002</p>
            </div>
          `;
          new QRCode(document.querySelector(".csmPrfQR"), {
            text: `https://vtresmarias.github.io/cert?ref=VTM000000002`,
            colorDark: "#3d374c",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
          });
          csmDiagImgLdr();
          return csmOpenView();
        case 3:
          document.querySelector(".csmPrfGridView").innerHTML = `
            <div class="csmPrfGrd1">
              <div>
                <img class="csmImg" src="" style="border: 0.5rem solid #f0a9a9;" alt="">
                <div style="width: 100%; height: calc(15rem * 0.03125);"></div>
                <h1>Eri</h1>
                <p><b><i>the Incumbent Third CosMaria🌸💐</i></b></p>
                <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
                <p><i>inaugurated 30 Dec 2024</i></p>
                <br>
                <div class="csmSocials" HinaOujo>
                  <i class="bi bi-facebook" title="facebook" onclick="{ window.open('https://web.facebook.com/eri.cos.369069'); }"></i>
                  <i class="bi bi-tiktok" title="tiktok" onclick="{ window.open('https://tiktok.com/@ms.eri1433'); }"></i>
                </div>
              </div>
            </div>
            <div class="csmPrfGrd2">
              <h2>CosMaria Spotlight</h2>
              <span>info as of 15 Mar 2026</span>
              <br>
              <p>
                also directly supported by the Incumbent First and bearing the essence of the
                Sakura🌸; Eri bears a significant impact in the lives of not just the
                Incumbents, but the rest of CSM at large. with a heart that continually
                blossoms along her creative effort, she has been using her newfound creative
                skills to inspire the community around her.
              </p>
              <br>
              <p>
                though her presence bearing that of Albedo continues to dwell for years to
                come, handicraft became her newest life-long hobby -- breathing characters
                that she loved to life through her magnificent handiwork like never before.
              </p>
              <div style="width: 100%; height: calc(15rem * 0.3125);"></div>
              <h2>certificate reference</h2>
              <br>
              <div class="csmPrfQR"></div>
              <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
              <p>VTM000000003</p>
            </div>
          `;
          new QRCode(document.querySelector(".csmPrfQR"), {
            text: `https://vtresmarias.github.io/cert?ref=VTM000000003`,
            colorDark: "#3d374c",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
          });
          csmDiagImgLdr();
          return csmOpenView();
        case 4:
          document.querySelector(".csmPrfGridView").innerHTML = `
            <div class="csmPrfGrd1">
              <div>
                <div class="csmCustom"
                  onmouseover="{
                    document.querySelector('.csmCustom > div').setAttribute('style', 'transform: rotateY(-180deg);');
                    document.querySelector('.csmPrfDiag').style.backgroundColor = '#ec4f12';
                  }"
                  onmouseout="{
                    document.querySelector('.csmCustom > div').setAttribute('style', 'transform: none;');
                    document.querySelector('.csmPrfDiag').style.backgroundColor = '#3d374c';
                  }">
                  <div>
                    <div class="csmCustomFront">
                      <img class="csmImg" src="" alt="">
                    </div>
                    <div class="csmCustomBack">
                      <img class="csmImgCust" src="" alt="">
                    </div>
                  </div>
                </div>
                <div style="width: 100%; height: calc(15rem * 0.03125);"></div>
                <h1>Shunni</h1>
                <p><b><i>
                  the Fourth CosMaria💐
                  <br>
                  Batch 1 Inductee
                </i></b></p>
                <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
                <p><i>inaugurated 30 Dec 2024</i></p>
                <br>
                <div class="csmSocials">
                  <i class="bi bi-twitter-x" title="X" onclick="{ window.open('https://x.com/shunnigaming'); }"></i>
                  <i class="bi bi-facebook" title="facebook" onclick="{ window.open('https://web.facebook.com/shunnigaming'); }"></i>
                  <i class="bi bi-instagram" title="instagram" onclick="{ window.open('https://instagram.com/shunnicos'); }"></i>
                  <i class="bi bi-twitch" title="twitch" onclick="{ window.open('https://twitch.tv/shunrayken'); }"></i>
                  <i class="bi bi-reddit" title="reddit" onclick="{ window.open('https://reddit.com/user/shunnicos'); }"></i>
                  <i class="bi bi-envelope-at-fill" title="email" onclick="{ window.open('mailto:shunnicoser@gmail.com', '_self'); }"></i>
                </div>
              </div>
            </div>
            <div class="csmPrfGrd2">
              <h2>CosMaria Spotlight</h2>
              <span>info as of 15 Mar 2026</span>
              <br>
              <p>
                heralded as one of the pinnacles of cosplay in the province of Bataan, Shunni
                remains on par with her unending charm that holds the audience to their feet.
                the presence that radiated within her has become her stronghold in times of
                pressure and uncertainty; given by her commitment to her profession, saving
                precious lives in the process.
              </p>
              <br>
              <p>
                as previously logged, her first stint in charity work has made a lasting
                impact in the community that she supported -- making a mark in the cosplay
                community to give back to their people by doing what they do best.
              </p>
              <br>
              <p>
                adding to her role as the first Baconette of CSM🧡, she became a turning point
                in which Bataan Anime Convention was presented to the cosplay community at
                large.
              </p>
              <div style="width: 100%; height: calc(15rem * 0.3125);"></div>
              <h2>certificate references</h2>
              <br>
              <div class="csmPrfQR1"></div>
              <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
              <p>VTM000000004</p>
              <br>
              <div class="csmPrfQR2"></div>
              <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
              <p>CSMBCN000000001</p>
            </div>
          `;
          new QRCode(document.querySelector(".csmPrfQR1"), {
            text: `https://vtresmarias.github.io/cert?ref=VTM000000004`,
            colorDark: "#3d374c",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
          });
          new QRCode(document.querySelector(".csmPrfQR2"), {
            text: `https://vtresmarias.github.io/cert?ref=CSMBCN000000001`,
            colorDark: "#3d374c",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
          });
          csmDiagImgLdr(1);
          return csmOpenView(true);
        case 5:
          document.querySelector(".csmPrfGridView").innerHTML = `
            <div class="csmPrfGrd1">
              <div>
                <img class="csmImg" src="" alt="">
                <div style="width: 100%; height: calc(15rem * 0.03125);"></div>
                <h1>Patring</h1>
                <p><b><i>
                  the Fifth CosMaria💐
                  <br>
                  Batch 1 Inductee
                </i></b></p>
                <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
                <p><i>inaugurated 30 Dec 2024</i></p>
                <br>
                <div class="csmSocials">
                  <i class="bi bi-facebook" title="facebook" onclick="{ window.open('https://web.facebook.com/people/patring/61558539314578'); }"></i>
                  <i class="bi bi-instagram" title="instagram" onclick="{ window.open('https://instagram.com/patringixxiiiv'); }"></i>
                  <i class="bi bi-tiktok" title="tiktok" onclick="{ window.open('https://tiktok.com/@patringixxiiiv'); }"></i>
                  <i class="bi bi-envelope-at-fill" title="email" onclick="{ window.open('mailto:patringixxiiiv@gmail.com', '_self'); }"></i>
                </div>
              </div>
            </div>
            <div class="csmPrfGrd2">
              <h2>CosMaria Spotlight</h2>
              <span>info as of 15 Mar 2026</span>
              <br>
              <p>
                a shining star in the cosplaying scene, Patring is constantly on a pursuit
                with her unwavering presence that captured the hearts of many. as a result,
                she became a prominent figure across communities due to her straightforward
                approach to handling the challenges she faced along the way.
              </p>
              <br>
              <p>
                as logged during their recent gathering last Sep 2025, she was noted to have a
                neat impression of unparalleled beauty that can only be defined through her
                desire to be the best -- as evident in her representation as HOLOLIVE's
                Hoshimachi Suisei.
              </p>
              <div style="width: 100%; height: calc(15rem * 0.3125);"></div>
              <h2>certificate reference</h2>
              <br>
              <div class="csmPrfQR"></div>
              <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
              <p>VTM000000005</p>
            </div>
          `;
          new QRCode(document.querySelector(".csmPrfQR"), {
            text: `https://vtresmarias.github.io/cert?ref=VTM000000005`,
            colorDark: "#3d374c",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
          });
          csmDiagImgLdr();
          return csmOpenView();
        case 6:
          document.querySelector(".csmPrfGridView").innerHTML = `
            <div class="csmPrfGrd1">
              <div>
                <div class="csmCustom"
                  onmouseover="{
                    document.querySelector('.csmCustom > div').setAttribute('style', 'transform: rotateY(-180deg);');
                    document.querySelector('.csmPrfDiag').style.backgroundColor = '#ec4f12';
                  }"
                  onmouseout="{
                    document.querySelector('.csmCustom > div').setAttribute('style', 'transform: none;');
                    document.querySelector('.csmPrfDiag').style.backgroundColor = '#3d374c';
                  }">
                  <div>
                    <div class="csmCustomFront">
                      <img class="csmImg" src="" alt="">
                    </div>
                    <div class="csmCustomBack">
                      <img class="csmImgCust" src="" alt="">
                    </div>
                  </div>
                </div>
                <div style="width: 100%; height: calc(15rem * 0.03125);"></div>
                <h1>Shira</h1>
                <p><b><i>
                  the Sixth CosMaria💐
                  <br>
                  Batch 1 Inductee
                </i></b></p>
                <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
                <p><i>inaugurated 30 Dec 2024</i></p>
                <br>
                <div class="csmSocials">
                  <i class="bi bi-globe" title="website" onclick="{ window.open('https://shiracoser.carrd.co'); }"></i>
                  <i class="bi bi-twitter-x" title="X" onclick="{ window.open('https://x.com/ShiraHojo'); }"></i>
                  <i class="bi bi-facebook" title="facebook" onclick="{ window.open('https://web.facebook.com/ShiraCoser'); }"></i>
                  <i class="bi bi-instagram" title="instagram" onclick="{ window.open('https://instagram.com/shiracoser'); }"></i>
                  <i class="bi bi-threads" title="threads" onclick="{ window.open('https://threads.com/shiracoser'); }"></i>
                  <i class="bi bi-tiktok" title="tiktok" onclick="{ window.open('https://tiktok.com/@shiracoser'); }"></i>
                  <i class="bi bi-envelope-at-fill" title="email" onclick="{ window.open('mailto:coser.shira@gmail.com', '_self'); }"></i>
                </div>
              </div>
            </div>
            <div class="csmPrfGrd2">
              <h2>CosMaria Spotlight</h2>
              <span>info as of 15 Mar 2026</span>
              <br>
              <p>
                known as a primary focal point for the next generation in the cosplaying
                scene, Shira has experienced it all: from the dynamic appearance of Uta from
                One Piece; to the stunning beauty of Juraria Rexford, the genderbent version
                of HOLOSTARS' Jurard T Rexford -- she has made a momentous impact that has
                seismic effects towards communities she's directly involved in.
              </p>
              <br>
              <p>
                she is also known as one of the Sub-Collective's most proud and joy due to her
                unwavering support towards her Cosplay Sisters, notably towards the Incumbent
                First. as logged during their frequent encounters together, she has resembled
                solemnity and comfort in which she radiated extremely well.
              </p>
              <br>
              <p>
                so much in fact that she was considered by Bataan Anime Convention as the
                overall pick for their 10th Anniversary event -- earning her newest title as
                the second Baconette of CSM🧡.
              </p>
              <div style="width: 100%; height: calc(15rem * 0.3125);"></div>
              <h2>certificate references</h2>
              <br>
              <div class="csmPrfQR1"></div>
              <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
              <p>VTM000000006</p>
              <br>
              <div class="csmPrfQR2"></div>
              <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
              <p>CSMBCN000000002</p>
            </div>
          `;
          new QRCode(document.querySelector(".csmPrfQR1"), {
            text: `https://vtresmarias.github.io/cert?ref=VTM000000006`,
            colorDark: "#3d374c",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
          });
          new QRCode(document.querySelector(".csmPrfQR2"), {
            text: `https://vtresmarias.github.io/cert?ref=CSMBCN000000002`,
            colorDark: "#3d374c",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
          });
          csmDiagImgLdr(1);
          return csmOpenView(true);
        case 7:
          document.querySelector(".csmPrfGridView").innerHTML = `
            <div class="csmPrfGrd1">
              <div>
                <img class="csmImg" src="" alt="">
                <div style="width: 100%; height: calc(15rem * 0.03125);"></div>
                <h1>Elle</h1>
                <p><b><i>
                  the Seventh CosMaria💐
                  <br>
                  Batch 1 Inductee
                </i></b></p>
                <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
                <p><i>inaugurated 15 Mar 2025</i></p>
                <br>
                <div class="csmSocials">
                  <i class="bi bi-facebook" title="facebook" onclick="{ window.open('https://web.facebook.com/carmellabrongan1'); }"></i>
                  <i class="bi bi-instagram" title="instagram" onclick="{ window.open('https://instagram.com/_iamcarmss'); }"></i>
                </div>
              </div>
            </div>
            <div class="csmPrfGrd2">
              <h2>CosMaria Spotlight</h2>
              <span>info as of 15 Mar 2026</span>
              <br>
              <p>
                always supporting her subordinates at work, Elle makes the most of her day
                helping everyone do their best no matter the circumstances that they may bring
                to the table. as a result, she was considered as a "Big Sister" by her peers;
                with a personality that shines above the rest -- putting everyone else at
                ease.
              </p>
              <br>
              <p>
                although there were no current logs at present since she and the Incumbent
                First were separated following her exit from the business industry, she was
                noted to have also pursued her hobby in nail art -- something worth
                commendable in bringing artistry to the table whilst putting the clients'
                minds in a breeze of confidence.
              </p>
              <div style="width: 100%; height: calc(15rem * 0.3125);"></div>
              <h2>certificate reference</h2>
              <br>
              <div class="csmPrfQR"></div>
              <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
              <p>VTM000000007</p>
            </div>
          `;
          new QRCode(document.querySelector(".csmPrfQR"), {
            text: `https://vtresmarias.github.io/cert?ref=VTM000000007`,
            colorDark: "#3d374c",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
          });
          csmDiagImgLdr();
          return csmOpenView();
        case 8:
          document.querySelector(".csmPrfGridView").innerHTML = `
            <div class="csmPrfGrd1">
              <div>
                <img class="csmImg" src="" alt="">
                <div style="width: 100%; height: calc(15rem * 0.03125);"></div>
                <h1>Tris</h1>
                <p><b><i>the Eighth CosMaria💐</i></b></p>
                <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
                <p><i>inaugurated 30 Jun 2025</i></p>
                <br>
                <div class="csmSocials">
                  <i class="bi bi-facebook" title="facebook" onclick="{ window.open('https://web.facebook.com/trisha.oarde'); }"></i>
                </div>
              </div>
            </div>
            <div class="csmPrfGrd2">
              <h2>CosMaria Spotlight</h2>
              <span>info as of 15 Mar 2026</span>
              <br>
              <p>
                also considered as one of the "Big Sisters" by her colleagues, Tris is working
                tirelessly to make sure that the subordinates under her wing are at their best
                at work. in addition, she and Elle have something in common: the confidence to
                remain in their best posture and believing in the same pact as the rest of CSM
                -- to be universally whole against all odds.
              </p>
              <br>
              <p>
                digging through her past records, it was noted that she once was a cosplayer
                before she stepped down to focus on supporting her family, with Rimuru Tempest
                from TenSura being one of the prominent characters during her tenure.
                furthermore, there may be a glimmer of hope for her return to cosplay any time
                soon.
              </p>
              <div style="width: 100%; height: calc(15rem * 0.3125);"></div>
              <h2>certificate reference</h2>
              <br>
              <div class="csmPrfQR"></div>
              <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
              <p>VTM000000008</p>
            </div>
          `;
          new QRCode(document.querySelector(".csmPrfQR"), {
            text: `https://vtresmarias.github.io/cert?ref=VTM000000008`,
            colorDark: "#3d374c",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
          });
          csmDiagImgLdr();
          return csmOpenView();
        case 9:
          document.querySelector(".csmPrfGridView").innerHTML = `
            <div class="csmPrfGrd1">
              <div>
                <img class="csmImg" src="" alt="">
                <div style="width: 100%; height: calc(15rem * 0.03125);"></div>
                <h1>Seushi</h1>
                <p><b><i>the Ninth CosMaria💐</i></b></p>
                <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
                <p><i>inaugurated 15 Mar 2026</i></p>
                <br>
                <div class="csmSocials">
                  <i class="bi bi-globe" title="website" onclick="{ window.open('https://beacons.ai/seushirin'); }"></i>
                  <i class="bi bi-twitter-x" title="X" onclick="{ window.open('https://x.com/seushicahill'); }"></i>
                  <i class="bi bi-facebook" title="facebook" onclick="{ window.open('https://web.facebook.com/seushirin'); }"></i>
                  <i class="bi bi-instagram" title="instagram" onclick="{ window.open('https://instagram.com/seushirin'); }"></i>
                  <i class="bi bi-tiktok" title="tiktok" onclick="{ window.open('https://tiktok.com/@seushirin'); }"></i>
                  <i class="bi bi-envelope-at-fill" title="email" onclick="{ window.open('mailto:seushirin@gmail.com', '_self'); }"></i>
                </div>
              </div>
            </div>
            <div class="csmPrfGrd2">
              <h2>CosMaria Spotlight</h2>
              <span>info as of 15 Mar 2026</span>
              <br>
              <p>
                formerly one of the new faces of the Sub-Collective as Batch 1 Apprentice,
                Seushi combined the eagerness of trying out new things with the smile that
                goes beyond its mark. her way of expressing joy towards the audience remains
                one of the key elements toward her stellar debut as one of the Inductees of
                CSM.
              </p>
              <br>
              <p>
                recent logs have established her initial style of presentation has brought
                great awe upon the audience, as evident through her cosplay as VOLs' Shirousa
                Mikumi -- much to the delight of the Incumbent First.
              </p>
              <div style="width: 100%; height: calc(15rem * 0.3125);"></div>
              <h2>certificate references</h2>
              <br>
              <div class="csmPrfQR1"></div>
              <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
              <p>VTMCSM000000005</p>
              <br>
              <div class="csmPrfQR2"></div>
              <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
              <p>VTM000000009</p>
            </div>
          `;
          new QRCode(document.querySelector(".csmPrfQR1"), {
            text: `https://vtresmarias.github.io/cert?ref=VTMCSM000000005`,
            colorDark: "#3d374c",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
          });
          new QRCode(document.querySelector(".csmPrfQR2"), {
            text: `https://vtresmarias.github.io/cert?ref=VTM000000009`,
            colorDark: "#3d374c",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
          });
          csmDiagImgLdr();
          return csmOpenView();
        case 10:
          document.querySelector(".csmPrfGridView").innerHTML = `
            <div class="csmPrfGrd1">
              <div>
                <img class="csmImg" src="" alt="">
                <div style="width: 100%; height: calc(15rem * 0.03125);"></div>
                <h1>Issa</h1>
                <p><b><i>the Tenth CosMaria💐</i></b></p>
                <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
                <p><i>inaugurated 15 Mar 2026</i></p>
                <br>
                <div class="csmSocials">
                  <i class="bi bi-facebook" title="facebook" onclick="{ window.open('https://web.facebook.com/issaki.kei'); }"></i>
                </div>
              </div>
            </div>
            <div class="csmPrfGrd2">
              <h2>CosMaria Spotlight</h2>
              <span>info as of 15 Mar 2026</span>
              <br>
              <p>
                another initial addition to the Sub-Collective as Batch 1 Apprentice, Issa
                radiated a mix of elements that are unlike any other: peak cuteness and lolita
                fashion. at heart, she is just like the rest of the Sisters -- simple yet
                elegant; bearing the true definition of "beauty comes in all sizes, big or
                small".
              </p>
              <br>
              <p>
                as logged during their occasional encounters, her choice of lolita fashion
                resonated well with her pursuit to uniqueness across all boundaries;
                signifying well with the characters she portrayed along the way, the most
                recent being Danganronpa's Celestia Ludenberg.
              </p>
              <div style="width: 100%; height: calc(15rem * 0.3125);"></div>
              <h2>certificate references</h2>
              <br>
              <div class="csmPrfQR1"></div>
              <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
              <p>VTMCSM000000002</p>
              <br>
              <div class="csmPrfQR2"></div>
              <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
              <p>VTM000000010</p>
            </div>
          `;
          new QRCode(document.querySelector(".csmPrfQR1"), {
            text: `https://vtresmarias.github.io/cert?ref=VTMCSM000000002`,
            colorDark: "#3d374c",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
          });
          new QRCode(document.querySelector(".csmPrfQR2"), {
            text: `https://vtresmarias.github.io/cert?ref=VTM000000010`,
            colorDark: "#3d374c",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
          });
          csmDiagImgLdr();
          return csmOpenView();
        case 11:
          document.querySelector(".csmPrfGridView").innerHTML = `
            <div class="csmPrfGrd1">
              <div>
                <img class="csmImg" src="" alt="">
                <div style="width: 100%; height: calc(15rem * 0.03125);"></div>
                <h1>Divi</h1>
                <p><b><i>the Eleventh CosMaria💐</i></b></p>
                <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
                <p><i>inaugurated 15 Mar 2026</i></p>
                <br>
                <div class="csmSocials">
                  <i class="bi bi-facebook" title="facebook" onclick="{ window.open('https://web.facebook.com/divi.chan.2024'); }"></i>
                </div>
              </div>
            </div>
            <div class="csmPrfGrd2">
              <h2>CosMaria Spotlight</h2>
              <span>info as of 15 Mar 2026</span>
              <br>
              <p>
                as one of the newest members of CSM to be considered as an Inductee; Divi has
                proven, against all odds, to be more than just elegant and unique. her way of
                presenting herself through the characters she loved bore the fruit of her own
                eloquence -- the first of its kind in CSM's history.
              </p>
              <br>
              <p>
                frequent encounters during which the Incumbent First is present shows her
                sincere commitment to her craft, as evident in her latest set of cosplays; the
                most notable being the bride version of One Piece's Boa Hancock.
              </p>
              <div style="width: 100%; height: calc(15rem * 0.3125);"></div>
              <h2>certificate reference</h2>
              <br>
              <div class="csmPrfQR"></div>
              <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
              <p>VTM000000011</p>
            </div>
          `;
          new QRCode(document.querySelector(".csmPrfQR"), {
            text: `https://vtresmarias.github.io/cert?ref=VTM000000011`,
            colorDark: "#3d374c",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
          });
          csmDiagImgLdr();
          return csmOpenView();
        default: return event.stopPropagation();
      }
    case "MistressesOfCSM":
      switch (pos) {
        case 1:
          document.querySelector(".csmPrfGridView").innerHTML = `
            <div class="csmPrfGrd1">
              <div>
                <img class="csmImg" src="" alt="">
                <div style="width: 100%; height: calc(15rem * 0.03125);"></div>
                <h1>Lia B.</h1>
                <p><b><i>Mistress of CSM👙</i></b></p>
                <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
                <p><i>introduced 30 Dec 2025</i></p>
                <br>
                <div class="csmSocials" style="display: none;">
                  <i class="bi bi-flower1" title="V三人のマリア" onclick="{ window.open('/'); }"></i>
                  <i class="bi bi-globe" title="website" onclick="{ window.open('https://thebelovedmoon.github.io'); }"></i>
                  <i class="bi bi-twitter-x" title="X" onclick="{ window.open('https://x.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-facebook" title="facebook" onclick="{ window.open('https://web.facebook.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-instagram" title="instagram" onclick="{ window.open('https://instagram.com/themoon_follow'); }"></i>
                  <i class="bi bi-threads" title="threads" onclick="{ window.open('https://threads.com/themoon_follow'); }"></i>
                  <i class="bi bi-youtube" title="youtube" onclick="{ window.open('https://youtube.com/@thebelovedmoon'); }"></i>
                  <i class="bi bi-twitch" title="twitch" onclick="{ window.open('https://twitch.tv/thebelovedmoon'); }"></i>
                  <i class="bi bi-tiktok" title="tiktok" onclick="{ window.open('https://tiktok.com/@themoon_follow'); }"></i>
                  <i class="bi bi-reddit" title="reddit" onclick="{ window.open('https://reddit.com/user/thebelovedmoon'); }"></i>
                  <i class="bi bi-soundwave" title="soundcloud" onclick="{ window.open('https://soundcloud.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-github" title="github" onclick="{ window.open('https://github.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-envelope-at-fill" title="email" onclick="{ window.open('mailto:jelsa14018@gmail.com', '_self'); }"></i>
                </div>
              </div>
            </div>
            <div class="csmPrfGrd2">
              <!--
              <h2>CosMaria Spotlight</h2>
              <span>info as of 15 Mar 2026</span>
              <br>
              <p>
                tba
              </p>
              <div style="width: 100%; height: calc(15rem * 0.3125);"></div>
              -->
              <h2>certificate reference</h2>
              <br>
              <div class="csmPrfQR"></div>
              <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
              <p>VTMCSM000000011</p>
            </div>
          `;
          new QRCode(document.querySelector(".csmPrfQR"), {
            text: `https://vtresmarias.github.io/cert?ref=VTMCSM000000011`,
            colorDark: "#3d374c",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
          });
          csmDiagImgLdr();
          return csmOpenView();
        case 2:
          document.querySelector(".csmPrfGridView").innerHTML = `
            <div class="csmPrfGrd1">
              <div>
                <img class="csmImg" src="" alt="">
                <div style="width: 100%; height: calc(15rem * 0.03125);"></div>
                <h1>Sonica</h1>
                <p><b><i>Mistress of CSM👙</i></b></p>
                <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
                <p><i>introduced 30 Dec 2025</i></p>
                <br>
                <div class="csmSocials" style="display: none;">
                  <i class="bi bi-flower1" title="V三人のマリア" onclick="{ window.open('/'); }"></i>
                  <i class="bi bi-globe" title="website" onclick="{ window.open('https://thebelovedmoon.github.io'); }"></i>
                  <i class="bi bi-twitter-x" title="X" onclick="{ window.open('https://x.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-facebook" title="facebook" onclick="{ window.open('https://web.facebook.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-instagram" title="instagram" onclick="{ window.open('https://instagram.com/themoon_follow'); }"></i>
                  <i class="bi bi-threads" title="threads" onclick="{ window.open('https://threads.com/themoon_follow'); }"></i>
                  <i class="bi bi-youtube" title="youtube" onclick="{ window.open('https://youtube.com/@thebelovedmoon'); }"></i>
                  <i class="bi bi-twitch" title="twitch" onclick="{ window.open('https://twitch.tv/thebelovedmoon'); }"></i>
                  <i class="bi bi-tiktok" title="tiktok" onclick="{ window.open('https://tiktok.com/@themoon_follow'); }"></i>
                  <i class="bi bi-reddit" title="reddit" onclick="{ window.open('https://reddit.com/user/thebelovedmoon'); }"></i>
                  <i class="bi bi-soundwave" title="soundcloud" onclick="{ window.open('https://soundcloud.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-github" title="github" onclick="{ window.open('https://github.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-envelope-at-fill" title="email" onclick="{ window.open('mailto:jelsa14018@gmail.com', '_self'); }"></i>
                </div>
              </div>
            </div>
            <div class="csmPrfGrd2">
              <!--
              <h2>CosMaria Spotlight</h2>
              <span>info as of 15 Mar 2026</span>
              <br>
              <p>
                tba
              </p>
              <div style="width: 100%; height: calc(15rem * 0.3125);"></div>
              -->
              <h2>certificate references</h2>
              <br>
              <div class="csmPrfQR1"></div>
              <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
              <p>VTMCSM000000006</p>
              <br>
              <div class="csmPrfQR2"></div>
              <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
              <p>VTMCSM000000012</p>
            </div>
          `;
          new QRCode(document.querySelector(".csmPrfQR1"), {
            text: `https://vtresmarias.github.io/cert?ref=VTMCSM000000006`,
            colorDark: "#3d374c",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
          });
          new QRCode(document.querySelector(".csmPrfQR2"), {
            text: `https://vtresmarias.github.io/cert?ref=VTMCSM000000012`,
            colorDark: "#3d374c",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
          });
          csmDiagImgLdr();
          return csmOpenView();
        default: return event.stopPropagation();
      }
    case "Apprentices":
      switch (pos) {
        case 1:
        case 2:
          document.querySelector(".csmPrfGridView").innerHTML = `
            <div class="csmPrfGrd1">
              <div>
                <img class="csmImg" src="" alt="">
                <div style="width: 100%; height: calc(15rem * 0.03125);"></div>
                <h1>Gravity B.</h1>
                <p><b><i>Apprentice to the CosMarias</i></b></p>
                <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
                <p><i>introduced 30 Dec 2024</i></p>
                <br>
                <div class="csmSocials" style="display: none;">
                  <i class="bi bi-flower1" title="V三人のマリア" onclick="{ window.open('/'); }"></i>
                  <i class="bi bi-globe" title="website" onclick="{ window.open('https://thebelovedmoon.github.io'); }"></i>
                  <i class="bi bi-twitter-x" title="X" onclick="{ window.open('https://x.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-facebook" title="facebook" onclick="{ window.open('https://web.facebook.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-instagram" title="instagram" onclick="{ window.open('https://instagram.com/themoon_follow'); }"></i>
                  <i class="bi bi-threads" title="threads" onclick="{ window.open('https://threads.com/themoon_follow'); }"></i>
                  <i class="bi bi-youtube" title="youtube" onclick="{ window.open('https://youtube.com/@thebelovedmoon'); }"></i>
                  <i class="bi bi-twitch" title="twitch" onclick="{ window.open('https://twitch.tv/thebelovedmoon'); }"></i>
                  <i class="bi bi-tiktok" title="tiktok" onclick="{ window.open('https://tiktok.com/@themoon_follow'); }"></i>
                  <i class="bi bi-reddit" title="reddit" onclick="{ window.open('https://reddit.com/user/thebelovedmoon'); }"></i>
                  <i class="bi bi-soundwave" title="soundcloud" onclick="{ window.open('https://soundcloud.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-github" title="github" onclick="{ window.open('https://github.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-envelope-at-fill" title="email" onclick="{ window.open('mailto:jelsa14018@gmail.com', '_self'); }"></i>
                </div>
              </div>
            </div>
            <div class="csmPrfGrd2">
              <!--
              <h2>CosMaria Spotlight</h2>
              <span>info as of 15 Mar 2026</span>
              <br>
              <p>
                tba
              </p>
              <div style="width: 100%; height: calc(15rem * 0.3125);"></div>
              -->
              <h2>certificate reference</h2>
              <br>
              <div class="csmPrfQR"></div>
              <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
              <p>VTMCSM000000003</p>
            </div>
          `;
          new QRCode(document.querySelector(".csmPrfQR"), {
            text: `https://vtresmarias.github.io/cert?ref=VTMCSM000000003`,
            colorDark: "#3d374c",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
          });
          csmDiagImgLdr();
          return csmOpenView();
        case 3:
          document.querySelector(".csmPrfGridView").innerHTML = `
            <div class="csmPrfGrd1">
              <div>
                <img class="csmImg" src="" alt="">
                <div style="width: 100%; height: calc(15rem * 0.03125);"></div>
                <h1>Shichide</h1>
                <p><b><i>Apprentice to the CosMarias</i></b></p>
                <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
                <p><i>introduced 30 Dec 2024</i></p>
                <br>
                <div class="csmSocials" style="display: none;">
                  <i class="bi bi-flower1" title="V三人のマリア" onclick="{ window.open('/'); }"></i>
                  <i class="bi bi-globe" title="website" onclick="{ window.open('https://thebelovedmoon.github.io'); }"></i>
                  <i class="bi bi-twitter-x" title="X" onclick="{ window.open('https://x.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-facebook" title="facebook" onclick="{ window.open('https://web.facebook.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-instagram" title="instagram" onclick="{ window.open('https://instagram.com/themoon_follow'); }"></i>
                  <i class="bi bi-threads" title="threads" onclick="{ window.open('https://threads.com/themoon_follow'); }"></i>
                  <i class="bi bi-youtube" title="youtube" onclick="{ window.open('https://youtube.com/@thebelovedmoon'); }"></i>
                  <i class="bi bi-twitch" title="twitch" onclick="{ window.open('https://twitch.tv/thebelovedmoon'); }"></i>
                  <i class="bi bi-tiktok" title="tiktok" onclick="{ window.open('https://tiktok.com/@themoon_follow'); }"></i>
                  <i class="bi bi-reddit" title="reddit" onclick="{ window.open('https://reddit.com/user/thebelovedmoon'); }"></i>
                  <i class="bi bi-soundwave" title="soundcloud" onclick="{ window.open('https://soundcloud.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-github" title="github" onclick="{ window.open('https://github.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-envelope-at-fill" title="email" onclick="{ window.open('mailto:jelsa14018@gmail.com', '_self'); }"></i>
                </div>
              </div>
            </div>
            <div class="csmPrfGrd2">
              <!--
              <h2>CosMaria Spotlight</h2>
              <span>info as of 15 Mar 2026</span>
              <br>
              <p>
                tba
              </p>
              <div style="width: 100%; height: calc(15rem * 0.3125);"></div>
              -->
              <h2>certificate reference</h2>
              <br>
              <div class="csmPrfQR"></div>
              <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
              <p>VTMCSM000000004</p>
            </div>
          `;
          new QRCode(document.querySelector(".csmPrfQR"), {
            text: `https://vtresmarias.github.io/cert?ref=VTMCSM000000004`,
            colorDark: "#3d374c",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
          });
          csmDiagImgLdr();
          return csmOpenView();
        case 4:
        case 5:
        case 6:
          document.querySelector(".csmPrfGridView").innerHTML = `
            <div class="csmPrfGrd1">
              <div>
                <img class="csmImg" src="" alt="">
                <div style="width: 100%; height: calc(15rem * 0.03125);"></div>
                <h1>Jaja</h1>
                <p><b><i>Apprentice to the CosMarias</i></b></p>
                <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
                <p><i>introduced 30 Dec 2025</i></p>
                <br>
                <div class="csmSocials" style="display: none;">
                  <i class="bi bi-flower1" title="V三人のマリア" onclick="{ window.open('/'); }"></i>
                  <i class="bi bi-globe" title="website" onclick="{ window.open('https://thebelovedmoon.github.io'); }"></i>
                  <i class="bi bi-twitter-x" title="X" onclick="{ window.open('https://x.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-facebook" title="facebook" onclick="{ window.open('https://web.facebook.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-instagram" title="instagram" onclick="{ window.open('https://instagram.com/themoon_follow'); }"></i>
                  <i class="bi bi-threads" title="threads" onclick="{ window.open('https://threads.com/themoon_follow'); }"></i>
                  <i class="bi bi-youtube" title="youtube" onclick="{ window.open('https://youtube.com/@thebelovedmoon'); }"></i>
                  <i class="bi bi-twitch" title="twitch" onclick="{ window.open('https://twitch.tv/thebelovedmoon'); }"></i>
                  <i class="bi bi-tiktok" title="tiktok" onclick="{ window.open('https://tiktok.com/@themoon_follow'); }"></i>
                  <i class="bi bi-reddit" title="reddit" onclick="{ window.open('https://reddit.com/user/thebelovedmoon'); }"></i>
                  <i class="bi bi-soundwave" title="soundcloud" onclick="{ window.open('https://soundcloud.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-github" title="github" onclick="{ window.open('https://github.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-envelope-at-fill" title="email" onclick="{ window.open('mailto:jelsa14018@gmail.com', '_self'); }"></i>
                </div>
              </div>
            </div>
            <div class="csmPrfGrd2">
              <!--
              <h2>CosMaria Spotlight</h2>
              <span>info as of 15 Mar 2026</span>
              <br>
              <p>
                tba
              </p>
              <div style="width: 100%; height: calc(15rem * 0.3125);"></div>
              -->
              <h2>certificate reference</h2>
              <br>
              <div class="csmPrfQR"></div>
              <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
              <p>VTMCSM000000013</p>
            </div>
          `;
          new QRCode(document.querySelector(".csmPrfQR"), {
            text: `https://vtresmarias.github.io/cert?ref=VTMCSM000000013`,
            colorDark: "#3d374c",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
          });
          csmDiagImgLdr();
          return csmOpenView();
        case 7:
          document.querySelector(".csmPrfGridView").innerHTML = `
            <div class="csmPrfGrd1">
              <div>
                <img class="csmImg" src="" alt="">
                <div style="width: 100%; height: calc(15rem * 0.03125);"></div>
                <h1>Cess</h1>
                <p><b><i>Apprentice to the CosMarias</i></b></p>
                <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
                <p><i>introduced 30 Dec 2025</i></p>
                <br>
                <div class="csmSocials" style="display: none;">
                  <i class="bi bi-flower1" title="V三人のマリア" onclick="{ window.open('/'); }"></i>
                  <i class="bi bi-globe" title="website" onclick="{ window.open('https://thebelovedmoon.github.io'); }"></i>
                  <i class="bi bi-twitter-x" title="X" onclick="{ window.open('https://x.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-facebook" title="facebook" onclick="{ window.open('https://web.facebook.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-instagram" title="instagram" onclick="{ window.open('https://instagram.com/themoon_follow'); }"></i>
                  <i class="bi bi-threads" title="threads" onclick="{ window.open('https://threads.com/themoon_follow'); }"></i>
                  <i class="bi bi-youtube" title="youtube" onclick="{ window.open('https://youtube.com/@thebelovedmoon'); }"></i>
                  <i class="bi bi-twitch" title="twitch" onclick="{ window.open('https://twitch.tv/thebelovedmoon'); }"></i>
                  <i class="bi bi-tiktok" title="tiktok" onclick="{ window.open('https://tiktok.com/@themoon_follow'); }"></i>
                  <i class="bi bi-reddit" title="reddit" onclick="{ window.open('https://reddit.com/user/thebelovedmoon'); }"></i>
                  <i class="bi bi-soundwave" title="soundcloud" onclick="{ window.open('https://soundcloud.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-github" title="github" onclick="{ window.open('https://github.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-envelope-at-fill" title="email" onclick="{ window.open('mailto:jelsa14018@gmail.com', '_self'); }"></i>
                </div>
              </div>
            </div>
            <div class="csmPrfGrd2">
              <!--
              <h2>CosMaria Spotlight</h2>
              <span>info as of 15 Mar 2026</span>
              <br>
              <p>
                tba
              </p>
              <div style="width: 100%; height: calc(15rem * 0.3125);"></div>
              -->
              <h2>certificate reference</h2>
              <br>
              <div class="csmPrfQR"></div>
              <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
              <p>VTMCSM000000014</p>
            </div>
          `;
          new QRCode(document.querySelector(".csmPrfQR"), {
            text: `https://vtresmarias.github.io/cert?ref=VTMCSM000000014`,
            colorDark: "#3d374c",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
          });
          csmDiagImgLdr();
          return csmOpenView();
        case 8:
          document.querySelector(".csmPrfGridView").innerHTML = `
            <div class="csmPrfGrd1">
              <div>
                <img class="csmImg" src="" alt="">
                <div style="width: 100%; height: calc(15rem * 0.03125);"></div>
                <h1>Kitz</h1>
                <p><b><i>Apprentice to the CosMarias</i></b></p>
                <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
                <p><i>introduced 30 Dec 2025</i></p>
                <br>
                <div class="csmSocials" style="display: none;">
                  <i class="bi bi-flower1" title="V三人のマリア" onclick="{ window.open('/'); }"></i>
                  <i class="bi bi-globe" title="website" onclick="{ window.open('https://thebelovedmoon.github.io'); }"></i>
                  <i class="bi bi-twitter-x" title="X" onclick="{ window.open('https://x.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-facebook" title="facebook" onclick="{ window.open('https://web.facebook.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-instagram" title="instagram" onclick="{ window.open('https://instagram.com/themoon_follow'); }"></i>
                  <i class="bi bi-threads" title="threads" onclick="{ window.open('https://threads.com/themoon_follow'); }"></i>
                  <i class="bi bi-youtube" title="youtube" onclick="{ window.open('https://youtube.com/@thebelovedmoon'); }"></i>
                  <i class="bi bi-twitch" title="twitch" onclick="{ window.open('https://twitch.tv/thebelovedmoon'); }"></i>
                  <i class="bi bi-tiktok" title="tiktok" onclick="{ window.open('https://tiktok.com/@themoon_follow'); }"></i>
                  <i class="bi bi-reddit" title="reddit" onclick="{ window.open('https://reddit.com/user/thebelovedmoon'); }"></i>
                  <i class="bi bi-soundwave" title="soundcloud" onclick="{ window.open('https://soundcloud.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-github" title="github" onclick="{ window.open('https://github.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-envelope-at-fill" title="email" onclick="{ window.open('mailto:jelsa14018@gmail.com', '_self'); }"></i>
                </div>
              </div>
            </div>
            <div class="csmPrfGrd2">
              <!--
              <h2>CosMaria Spotlight</h2>
              <span>info as of 15 Mar 2026</span>
              <br>
              <p>
                tba
              </p>
              <div style="width: 100%; height: calc(15rem * 0.3125);"></div>
              -->
              <h2>certificate reference</h2>
              <br>
              <div class="csmPrfQR"></div>
              <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
              <p>VTMCSM000000015</p>
            </div>
          `;
          new QRCode(document.querySelector(".csmPrfQR"), {
            text: `https://vtresmarias.github.io/cert?ref=VTMCSM000000015`,
            colorDark: "#3d374c",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
          });
          csmDiagImgLdr();
          return csmOpenView();
        case 9:
          document.querySelector(".csmPrfGridView").innerHTML = `
            <div class="csmPrfGrd1">
              <div>
                <img class="csmImg" src="" alt="">
                <div style="width: 100%; height: calc(15rem * 0.03125);"></div>
                <h1>Zume</h1>
                <p><b><i>Apprentice to the CosMarias</i></b></p>
                <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
                <p><i>introduced 30 Dec 2025</i></p>
                <br>
                <div class="csmSocials" style="display: none;">
                  <i class="bi bi-flower1" title="V三人のマリア" onclick="{ window.open('/'); }"></i>
                  <i class="bi bi-globe" title="website" onclick="{ window.open('https://thebelovedmoon.github.io'); }"></i>
                  <i class="bi bi-twitter-x" title="X" onclick="{ window.open('https://x.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-facebook" title="facebook" onclick="{ window.open('https://web.facebook.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-instagram" title="instagram" onclick="{ window.open('https://instagram.com/themoon_follow'); }"></i>
                  <i class="bi bi-threads" title="threads" onclick="{ window.open('https://threads.com/themoon_follow'); }"></i>
                  <i class="bi bi-youtube" title="youtube" onclick="{ window.open('https://youtube.com/@thebelovedmoon'); }"></i>
                  <i class="bi bi-twitch" title="twitch" onclick="{ window.open('https://twitch.tv/thebelovedmoon'); }"></i>
                  <i class="bi bi-tiktok" title="tiktok" onclick="{ window.open('https://tiktok.com/@themoon_follow'); }"></i>
                  <i class="bi bi-reddit" title="reddit" onclick="{ window.open('https://reddit.com/user/thebelovedmoon'); }"></i>
                  <i class="bi bi-soundwave" title="soundcloud" onclick="{ window.open('https://soundcloud.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-github" title="github" onclick="{ window.open('https://github.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-envelope-at-fill" title="email" onclick="{ window.open('mailto:jelsa14018@gmail.com', '_self'); }"></i>
                </div>
              </div>
            </div>
            <div class="csmPrfGrd2">
              <!--
              <h2>CosMaria Spotlight</h2>
              <span>info as of 15 Mar 2026</span>
              <br>
              <p>
                tba
              </p>
              <div style="width: 100%; height: calc(15rem * 0.3125);"></div>
              -->
              <h2>certificate reference</h2>
              <br>
              <div class="csmPrfQR"></div>
              <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
              <p>VTMCSM000000016</p>
            </div>
          `;
          new QRCode(document.querySelector(".csmPrfQR"), {
            text: `https://vtresmarias.github.io/cert?ref=VTMCSM000000016`,
            colorDark: "#3d374c",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
          });
          csmDiagImgLdr();
          return csmOpenView();
        case 10:
          document.querySelector(".csmPrfGridView").innerHTML = `
            <div class="csmPrfGrd1">
              <div>
                <img class="csmImg" src="" alt="">
                <div style="width: 100%; height: calc(15rem * 0.03125);"></div>
                <h1>Menako</h1>
                <p><b><i>Apprentice to the CosMarias</i></b></p>
                <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
                <p><i>introduced 30 Dec 2025</i></p>
                <br>
                <div class="csmSocials" style="display: none;">
                  <i class="bi bi-flower1" title="V三人のマリア" onclick="{ window.open('/'); }"></i>
                  <i class="bi bi-globe" title="website" onclick="{ window.open('https://thebelovedmoon.github.io'); }"></i>
                  <i class="bi bi-twitter-x" title="X" onclick="{ window.open('https://x.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-facebook" title="facebook" onclick="{ window.open('https://web.facebook.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-instagram" title="instagram" onclick="{ window.open('https://instagram.com/themoon_follow'); }"></i>
                  <i class="bi bi-threads" title="threads" onclick="{ window.open('https://threads.com/themoon_follow'); }"></i>
                  <i class="bi bi-youtube" title="youtube" onclick="{ window.open('https://youtube.com/@thebelovedmoon'); }"></i>
                  <i class="bi bi-twitch" title="twitch" onclick="{ window.open('https://twitch.tv/thebelovedmoon'); }"></i>
                  <i class="bi bi-tiktok" title="tiktok" onclick="{ window.open('https://tiktok.com/@themoon_follow'); }"></i>
                  <i class="bi bi-reddit" title="reddit" onclick="{ window.open('https://reddit.com/user/thebelovedmoon'); }"></i>
                  <i class="bi bi-soundwave" title="soundcloud" onclick="{ window.open('https://soundcloud.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-github" title="github" onclick="{ window.open('https://github.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-envelope-at-fill" title="email" onclick="{ window.open('mailto:jelsa14018@gmail.com', '_self'); }"></i>
                </div>
              </div>
            </div>
            <div class="csmPrfGrd2">
              <!--
              <h2>CosMaria Spotlight</h2>
              <span>info as of 15 Mar 2026</span>
              <br>
              <p>
                tba
              </p>
              <div style="width: 100%; height: calc(15rem * 0.3125);"></div>
              -->
              <h2>certificate reference</h2>
              <br>
              <div class="csmPrfQR"></div>
              <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
              <p>VTMCSM000000017</p>
            </div>
          `;
          new QRCode(document.querySelector(".csmPrfQR"), {
            text: `https://vtresmarias.github.io/cert?ref=VTMCSM000000017`,
            colorDark: "#3d374c",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
          });
          csmDiagImgLdr();
          return csmOpenView();
        case 11:
          document.querySelector(".csmPrfGridView").innerHTML = `
            <div class="csmPrfGrd1">
              <div>
                <img class="csmImg" src="" alt="">
                <div style="width: 100%; height: calc(15rem * 0.03125);"></div>
                <h1>Hanako</h1>
                <p><b><i>Apprentice to the CosMarias</i></b></p>
                <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
                <p><i>introduced 30 Dec 2025</i></p>
                <br>
                <div class="csmSocials" style="display: none;">
                  <i class="bi bi-flower1" title="V三人のマリア" onclick="{ window.open('/'); }"></i>
                  <i class="bi bi-globe" title="website" onclick="{ window.open('https://thebelovedmoon.github.io'); }"></i>
                  <i class="bi bi-twitter-x" title="X" onclick="{ window.open('https://x.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-facebook" title="facebook" onclick="{ window.open('https://web.facebook.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-instagram" title="instagram" onclick="{ window.open('https://instagram.com/themoon_follow'); }"></i>
                  <i class="bi bi-threads" title="threads" onclick="{ window.open('https://threads.com/themoon_follow'); }"></i>
                  <i class="bi bi-youtube" title="youtube" onclick="{ window.open('https://youtube.com/@thebelovedmoon'); }"></i>
                  <i class="bi bi-twitch" title="twitch" onclick="{ window.open('https://twitch.tv/thebelovedmoon'); }"></i>
                  <i class="bi bi-tiktok" title="tiktok" onclick="{ window.open('https://tiktok.com/@themoon_follow'); }"></i>
                  <i class="bi bi-reddit" title="reddit" onclick="{ window.open('https://reddit.com/user/thebelovedmoon'); }"></i>
                  <i class="bi bi-soundwave" title="soundcloud" onclick="{ window.open('https://soundcloud.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-github" title="github" onclick="{ window.open('https://github.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-envelope-at-fill" title="email" onclick="{ window.open('mailto:jelsa14018@gmail.com', '_self'); }"></i>
                </div>
              </div>
            </div>
            <div class="csmPrfGrd2">
              <!--
              <h2>CosMaria Spotlight</h2>
              <span>info as of 15 Mar 2026</span>
              <br>
              <p>
                tba
              </p>
              <div style="width: 100%; height: calc(15rem * 0.3125);"></div>
              -->
              <h2>certificate reference</h2>
              <br>
              <div class="csmPrfQR"></div>
              <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
              <p>VTMCSM000000018</p>
            </div>
          `;
          new QRCode(document.querySelector(".csmPrfQR"), {
            text: `https://vtresmarias.github.io/cert?ref=VTMCSM000000018`,
            colorDark: "#3d374c",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
          });
          csmDiagImgLdr();
          return csmOpenView();
        case 12:
          document.querySelector(".csmPrfGridView").innerHTML = `
            <div class="csmPrfGrd1">
              <div>
                <img class="csmImg" src="" alt="">
                <div style="width: 100%; height: calc(15rem * 0.03125);"></div>
                <h1>Cleo M.</h1>
                <p><b><i>Apprentice to the CosMarias</i></b></p>
                <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
                <p><i>introduced 30 Dec 2025</i></p>
                <br>
                <div class="csmSocials" style="display: none;">
                  <i class="bi bi-flower1" title="V三人のマリア" onclick="{ window.open('/'); }"></i>
                  <i class="bi bi-globe" title="website" onclick="{ window.open('https://thebelovedmoon.github.io'); }"></i>
                  <i class="bi bi-twitter-x" title="X" onclick="{ window.open('https://x.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-facebook" title="facebook" onclick="{ window.open('https://web.facebook.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-instagram" title="instagram" onclick="{ window.open('https://instagram.com/themoon_follow'); }"></i>
                  <i class="bi bi-threads" title="threads" onclick="{ window.open('https://threads.com/themoon_follow'); }"></i>
                  <i class="bi bi-youtube" title="youtube" onclick="{ window.open('https://youtube.com/@thebelovedmoon'); }"></i>
                  <i class="bi bi-twitch" title="twitch" onclick="{ window.open('https://twitch.tv/thebelovedmoon'); }"></i>
                  <i class="bi bi-tiktok" title="tiktok" onclick="{ window.open('https://tiktok.com/@themoon_follow'); }"></i>
                  <i class="bi bi-reddit" title="reddit" onclick="{ window.open('https://reddit.com/user/thebelovedmoon'); }"></i>
                  <i class="bi bi-soundwave" title="soundcloud" onclick="{ window.open('https://soundcloud.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-github" title="github" onclick="{ window.open('https://github.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-envelope-at-fill" title="email" onclick="{ window.open('mailto:jelsa14018@gmail.com', '_self'); }"></i>
                </div>
              </div>
            </div>
            <div class="csmPrfGrd2">
              <!--
              <h2>CosMaria Spotlight</h2>
              <span>info as of 15 Mar 2026</span>
              <br>
              <p>
                tba
              </p>
              <div style="width: 100%; height: calc(15rem * 0.3125);"></div>
              -->
              <h2>certificate reference</h2>
              <br>
              <div class="csmPrfQR"></div>
              <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
              <p>VTMCSM000000019</p>
            </div>
          `;
          new QRCode(document.querySelector(".csmPrfQR"), {
            text: `https://vtresmarias.github.io/cert?ref=VTMCSM000000019`,
            colorDark: "#3d374c",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
          });
          csmDiagImgLdr();
          return csmOpenView();
        case 13:
          document.querySelector(".csmPrfGridView").innerHTML = `
            <div class="csmPrfGrd1">
              <div>
                <img class="csmImg" src="" alt="">
                <div style="width: 100%; height: calc(15rem * 0.03125);"></div>
                <h1>Lusherina</h1>
                <p><b><i>Apprentice to the CosMarias</i></b></p>
                <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
                <p><i>introduced 30 Dec 2025</i></p>
                <br>
                <div class="csmSocials" style="display: none;">
                  <i class="bi bi-flower1" title="V三人のマリア" onclick="{ window.open('/'); }"></i>
                  <i class="bi bi-globe" title="website" onclick="{ window.open('https://thebelovedmoon.github.io'); }"></i>
                  <i class="bi bi-twitter-x" title="X" onclick="{ window.open('https://x.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-facebook" title="facebook" onclick="{ window.open('https://web.facebook.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-instagram" title="instagram" onclick="{ window.open('https://instagram.com/themoon_follow'); }"></i>
                  <i class="bi bi-threads" title="threads" onclick="{ window.open('https://threads.com/themoon_follow'); }"></i>
                  <i class="bi bi-youtube" title="youtube" onclick="{ window.open('https://youtube.com/@thebelovedmoon'); }"></i>
                  <i class="bi bi-twitch" title="twitch" onclick="{ window.open('https://twitch.tv/thebelovedmoon'); }"></i>
                  <i class="bi bi-tiktok" title="tiktok" onclick="{ window.open('https://tiktok.com/@themoon_follow'); }"></i>
                  <i class="bi bi-reddit" title="reddit" onclick="{ window.open('https://reddit.com/user/thebelovedmoon'); }"></i>
                  <i class="bi bi-soundwave" title="soundcloud" onclick="{ window.open('https://soundcloud.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-github" title="github" onclick="{ window.open('https://github.com/thebelovedmoon'); }"></i>
                  <i class="bi bi-envelope-at-fill" title="email" onclick="{ window.open('mailto:jelsa14018@gmail.com', '_self'); }"></i>
                </div>
              </div>
            </div>
            <div class="csmPrfGrd2">
              <!--
              <h2>CosMaria Spotlight</h2>
              <span>info as of 15 Mar 2026</span>
              <br>
              <p>
                tba
              </p>
              <div style="width: 100%; height: calc(15rem * 0.3125);"></div>
              -->
              <h2>certificate reference</h2>
              <br>
              <div class="csmPrfQR"></div>
              <div style="width: 100%; height: calc(15rem * 0.0625);"></div>
              <p>VTMCSM000000020</p>
            </div>
          `;
          new QRCode(document.querySelector(".csmPrfQR"), {
            text: `https://vtresmarias.github.io/cert?ref=VTMCSM000000020`,
            colorDark: "#3d374c",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
          });
          csmDiagImgLdr();
          return csmOpenView();
        default: return event.stopPropagation();
      }
    default: return event.stopPropagation();
  }

  function csmDiagImgLdr(csmCustomState) {
    let fnames = [
        "png",
        "jpg",
        "jpeg",
        "gif",
        "webp",
      ];
    for (let ext of fnames) {
      let csmProf = `/assets/images/subcollective/cosmaria/profile/csm_${csmNm}.${ext}`,
        xhr = new XMLHttpRequest(), csmProfCust;
      switch (csmCustomState) {
        case 1: // BCN
          csmProfCust = `/assets/images/subcollective/cosmaria/profile/csm_${csmNm}_BCN.${ext}`;
          xhr.open("HEAD", csmProf, false);
          xhr.send();
          if (xhr.status === 200) {
            document.querySelector("img.csmImg").setAttribute("src", csmProf);
            document.querySelector("img.csmImgCust").setAttribute("src", csmProfCust);
            return;
          }
        case 2: // VTM (Aga)
          csmProfCust = `/assets/images/profile/maria_pfp_1.png`;
          xhr.open("HEAD", csmProf, false);
          xhr.send();
          if (xhr.status === 200) {
            document.querySelector("img.csmImg").setAttribute("src", csmProf);
            document.querySelector("img.csmImgCust").setAttribute("src", csmProfCust);
            return;
          }
        default:
          xhr.open("HEAD", csmProf, false);
          xhr.send();
          if (xhr.status === 200) { return document.querySelector("img.csmImg").setAttribute("src", csmProf); }
      }
    }
    document.querySelector("img.csmImg").setAttribute("src", "/assets/images/backgrounds/csm_bg.png");
  }

}

function collapsibleEnable() {
  let clspBtn = document.querySelectorAll(".clspBtn"),
    clspCont = document.querySelectorAll(".clspCont");
  for (let clsp = 0; clsp < ((clspBtn.length * clspCont.length) / 2); clsp++) {
    clspBtn[clsp].onclick = () => {
      if (clspCont[clsp].style.maxHeight) { clspCont[clsp].setAttribute("style", `max-height: ${null};`); }
      else { clspCont[clsp].setAttribute("style", `max-height: ${clspCont[clsp].scrollHeight}px;`); }
    }
  }
}

function csmImgLoader() {
  document.querySelectorAll("img[class^='csmImg_']").forEach((csmImg) => {
    let csmName = csmImg.getAttribute("class").replace("csmImg_", "csm_"),
      fnames = [
        "png",
        "jpg",
        "jpeg",
        "gif",
        "webp",
      ];
    for (let ext of fnames) {
      let filePath = `/assets/images/subcollective/cosmaria/profile/${csmName}.${ext}`,
        xhr = new XMLHttpRequest();
      xhr.open("HEAD", filePath, false);
      xhr.send();
      if (xhr.status === 200) { return csmImg.setAttribute("src", filePath); }
    }
    csmImg.setAttribute("src", "/assets/images/backgrounds/csm_bg.png");
  });
}

function csmInducteesDialog() {
  switch (new URLSearchParams(window.location.search).get("csm")) {
    case "Aga": return csmPrfl("CosMarias", 1, "Aga");
    case "Dani": return csmPrfl("CosMarias", 2, "Dani");
    case "Eri": return csmPrfl("CosMarias", 3, "Eri");
    case "Shunni": return csmPrfl("CosMarias", 4, "Shunni");
    case "Patring": return csmPrfl("CosMarias", 5, "Patring");
    case "Shira": return csmPrfl("CosMarias", 6, "Shira");
    case "Elle": return csmPrfl("CosMarias", 7, "Elle");
    case "Tris": return csmPrfl("CosMarias", 8, "Tris");
    case "Seushi": return csmPrfl("CosMarias", 9, "Seushi");
    case "Issa": return csmPrfl("CosMarias", 10, "Issaki");
    case "Divi": return csmPrfl("CosMarias", 11, "Divi");
    default: return event.stopPropagation();
  }
}