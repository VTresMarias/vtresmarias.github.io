function navQuery() {

  let vtm = new URLSearchParams(window.location.search).get("vtm"),
    importCSS = css => document.head.appendChild(document.createElement("style")).innerHTML = css; // related answer: https://stackoverflow.com/a/56825511 

  switch (vtm) {
    case "anniversary":
      document.title = "anniversaries of the Marias";
      document.querySelector(`#${vtm}`).setAttribute("style", "display: block;");
      navBtnHide(vtm);
      importCSS(`@import url("/assets/frameworks/css/nav/index/${vtm}.css");`);
      return;
    case "story":
      document.title = "the story of the First Maria ～最初のマリアの物語～";
      document.querySelector(`#${vtm}`).setAttribute("style", "display: block;");
      navBtnHide(vtm);
      importCSS(`@import url("/assets/frameworks/css/nav/index/${vtm}.css");`);
      document.querySelector("#vtmLogoHead").src = "/assets/web/maria_story_logo.png";
      return;
    case "music":
      document.title = "V三人のマリア: the Music of the Marias🍃🪷🌸"
      document.querySelector(`#${vtm}`).setAttribute("style", "display: block;");
      navBtnHide(vtm);
      importCSS(`@import url("/assets/frameworks/css/nav/index/${vtm}.css");`);
      return;
    case "event":
      document.title = "events"
      document.querySelector(`#${vtm}`).setAttribute("style", "display: block;");
      navBtnHide(vtm);
      importCSS(`@import url("/assets/frameworks/css/nav/index/${vtm}.css");`);
      return;
    case "letter":
      document.title = "letters from the First Maria🍃";
      document.querySelector(`#${vtm}`).setAttribute("style", "display: block;");
      navBtnHide(vtm);
      importCSS(`@import url("/assets/frameworks/css/nav/index/${vtm}.css");`);
      return;
    case "press":
      document.title = "press releases";
      document.querySelector(`#${vtm}`).setAttribute("style", "display: block;");
      navBtnHide(vtm);
      importCSS(`@import url("/assets/frameworks/css/nav/index/${vtm}.css");`);
      return;
    default:
      document.title = "「VTresMarias - V三人のマリア - 」";
      document.querySelector("#home").setAttribute("style", "display: block;");
      navBtnHide("home");
      importCSS(`@import url("/assets/frameworks/css/nav/index/home.css");`);
      return;
  }

}

function panelOpen() { document.querySelector("#mobileNav").setAttribute("style", "transform: initial;"); }
function panelClose() { document.querySelector("#mobileNav").setAttribute("style", "transform: translateY(-15rem);"); }

function mus(arg) {
  if (arg == "play") {
    document.querySelector("#bgmPlayPause").onclick = () => { mus("pause"); };
    document.querySelector("#bgmPlayPause").innerText = "pause";
    document.querySelector("#storyBGM").play();
  } else if (arg == "pause") {
    document.querySelector("#bgmPlayPause").onclick = () => { mus("play"); };
    document.querySelector("#bgmPlayPause").innerText = "play_arrow";
    document.querySelector("#storyBGM").pause();
  }
}

function launchStory() {
  window.open("story");
  mus("pause");
}

function navBtnHide(lbl) {
  let format = ["desktop", "mobile"];
  for (let v = 0; v < format.length; v++) { document.querySelector(`#btn-${lbl}-${format[v]}`).setAttribute("style", "display: none;"); }
}

function ytPlayer(nm) {
  let wdth, aspr, ytId;
  switch (nm) {
    case "csm2025":
      wdth = "75rem";
      aspr = "16 / 9";
      ytId = "LLSOjWAf3vA";
      break;
    default: return null;
  }
  document.body.insertAdjacentHTML("afterbegin", `
    <div id="mariaDiag" onclick="mariaDialogClose()">
      <iframe style="width: ${wdth}; aspect-ratio: ${aspr};" src="https://www.youtube-nocookie.com/embed/${ytId}?controls=1&rel=0&showinfo=0&modestbranding=1&playsinline=1" title="YT Player" frameborder="0" allowfullscreen onclick="{ event.stopPropagation(); }"></iframe>
    </div>
  `);
}

function mediaPlay(file) {
  document.querySelector("audio[mediaExec]").src = `https://media.githubusercontent.com/media/VTresMarias/vtresmarias.github.io/refs/heads/vtm-music/${file}.mp3`;
  document.querySelector("audio[mediaExec]").play();
}

function vtmOpenView() {
  document.querySelector(".mariaDiagV3").setAttribute("style", "display: flex;");
  setTimeout(() => {
    document.querySelector(".mariaDiagV3").setAttribute("style", "display: flex; opacity: 1;");
    document.querySelector(".mariaDiagV3 > div").setAttribute("style", "opacity: 1; transform: initial;");
  }, 0);
  return;
}

function vtmCloseView() {
  document.querySelector(".mariaDiagV3").setAttribute("style", "display: flex; opacity: 0;");
  document.querySelector(".mariaDiagV3 > div").setAttribute("style", "opacity: 0; transform: scale(0.95);");
  setTimeout(() => {
    document.querySelector(".mariaDiagV3").setAttribute("style", "display: none;");
  }, 750);
  return;
}

function mariaProfile(num) {
  switch (num) {
    case 1:
      document.querySelector(".mariaDiagV3 > div").innerHTML = `
        <div class="vtmGrid1">
          <div>
            <img src="/assets/images/profile/maria_pfp_1.png" style="border: 0.5rem solid #793a80;" alt="">
            <br>
            <div>
              <h2>Mother Agatha</h2>
              <p><i>the First Maria🍃</i></p>
              <div style="width: 100%; height: calc(1.5rem * 0.75);"></div> <!-- spacer -->
              <p><i>debuted 27 Dec 2023</i></p>
              <br>
              <div class="vtmSocials" AgaChuu>
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
        </div>
        <div class="vtmGrid2">
          <h2>biography</h2>
          <span>info as of 15 Mar 2024</span>
          <br>
          <p>
            Mother Agatha was once a beloved Mother before everything fell apart due to
            the brink of winter. she was given a mission from the Grand Lady upon her
            resurrection to find those who will be a part of her life forever.
          </p>
          <br>
          <p>
            behind the character is thebelovedmoon -- also known as 💚🍃Aga-chuu💗🌸 --
            the founder of this VTuber Collective. she initially used this within the
            Horror Shop Games community, but this has evolved over using it as her VTuber
            presence in order to represent such community.
          </p>
          <br>
          <p>
            she specializes in graphics and PR, as well as websites and programming. her
            current ventures (alongside this) include #MamaNyoSquad, ReactSquad, and
            AgaASMR (aka Aga's ASMR Garden).
          </p>
          <br><br>
          <h2>我慢 ～Perseverance～</h2>
          <span>tarot reader: MystearicaVT</span>
          <br>
          <p>
            a period of transformation. learning from past lives and adapting to this
            life's experiences. emerge and devote yourself to the change.
          </p>
        </div>
      `;
      return vtmOpenView();
    case 2:
      document.querySelector(".mariaDiagV3 > div").innerHTML = `
        <div class="vtmGrid1">
          <div>
            <img src="/assets/images/profile/maria_pfp_2.png" style="border: 0.5rem solid #66a898;" alt="">
            <br>
            <div>
              <h2>Aura Ostara</h2>
              <p><i>the Second Maria🪷</i></p>
              <div style="width: 100%; height: calc(1.5rem * 0.75);"></div> <!-- spacer -->
              <p><i>debuted 30 Jun 2022</i></p>
              <br>
              <div class="vtmSocials" AuraOstara>
                <i class="bi bi-globe" title="website" onclick="{ window.open('https://thebelovedmoon.github.io/auraostara'); }"></i>
                <i class="bi bi-twitter-x" title="X" onclick="{ window.open('https://x.com/AuraOstara'); }"></i>
                <!-- <i class="bi bi-youtube" title="youtube" onclick="{ window.open('https://youtube.com/@AuraOstara'); }><"/i> -->
                <i class="bi bi-twitch" title="twitch" onclick="{ window.open('https://twitch.tv/AuraOstara'); }"></i>
                <i class="bi bi-reddit" title="reddit" onclick="{ window.open('https://reddit.com/user/AuraOstara'); }"></i>
                <i class="bi bi-soundwave" title="soundcloud" onclick="{ window.open('https://soundcloud.com/aura-ostara'); }"></i>
                <i class="bi bi-envelope-at-fill" title="email" onclick="{ window.open('mailto:auraostara@gmail.com'); }"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="vtmGrid2">
          <h2>biography</h2>
          <span>info as of 15 Mar 2024</span>
          <br>
          <p>
            Aura Ostara represents the Celestial Nymph Guardian who aims to protect her
            Nimbisouls by all means necessary. she was an everyday girl before that one
            moment changes her life forever.
          </p>
          <br>
          <p>
            behind the character, she is a lively VTuber who dreams to connect with
            everyone that she meets throughout the way. she mostly streams Magicka and
            Mario Kart, but she also hosts zatsudan whenever she has time.
          </p>
          <br>
          <p>
            as of 19 Oct 2022, she's currently on indefinite hiatus; and the future
            remains uncertain upon her return to her VTubing career.
          </p>
          <br><br>
          <h2>復活 ～Rebirth～</h2>
          <span>tarot reader: MystearicaVT</span>
          <br>
          <p>
            keep paving the path that calls to you. keep moving forward, don't turn your
            back. you have the support and guidance you need. trust the process!
          </p>
        </div>
      `;
      return vtmOpenView();
    case 3:
      document.querySelector(".mariaDiagV3 > div").innerHTML = `
        <div class="vtmGrid1">
          <div>
            <img src="/assets/images/profile/maria_pfp_3.png" style="border: 0.5rem solid #f0a9a9;" alt="">
            <br>
            <div>
              <h2>Hina Oujo</h2>
              <p><i>the Third Maria🌸</i></p>
              <div style="width: 100%; height: calc(1.5rem * 0.75);"></div> <!-- spacer -->
              <p><i>debuted 3 Jul 2022</i></p>
              <br>
              <div class="vtmSocials" HinaOujo>
                <i class="bi bi-globe" title="website" onclick="{ window.open('https://thebelovedmoon.github.io/hinaoujo'); }"></i>
                <i class="bi bi-twitter-x" title="X" onclick="{ window.open('https://x.com/HinaSukii'); }"></i>
                <i class="bi bi-youtube" title="youtube" onclick="{ window.open('https://youtube.com/@HinaSukii'); }"></i>
                <i class="bi bi-twitch" title="twitch" onclick="{ window.open('https://twitch.tv/HinaSukii'); }"></i>
                <i class="bi bi-reddit" title="reddit" onclick="{ window.open('https://reddit.com/user/HinaOujo'); }"></i>
                <i class="bi bi-envelope-at-fill" title="email" onclick="{ window.open('mailto:hinaxsukii@gmail.com'); }"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="vtmGrid2">
          <h2>biography</h2>
          <span>info as of 15 Mar 2024</span>
          <br>
          <p>
            Hina Oujo is an elegant queen from a faraway land who vows to serve her
            Chuu-nins well. she has everything under her disposal, but deep inside, she
            needs someone who will make her feel whole after what seems to be her whole
            heap of loneliness.
          </p>
          <br>
          <p>
            behind the character, she's formerly known as Suzu Puyotori and HinaSukii --
            where the former has renamed to Emii Shion. she's a talented artist who has
            made waves over X before she debuted 3 Jul 2022. she typically enjoys art and
            zatsudan, and majorly plays League of Legends and Apex Legends -- among other
            things.
          </p>
          <br>
          <p>
            as of 28 Jan 2024, she has decided to put everything behind as her socials are
            closed -- forever. but her soul will always stay with the Collective for the
            sake of the future. 💗the Third Maria will always stay with us forever.🌸
          </p>
          <br><br>
          <h2>落ち着き ～Stability～</h2>
          <span>tarot reader: MystearicaVT</span>
          <br>
          <p>
            a moment to reflect on your boundaries, whether they be with friends, family,
            work etc. check on where you should be saying "no" to realign with yourself
            and energy.
          </p>
        </div>
      `;
      return vtmOpenView();
    default: event.stopPropagation();
  }
}

function subCollProfile(num) {
  switch (num) {
    case 1:
      document.querySelector(".mariaDiagV3 > div").innerHTML = `
        <div class="vtmGrid1 csmBranding">
          <div>
            <img src="/assets/images/subcollective/cosmaria/cosmaria_logo.png" style="border-radius: 0;" alt="">
            <br>
            <div>
              <h2>コスプレのマリア💐</h2>
              <p><i>Cosplay Marias / CSM</i></p>
              <div style="width: 100%; height: calc(1.5rem * 0.75);"></div> <!-- spacer -->
              <p><i>est. 30 Dec 2024</i></p>
            </div>
          </div>
        </div>
        <div class="vtmGrid2">
          <h2>overview</h2>
          <br>
          <p>
            コスプレのマリア💐 (Cosplay Marias, abbreviated as CSM) is VTresMarias' very
            first Sub-Collective that aims to expand the horizons whilst embracing the
            Core Values for the benefit of all -- through cosplay and other fields.
          </p>
          <br>
          <p>
            directly managed and supported by the First Maria🍃 -- who's widely known as
            the Incumbent First CosMaria🍃💐, the Sub-Collective selects potential
            cosplayers and individuals that embraces their best efforts in order for them
            to be showcased to their audience of choice.
          </p>
          <br>
          <p>
            the selection process takes place throughout every year (most notably during
            cosplay events); with the introduction of Apprentices and members of the
            Sub-Units on its anniversary (30 Dec), and the inauguration of new Inductees
            every 15 Mar.
          </p>
          <br>
          <button onclick="{ window.open('/cosmaria'); }">explore the Sub-Collective</button>
          <div class="spacerLargeInDiag" style="height: 6.5rem; display: none;"></div>
        </div>
      `;
      return vtmOpenView();
    default: event.stopPropagation();
  }
}