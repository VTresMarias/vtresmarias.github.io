function mediaPlay(album, file) {
  document.querySelector("audio[mediaExec]").src = `https://media.githubusercontent.com/media/VTresMarias/vtresmarias.github.io/refs/heads/vtm-music/${album}/${file}.mp3`;
  document.querySelector("audio[mediaExec]").play();
}

function albumSel(num) {
  switch (num) {
    case 1: // V三人のマリア: the Music of the Marias🍃🪷🌸
      document.querySelector(".vtmMediaPlayer").innerHTML = `
        <div>
          <div class="vtmAlbum">
            <img src="/assets/images/album/vtm_music.png" alt="V三人のマリア: the Music of the Marias🍃🪷🌸">
          </div>
          <div class="vtmSongSelector">
            <h2><i>
              「the music of the Marias
              <br>
              is the music of all.」
            </i></h2>
            <br>
            <p>
              this compilation contains various discographies that represent the essence of
              the Marias to a broader audience. updates on a semi-regular basis.
              <i>curated by the First Maria🍃.</i>
            </p>
            <br>
            <div class="songSelect">
              <div>
                <span class="material-symbols-rounded" onclick="{ mediaPlay('MusicOfMarias', '01_fairyDance'); }">play_arrow</span>
                <div style="padding-left: 1rem;">
                  <p style="font-weight: bold;">Fairy Dance</p>
                  <p style="font-size: 0.75em; font-style: italic;">Burcu Gönül&ensp;&bull;&ensp;from Siren, Mermaid and Fairy Humming, Vol. I</p>
                </div>
              </div>
              <div>
                <span class="material-symbols-rounded" onclick="{ mediaPlay('MusicOfMarias', '02_storyTell'); }">play_arrow</span>
                <div style="padding-left: 1rem;">
                  <p style="font-weight: bold;">Stories to Tell</p>
                  <p style="font-size: 0.75em; font-style: italic;">Burcu Gönül&ensp;&bull;&ensp;from Siren, Mermaid and Fairy Humming, Vol. I</p>
                </div>
              </div>
              <div>
                <span class="material-symbols-rounded" onclick="{ mediaPlay('MusicOfMarias', '03_resnaAtelier'); }">play_arrow</span>
                <div style="padding-left: 1rem;">
                  <p style="font-weight: bold;">Atelier of the Starry Sky</p>
                  <p style="font-size: 0.75em; font-style: italic;">Kensuke Inage&ensp;&bull;&ensp;from Atelier Resleriana: Forgotten Alchemy and the Polar Night Liberator Original Soundtrack</p>
                </div>
              </div>
              <div>
                <span class="material-symbols-rounded" onclick="{ mediaPlay('MusicOfMarias', '04_enyaAniron'); }">play_arrow</span>
                <div style="padding-left: 1rem;">
                  <p style="font-weight: bold;">Aniron</p>
                  <p style="font-size: 0.75em; font-style: italic;">Burcu Gönül&ensp;&bull;&ensp;from Aniron (Lord of the Rings)</p>
                </div>
              </div>
              <div>
                <span class="material-symbols-rounded" onclick="{ mediaPlay('MusicOfMarias', '05_432Hz'); }">play_arrow</span>
                <div style="padding-left: 1rem;">
                  <p style="font-weight: bold;">Drifting at 432 Hz</p>
                  <p style="font-size: 0.75em; font-style: italic;">Unicorn Heads&ensp;&bull;&ensp;from YouTube Audio Library</p>
                </div>
              </div>
              <div>
                <span class="material-symbols-rounded" onclick="{ mediaPlay('MusicOfMarias', '06_mother'); }">play_arrow</span>
                <div style="padding-left: 1rem;">
                  <p style="font-weight: bold;">Mother's Sorrow</p>
                  <p style="font-size: 0.75em; font-style: italic;">Horror Shop Games&ensp;&bull;&ensp;from Mother Soundtrack</p>
                </div>
              </div>
              <div>
                <span class="material-symbols-rounded" onclick="{ mediaPlay('MusicOfMarias', '07_aradiaTheme'); }">play_arrow</span>
                <div style="padding-left: 1rem;">
                  <p style="font-weight: bold;">Maintheme 1</p>
                  <p style="font-size: 0.75em; font-style: italic;">D-lis&ensp;&bull;&ensp;from Night of Revenge Soundtrack</p>
                </div>
              </div>
              <div>
                <span class="material-symbols-rounded" onclick="{ mediaPlay('MusicOfMarias', '08_maria'); }">play_arrow</span>
                <div style="padding-left: 1rem;">
                  <p style="font-weight: bold;">Maria</p>
                  <p style="font-size: 0.75em; font-style: italic;">Kim Ah-joong&ensp;&bull;&ensp;from 200 Pounds Beauty - Original Motion Picture Soundtrack</p>
                </div>
              </div>
              <div>
                <span class="material-symbols-rounded" onclick="{ mediaPlay('MusicOfMarias', '09_mariaOrch2026'); }">play_arrow</span>
                <div style="padding-left: 1rem;">
                  <p style="font-weight: bold;">Maria (2026 Orchestral Ver.)</p>
                  <p style="font-size: 0.75em; font-style: italic;">thebelovedmoon VS Kim Ah-joong&ensp;&bull;&ensp;from VTresMarias' Musical Selections</p>
                </div>
              </div>
              <div>
                <span class="material-symbols-rounded" onclick="{ mediaPlay('MusicOfMarias', '10_oshiLaLuna'); }">play_arrow</span>
                <div style="padding-left: 1rem;">
                  <p style="font-weight: bold;">La Luna</p>
                  <p style="font-size: 0.75em; font-style: italic;">Shizaki Kanon&ensp;&bull;&ensp;from La Luna</p>
                </div>
              </div>
              <div>
                <span class="material-symbols-rounded" onclick="{ mediaPlay('MusicOfMarias', '11_heartWillBeKnown'); }">play_arrow</span>
                <div style="padding-left: 1rem;">
                  <p style="font-weight: bold;">My Heart Will Be Known</p>
                  <p style="font-size: 0.75em; font-style: italic;">PRZM PILOTs & hiroki&ensp;&bull;&ensp;from Venus Vacation PRISM - DEAD OR ALIVE Xtreme - Soundtrack</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
      break;
    case 2: // VTresMarias' Musical Selections
      document.querySelector(".vtmMediaPlayer").innerHTML = `
        <div>
          <div class="vtmAlbum">
            <img src="/assets/images/album/vtm_cover.png" alt="VTresMarias' Musical Selections">
          </div>
          <div class="vtmSongSelector">
            <h2><i>
              an orchestral accompaniment
              <br>
              unlike any other..
            </i></h2>
            <br>
            <p>
              this debut cover album takes our selected discographies into long-form
              maximalist remakes that evoke our significance as a VTuber Collective.
              <i>arranged by the First Maria🍃.</i>
            </p>
            <br>
            <p><b><i>
              this album releases on the 4th Anniversary of the Collective -- 27 Dec 2026.
            </i></b></p>
            <br>
            <div class="songSelect">
              <div>
                <span class="material-symbols-rounded" onclick="{ mediaPlay('MusicalSelections', '01_mariaOrch2026'); }">play_arrow</span>
                <div style="padding-left: 1rem;">
                  <p style="font-weight: bold;">Maria (2026 Orchestral Ver.)</p>
                  <p style="font-size: 0.75em; font-style: italic;">thebelovedmoon VS Kim Ah-joong&ensp;&bull;&ensp;official anthem of VTresMarias</p>
                </div>
              </div>
              <div>
                <span class="material-symbols-rounded" onclick="{ mediaPlay('MusicalSelections', '02_worldTree2026'); }">play_arrow</span>
                <div style="padding-left: 1rem;">
                  <p style="font-weight: bold;">Yearning, a WorldTree Orchestral Medley (2026 Ver.)</p>
                  <p style="font-size: 0.75em; font-style: italic;">thebelovedmoon VS pOn Studio&ensp;&bull;&ensp;official anthem of thebelovedmoon and associates (tbmassoc)</p>
                </div>
              </div>
              <div>
                <!-- <span class="material-symbols-rounded" onclick="{ mediaPlay('MusicalSelections', '03_heartWillBeKnownOrch'); }">play_arrow</span> -->
                <span class="material-symbols-rounded" onclick="{ alert('coming soon..'); }">play_arrow</span>
                <div style="padding-left: 1rem;">
                  <p style="font-weight: bold;">My Heart Will Be Known (Orchestral Arrange)</p>
                  <p style="font-size: 0.75em; font-style: italic;">thebelovedmoon VS PRZM PILOTs, hiroki</p>
                </div>
              </div>
              <div>
                <!-- <span class="material-symbols-rounded" onclick="{ mediaPlay('MusicalSelections', '04_aradiaRemake'); }">play_arrow</span> -->
                <span class="material-symbols-rounded" onclick="{ alert('coming soon..'); }">play_arrow</span>
                <div style="padding-left: 1rem;">
                  <p style="font-weight: bold;">Night of Revenge, an Orchestral Medley</p>
                  <p style="font-size: 0.75em; font-style: italic;">thebelovedmoon VS D-lis</p>
                </div>
              </div>
              <div>
                <!-- <span class="material-symbols-rounded" onclick="{ mediaPlay('MusicalSelections', '05_motherRemake2026'); }">play_arrow</span> -->
                <span class="material-symbols-rounded" onclick="{ alert('coming soon..'); }">play_arrow</span>
                <div style="padding-left: 1rem;">
                  <p style="font-weight: bold;">Mother loves you, always. (2026 Remake)</p>
                  <p style="font-size: 0.75em; font-style: italic;">thebelovedmoon VS Horror Shop Games</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
      break;
    default: return event.stopPropagation();
  }
  document.querySelector(".vtmMediaPlayer").style.display = "block";
  document.querySelector(".vtmMediaPlayer").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}