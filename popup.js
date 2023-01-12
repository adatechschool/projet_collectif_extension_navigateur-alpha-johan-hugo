(async () => {
    const response = await chrome.runtime.sendMessage({greeting: "hello"});
    document.getElementById('compteur').innerHTML = 'Time spent on Youtube ' + response.timeSpent + ' seconds'
  })();

