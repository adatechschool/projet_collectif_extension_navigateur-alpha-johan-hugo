const URList = [
  {
    url: 'https://www.redstar.fr/',
    activated: false,
    time: 0,
    interval: null
  }, 
  {
    url: 'https://www.fcnantes.com/',
    activated: false,
    time: 0,
    interval: null 
  } 
];


function counter(n) {
  URList[n].time++  
  console.log('time increased')
}

async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  console.log('counter redstar :', URList[0].time, 'nantes counter :', URList[1].time)
  let [tab] = await chrome.tabs.query(queryOptions);

  for (let i in URList){
    if (tab.url.startsWith(URList[i].url) && URList[i].activated == false) {
      URList[i].interval = setInterval(function() {counter(i);}, 1000);
      console.log("COME ON RED STAR !")
      URList[i].activated = true;
    }
    else if (!tab.url.startsWith(URList[i].url)){
      console.log('redstar boolean = ', URList[0].activated, 'nantes boolean = ', URList[1].activated)
      comm(i)
      URList[i].activated = false;
      clearInterval(URList[i].interval);
    }
  }
}

chrome.tabs.onActivated.addListener(getCurrentTab);
chrome.tabs.onUpdated.addListener(getCurrentTab);

const comm = (n)=>{
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
    if (request.greeting === "hello")
      console.log('bien reçu');
      sendResponse({timeRedStar: URList[0].time}); 
      sendResponse({timeNantes: URList[1].time}); 
      URList[n].time = 0
      return true;
    }
  );
  }


