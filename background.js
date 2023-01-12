let seconds = 0;
let interval = null;
let counterActivated = false;

function counter() {
  seconds++
}

async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  console.log(counterActivated)
  let [tab] = await chrome.tabs.query(queryOptions);
  if (tab.url.startsWith('https://www.redstar.fr/') && counterActivated == false) {
    interval = setInterval(counter, 1000);
    console.log("COME ON RED STAR !")
    counterActivated = true;
  }
  else if (tab.url.startsWith('https://www.redstar.fr/') && counterActivated == true) {
    console.log("Retour sur le site Red Star, compteur continue")
  }
  else {
    clearInterval(interval);
    console.log('new tab selected');
    counterActivated = false;
  }
  console.log(seconds);
}

chrome.tabs.onActivated.addListener(getCurrentTab);
chrome.tabs.onUpdated.addListener(getCurrentTab);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  if (request.greeting === "hello")
    console.log('bien reçu');
    sendResponse({timeSpent: seconds}); 
    return true;
  }
);