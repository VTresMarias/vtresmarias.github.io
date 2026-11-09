const youtubePlayers = new Map();
const pendingYouTubePlayers = new Map();
let youtubeApiLoading = false;

function attachYouTubePlayer(containerId, playerConfig) {
  const { iframe, events } = playerConfig;

  if (!iframe.isConnected) {
    return;
  }

  pendingYouTubePlayers.delete(containerId);
  youtubePlayers.set(containerId, new YT.Player(iframe, { events }));
}

function loadYouTubeIframeAPI() {
  if (youtubeApiLoading) {
    return;
  }

  youtubeApiLoading = true;
  const apiScript = document.createElement("script");
  apiScript.src = "https://www.youtube.com/iframe_api";
  apiScript.async = true;
  apiScript.onerror = () => {
    youtubeApiLoading = false;
    pendingYouTubePlayers.clear();
    console.error("The YouTube IFrame Player API could not be loaded.");
  };
  document.head.appendChild(apiScript);
}

const previousYouTubeAPIReady = window.onYouTubeIframeAPIReady;
window.onYouTubeIframeAPIReady = () => {
  if (typeof previousYouTubeAPIReady === "function") {
    previousYouTubeAPIReady();
  }

  pendingYouTubePlayers.forEach((playerConfig, containerId) => {
    attachYouTubePlayer(containerId, playerConfig);
  });
};

window.createYouTubePlayer = (containerId, videoId, options = {}) => {
  const container = document.getElementById(containerId);
  if (!container) {
    throw new Error(`YouTube player container "${containerId}" was not found.`);
  }

  if (youtubePlayers.has(containerId)) {
    youtubePlayers.get(containerId).destroy();
    youtubePlayers.delete(containerId);
  }
  pendingYouTubePlayers.delete(containerId);

  const iframe = document.createElement("iframe");
  const playerVars = new URLSearchParams();
  Object.entries(options.playerVars || {}).forEach(([name, value]) => {
    playerVars.set(name, String(value));
  });
  playerVars.set("enablejsapi", "1");
  playerVars.set("origin", window.location.origin);

  iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?${playerVars.toString()}`;
  iframe.title = options.title || "YouTube Embed";
  iframe.referrerPolicy = "strict-origin-when-cross-origin";
  iframe.allow = "autoplay; encrypted-media; picture-in-picture; web-share";
  iframe.allowFullscreen = true;
  iframe.style.display = "block";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "0";
  container.replaceChildren(iframe);

  const playerConfig = { iframe, events: options.events || {} };
  if (window.YT && window.YT.Player) {
    attachYouTubePlayer(containerId, playerConfig);
  } else {
    pendingYouTubePlayers.set(containerId, playerConfig);
    loadYouTubeIframeAPI();
  }
};

window.destroyYouTubePlayer = (containerId) => {
  const player = youtubePlayers.get(containerId);
  if (player) {
    player.destroy();
    youtubePlayers.delete(containerId);
  }

  pendingYouTubePlayers.delete(containerId);
};
