let seconds = 0;

function counter() {
    seconds++;
}

async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    if (tab.url.startsWith('https://www.youtube.com/') || detectYoutubeURL()) {
        console.log('Youtube detected');
        setInterval(counter, 1000)
    }
    console.log(seconds)
}


async function detectYoutubeURL() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  if (tab.url.startsWith('https://www.youtube.com/')) {
    console.log('New Youtube page');
    return true
  } 
};

function moveToTargetTab(activeInfo) {
  try {
    getCurrentTab();
    console.log('new tab selected');
   
       
  } catch (error) {
    if (error == 'Error: Tabs cannot be edited right now (user may be dragging a tab).') {
      setTimeout(() => moveToTargetTab(activeInfo), 50);
    } else {
      console.error(error);
    }
  }
}

chrome.tabs.onUpdated.addListener(detectYoutubeURL, ["url"]);
chrome.tabs.onActivated.addListener(moveToTargetTab);