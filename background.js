let seconds = 0;

function counter() {
    seconds++;
  }

let interval = null;



chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === "messageSent")
    {
      console.log('bien reçu')
    }
    sendResponse({farewell: "goodbye"});
    return true 
  }
);


async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    if (tab.url.startsWith('https://www.youtube.com/')) {
        console.log('Youtube detected');
        interval = setInterval(counter, 1000)
    }
    else {
      clearInterval(interval);
      console.log('new tab selected');
      if (seconds != 0){
         
    }
    console.log(seconds)
}
}


//chrome.tabs.onCreated.addListener(create);
chrome.tabs.onActivated.addListener(getCurrentTab);
//chrome.tabs.onUpdated.addListener(getCurrentTab);






