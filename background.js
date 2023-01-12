let seconds = 0;
let interval = null;

function counter() {
    seconds++;
  }

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

chrome.tabs.onActivated.addListener(getCurrentTab);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting === "hello")
      console.log('bien reçu');
      sendResponse({timeSpent: seconds}); 
      return true;
    }
);




