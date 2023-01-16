let seconds = 0;

function counter() {
  seconds++
}

let interval = null;
let counterActivated = false;

async function getCurrentTab() {
  
    detectURL();
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
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

let tabURL = [];

async function detectURL() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);

  tabURL.push(tab.url);

  for (i in tabURL) {
    for (j in tabURL) {
      if (tabURL[i] == tabURL[j] && i != j) 
      {
        console.log("i",tabURL[i],"j",tabURL[j])
        tabURL.splice(j, 1);
        console.log('tabURL', tabURL);
      };
      // if (tab.URL[i] == tabURL[j]) {
      // console.log("doublon", tab.URL[j])
      // }
    }
    }
  }

chrome.tabs.onActivated.addListener((tab) => {
  getCurrentTab();
  }
  );

chrome.tabs.onUpdated.addListener(getCurrentTab);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting === "hello")
      console.log('bien reçu');
      sendResponse({timeSpent: seconds}); 
      return true;
    }
);