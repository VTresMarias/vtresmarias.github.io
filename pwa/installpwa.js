// code: https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/How_to/Trigger_install_prompt 

let instPrompt = null;
const instBtn = document.querySelector("#instPWA");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  instPrompt = event;
  instBtn.removeAttribute("hidden");
});

instBtn.addEventListener("click", async () => {
  if (!instPrompt) {
    return;
  }
  const result = await instPrompt.prompt();
  console.log(`Install prompt was: ${result.outcome}`);
  disableInAppInstallPrompt();
});

function disableInAppInstallPrompt() {
  instPrompt = null;
  instBtn.setAttribute("hidden", "");
}

window.addEventListener("appinstalled", () => {
  disableInAppInstallPrompt();
});

function disableInAppInstallPrompt() {
  instPrompt = null;
  instBtn.setAttribute("hidden", "");
}