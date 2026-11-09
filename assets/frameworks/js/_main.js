  const emojiSegmenter = typeof Intl.Segmenter === "function" ? new Intl.Segmenter(undefined, { granularity: "grapheme" }) : null;
const emojiPattern = /[\p{Extended_Pictographic}\p{Emoji_Presentation}\p{Regional_Indicator}\u20E3]/u;

function styleEmojis(root) {
  if (!emojiSegmenter) { return; }
  
  const textNodes = [];
  if (root.nodeType === Node.TEXT_NODE) {
    textNodes.push(root);
  } else {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) { textNodes.push(walker.currentNode); }
  }
  
  textNodes.forEach(textNode => {
    const parent = textNode.parentElement;
    if (!parent || parent.closest("script, style, noscript, textarea, title, option, svg, math, .emoji") || parent.isContentEditable) { return; }
    
    const segments = Array.from(emojiSegmenter.segment(textNode.data));
    if (!segments.some(({ segment }) => emojiPattern.test(segment))) { return; }
    
    const fragment = document.createDocumentFragment();
    segments.forEach(({ segment }) => {
      if (emojiPattern.test(segment)) {
        const emoji = document.createElement("span");
        emoji.className = "emoji";
        emoji.textContent = segment;
        fragment.appendChild(emoji);
      } else {
        fragment.appendChild(document.createTextNode(segment));
      }
    });
    textNode.replaceWith(fragment);
  });
}

// root launch args
function init() {
  styleEmojis(document.body);
  new MutationObserver(records => {
    records.forEach(record => {
      if (record.type === "characterData") {
        styleEmojis(record.target);
      } else {
        record.addedNodes.forEach(styleEmojis);
      }
    });
  }).observe(document.body, { childList: true, characterData: true, subtree: true });

  // init nextgen loader (the segoeLoaders Project)
  const segoeLdrrrr = document.createElement("script");
  segoeLdrrrr.src = "https://cdn.jsdelivr.net/gh/thebelovedmoon/segoeLoaders@rebuild/assets/js/segoeLoaders.js";
  segoeLdrrrr.type = "text/javascript";
  segoeLdrrrr.onload = () => {
    if (typeof window.segoeLdrs === "function") { window.segoeLdrs(".segLdrTrial"); }
  };
  document.head.appendChild(segoeLdrrrr);

  const finishInit = () => {
    pageInit(); // pageInit() args
    removeSplash();
    cookieDetect();
  };

  // QRCODE GENERATOR, load only if there's data-requiresqr in body
  if (document.body.dataset.requiresqr == "true") {
    const qrRequires = document.createElement("script");
    qrRequires.src = "https://cdn.jsdelivr.net/npm/qrcode_js/qrcode.min.js";
    qrRequires.type = "text/javascript";
    qrRequires.onload = finishInit;
    document.head.appendChild(qrRequires);
    return;
  }

  finishInit();
  
}

function removeSplash() {
  setTimeout(() => {
    document.querySelector("#loaderFade").style.opacity = "0";
    setTimeout(() => {
      document.querySelector("#loaderFade").style.display = "none";
      document.querySelector("#loadBlock").style.height = "0";
      setTimeout(() => { document.querySelector("#loadBlock").remove(); }, 1250);
    }, 1250);
  }, 1250);
}