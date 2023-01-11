let seconds = 0;

function counter() {
    seconds++;
    document.getElementById('compteur').innerHTML = seconds
}

let interval = null;

async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    if (tab.url.startsWith('https://www.youtube.com/')) {
        console.log('Youtube detected');
        // seconds = 0:
        interval = setInterval(counter, 1000)
    }
    else {
      clearInterval(interval);
      console.log('new tab selected');
    }
    console.log(seconds)
}
chrome.tabs.onUpdated.addListener(getCurrentTab);
// chrome.tabs.onActivated.addListener(getCurrentTab);