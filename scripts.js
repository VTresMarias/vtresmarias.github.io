function splash() {
  setTimeout(function() {
    document.getElementById("removeLoad").remove();
    document.getElementById("removeLoadBlock").style.height = "0";
  }, 1000);
}

function navBarOpen() {
  document.getElementById("mainPage").style.pointerEvents = "none";
  document.getElementById("mainPage").style.userSelect = "none";
  document.getElementById("navPanel").style.width = "500px";
  document.getElementById("navPanel").style.padding = "25px";
}
function navBarClose() {
  document.getElementById("mainPage").style.pointerEvents = "initial";
  document.getElementById("mainPage").style.userSelect = "initial";
  document.getElementById("navPanel").style.width = "0";
  document.getElementById("navPanel").style.padding = "25px 0";
}

// tarot readings

var Maria1 = `
  <h2>我慢 ～Perseverance～</h2>
  <p>
    a period of transformation. learning from past lives and adapting
    to this life's experiences. emerge and devote yourself to the
    change.
  <p>
  <p>tarot card reader: MystearicaVT</p>
  <br>
  <img class="mariaSymbol" src="media/svg/symbol/symbol_aga.svg" alt="">
`;
var Maria2 = `
  <h2>復活 ～Rebirth～</h2>
  <p>
    keep paving the path that calls to you. keep moving forward, don't
    turn your back. you have the support and guidance you need. trust
    the process!
  <p>
  <p>tarot card reader: MystearicaVT</p>
  <br>
  <img class="mariaSymbol" src="media/svg/symbol/symbol_aura.svg" alt="">
`;
var Maria3 = `
  <h2>落ち着き ～Stability～</h2>
  <p>
    a moment to reflect on your boundaries, whether they be with friends,
    family, work etc. check on where you should be saying "no" to
    realign with yourself and energy.
  <p>
  <p>tarot card reader: MystearicaVT</p>
  <br>
  <img class="mariaSymbol" src="media/svg/symbol/symbol_hina.svg" alt="">
`;
function tarotPanelOpen(description) {
  document.getElementById("tarotInfo").innerHTML = description;
  document.getElementById("mainPage").style.pointerEvents = "none";
  document.getElementById("mainPage").style.userSelect = "none";
  document.getElementById("tarotPanel").style.whiteSpace = "normal";
  document.getElementById("tarotPanel").style.width = "500px";
  document.getElementById("tarotPanel").style.padding = "25px";
  document.getElementById("tarotPanel").style.overflow = "auto";
}
function tarotPanelClose() {
  document.getElementById("mainPage").style.pointerEvents = "initial";
  document.getElementById("mainPage").style.userSelect = "initial";
  document.getElementById("tarotPanel").style.whiteSpace = "nowrap";
  document.getElementById("tarotPanel").style.width = "0";
  document.getElementById("tarotPanel").style.padding = "25px 0";
  document.getElementById("tarotPanel").style.overflow = "hidden";
}

// MIT

function MIT() {
  alert(
    "MIT License\n\n" +
    "Copyright (c) 2022 thebelovedmoon and associates (tbmassoc)\n\n" +
    "Permission is hereby granted, free of charge, to any person obtaining a copy " +
    "of this software and associated documentation files (the \"Software\"), to deal " +
    "in the Software without restriction, including without limitation the rights " +
    "to use, copy, modify, merge, publish, distribute, sublicense, and/or sel l" +
    "copies of the Software, and to permit persons to whom the Software is " +
    "furnished to do so, subject to the following conditions:\n\n" +
    "The above copyright notice and this permission notice shall be included in all " +
    "copies or substantial portions of the Software.\n\n" +
    "THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR " +
    "IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, " +
    "FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE " +
    "AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER " +
    "LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, " +
    "OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE " +
    "SOFTWARE."
  );
}

var MIT = `
  <div style="text-align: left;">
    <p>MIT License</p>
    <p>Copyright (c) 2022 thebelovedmoon and associates (tbmassoc)</p>
    <p>
      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:
    </p>
    <p>
      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software. 
    </p>
    <p>
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.
    </p>
  </div>
`;