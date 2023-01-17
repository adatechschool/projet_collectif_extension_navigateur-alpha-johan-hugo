const URList = [
  {
    url: null,
    activated: false,
    time: 0,
    interval: null
  }, 
];

function counter(n) {
  URList[n].time++  
  console.log('time increased')
}

async function timeTracker() {

  detectURL();
  let queryOptions = { active: true, lastFocusedWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  let url = tab.url;
  let urlObject = new URL(url);
  let domain = urlObject.hostname;

  for (let i in URList){
    if (domain == URList[i].url && URList[i].activated == false) {
      URList[i].interval = setInterval(function() {counter(i);}, 1000);
      URList[i].activated = true;
    }
    else if (domain != URList[i].url){
      URList[i].activated = false;
      clearInterval(URList[i].interval);
    }
  };
};


async function detectURL() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);

  // Exemple d'URL
  let url = tab.url;
  // Créer un objet URL à partir de l'URL
  let urlObject = new URL(url);
  // Récupérer le nom de domaine à partir de l'objet URL
  let domain = urlObject.hostname;

  let checkCorrespondance = false

  for (i in URList) {
    if (domain == URList[i].url) {
      checkCorrespondance = true;
      }
  }

  if (checkCorrespondance == false && domain != "newtab" && domain != 'extensions'){
    URList.push({
              url: domain,
              activated: false,
              time: 0,
              interval: null }
              );
    checkCorrespondance = false;
  };
  console.log(URList);
};

chrome.tabs.onActivated.addListener(timeTracker);
chrome.tabs.onUpdated.addListener(timeTracker);

const comm = () => {
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
    if (request.greeting === "hello")
      console.log('bien reçu');
      //sendResponse({timeRedStar: URList[0].time});
      return true;
    }
  );
};