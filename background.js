let seconds = 0;

function counter() {
    seconds++;
}

async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    if (tab.url.startsWith('https://www.youtube.com/')) {
        console.log('youtube detected')
        setInterval(counter, 1000)
    }
    else{
        clearInterval(counter)
    }

    console.log(seconds)
    return tab;
}

chrome.tabs.onActivated.addListener(moveToFirstPosition);

async function moveToFirstPosition(activeInfo) {
  try {
    await chrome.tabs.move(activeInfo.tabId, {index: 0});
    getCurrentTab()
    console.log('new tab selected');
   
       
  } catch (error) {
    if (error == 'Error: Tabs cannot be edited right now (user may be dragging a tab).') {
      setTimeout(() => moveToFirstPosition(activeInfo), 50);
    } else {
      console.error(error);
    }
  }
}