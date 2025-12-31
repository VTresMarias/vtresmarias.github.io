function csmOpenView() {
  document.querySelector(".csmProfileFscr").setAttribute("style", "display: flex;");
  setTimeout(() => {
    document.querySelector(".csmProfileFscr").setAttribute("style", "display: flex; opacity: 1;");
    document.querySelector(".csmPrfDiag").setAttribute("style", "opacity: 1; transform: initial;");
  }, 0);
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
                <img class="csmImg" src="" style="border: 0.5rem solid #793a80;" alt="">
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
              <span>info as of 15 Mar 2025</span>
              <br>
              <p>
                she is the founder of this Sub-Collective, in addition to her title as the
                First Maria🍃 of the main VTuber Collective -- 「VTresMarias - V三人のマリア -
                」. even though she has been cosplaying for a year, her unwavering desire to
                bring the Core Values to other fields alongside her curiosity has led her to
                become one with the community at ease.
              </p>
              <br>
              <p>
                she is also known to have been 'consistently' cosplaying the same character
                throughout the year, which is a real-life version of her VTuber self.💐
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
          csmDiagImgLdr();
          return csmOpenView();
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
              <span>info as of 15 Mar 2025</span>
              <br>
              <p>
                she is widely regarded as one of the top cosplayers which had the great impact
                during 2023, as observed by the Incumbent First. as a result, she has been
                involved in more events and organizations that she felt were a blessing and an
                opportunity to keep in touch with her fans around the Philippines and the
                world.
              </p>
              <br>
              <p>
                the Incumbent First also logged that on their first encounter during Cosplay
                Matsuri 2023 D3 (aka her "first taste of cosplay"), she felt a deep connection
                to her that it felt like she was talking to Aura Ostara (the Second Maria🪷)
                face-to-face. that connection -- also proven by the fact that she mostly hung
                out at her booth during that time -- has given her an engaging vibe beyond the
                odds.💐
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
              <span>info as of 15 Mar 2025</span>
              <br>
              <p>
                she is a peculiar CosMaria that has devoted her life to cosplay since her
                first stint years ago; however, she mostly conducts cosplays throughout
                Central Luzon -- as the Incumbent First logged. she is mostly remembered for
                her 'accurate' representation of popular characters, most notably Albedo from
                Overlord.
              </p>
              <br>
              <p>
                the Incumbent First also logged that her first batch of interactions with her
                (when they first met during Bataan Anime Convention 2024 D2) had been the same
                with Hina Oujo (the Third Maria🌸) -- which gave her an impression that as
                long as one can dedicate their life to it -- either through cosplays or other
                fields, then anything can happen.💐
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
                <img class="csmImg" src="" alt="">
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
              <span>info as of 15 Mar 2025</span>
              <br>
              <p>
                a CosMaria with a deep love of the community, she has earned the deep trust of
                the people despite the odds that came in her way. as the Incumbent First
                noted, her first stint in the field of charity has earned her a deep respect
                with the residents.
              </p>
              <br>
              <p>
                the Incumbent First also observed during their first batch of interactions
                that her approach to connecting with fellow cosers and people made her become
                memorable to most extent. in addition, she is mostly regarded as someone who
                had powered Bataan Anime Convention throughout the convention by representing
                as the mascot herself -- Baconette.💐
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
          csmDiagImgLdr();
          return csmOpenView();
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
              <span>info as of 15 Mar 2025</span>
              <br>
              <p>
                she is regarded as someone that upholds determination and wit above all else.
                in addition -- as the Incumbent First noted -- that although she has
                experienced many turbulences in her life, she was able to commit to it with
                the best she can.
              </p>
              <br>
              <p>
                although she and the Incumbent First did not have their first interactions
                face-to-face, her first impressions were of the same as the others. it became
                more than fulfilling when she took on that role to put the Fifth closer to one
                of her greatest cosplay idols -- Lia.💐
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
                <img class="csmImg" src="" alt="">
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
              <span>info as of 15 Mar 2025</span>
              <br>
              <p>
                what sets her apart from the other CosMarias is that she takes the inspiration
                to the next level. her own way of committing to a range of fields is what
                makes her unique -- complete with her unwavering beauty that remains the key
                element in what makes her so great.
              </p>
              <br>
              <p>
                as the Incumbent First logged, she has the camaraderie that has proven by
                leaps and bounds as she ushers her way through cosplay and other fields --
                given by their first interactions together during Malolos Toy Convention 2024
                Bataan Leg. her uniqueness, adding to her role as her favorite characters,
                became her own strength in times of uncertainty.💐
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
          csmDiagImgLdr();
          return csmOpenView();
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
              <span>info as of 15 Mar 2025</span>
              <br>
              <p>
                the Incumbent First regarded her as one who valued her life and her commitment
                to her own fields, as they are currently on par with each other. as further
                noted, she has quite a unique camaraderie that, in turn, regarded her as the
                'Big Sister' of those around her.
              </p>
              <br>
              <p>
                in addition, the efforts that she had made to uplift the morale of everyone at
                large made her a fitting candidate to support others -- especially those who
                are just starting out in the industry. for someone who is naturally not
                aligned with cosplay as a field of interest, her approach made her a fitting
                addition to the vision of uniqueness above all else.💐
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
                <p><i>to inaugurate 15 Mar 2026</i></p>
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
                <p><i>to inaugurate 15 Mar 2026</i></p>
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
                <p><i>to inaugurate 15 Mar 2026</i></p>
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
                <p><b><i>Mistress of the CosMarias👙</i></b></p>
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
                <p><b><i>Mistress of the CosMarias👙</i></b></p>
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

  function csmDiagImgLdr() {
    let fnames = [
        "png",
        "jpg",
        "jpeg",
        "gif",
        "webp",
      ];
    for (let ext of fnames) {
      let filePath = `/assets/images/subcollective/cosmaria/profile/csm_${csmNm}.${ext}`,
        xhr = new XMLHttpRequest();
      xhr.open("HEAD", filePath, false);
      xhr.send();
      if (xhr.status === 200) { return document.querySelector("img.csmImg").setAttribute("src", filePath); }
    }
    document.querySelector("img.csmImg").setAttribute("src", "/assets/images/subcollective/cosmaria/cosmaria_bg.png");
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
    csmImg.setAttribute("src", "/assets/images/subcollective/cosmaria/cosmaria_bg.png");
  });
}