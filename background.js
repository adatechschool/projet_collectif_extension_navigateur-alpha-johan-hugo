const URList = [
  {
    url: null,
    activated: false,
    time: 0,
    interval: null
  }
];

function counter(n) {
  URList[n].time++  
  console.log('time increased')
}

function storeLocal(n) {

  let urlName = URList[n].url
  urlName = JSON.stringify(urlName)
  urlName = urlName.replace(/^"(.*)"$/, '$1')
  urlName = urlName.split('.')
  let urlGood = ''

  let passedTime = 0
  let dateObj = new Date();
  let month = dateObj.getUTCMonth() + 1;
  let day = dateObj.getUTCDate();
  let year = dateObj.getUTCFullYear();
  let date = ':' + year + "/" + month + "/" + day
  

  if (urlName[0] == 'www'){
    urlGood = urlName[1] + date
  }
  else if (urlName[0] != 'www'){
    urlGood = urlName[0] + date
  }
  
  chrome.storage.local.get().then(
    (result) => {
      if (result[urlGood] > 0){
        passedTime = result[urlGood]
      }    
      let totalTime = URList[n].time + passedTime
  
    chrome.storage.local.set({ [urlGood]: totalTime }).then(() => {
        URList[n].time = 0
        console.log('temps passé sauvegardé :', urlGood, totalTime)
  });
  }
  );
}

async function timeTracker() {

  detectURL();
  let queryOptions = { active: true, lastFocusedWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  let url = tab.url;
  let urlObject = new URL(url);
  let domain = urlObject.hostname;

  console.log(tab)

  for (let i in URList){

    if (domain == URList[i].url && URList[i].activated == false) {
      URList[i].interval = setInterval(function() {counter(i);}, 1000);
      URList[i].activated = true;
    }

    else if (domain != URList[i].url){
      URList[i].activated = false;
      clearInterval(URList[i].interval);
      storeLocal(i)
    };
    }

    chrome.storage.local.get().then((result) => {
      console.log('result', result)
        })
  };

async function detectURL() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);

  let url = tab.url;
  let urlObject = new URL(url);
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


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log('bien reçu');
    let link = request.link;
    chrome.tabs.create({ url: link })
    return true;
  }
);

chrome.tabs.onActivated.addListener(timeTracker);
chrome.tabs.onUpdated.addListener(timeTracker);
