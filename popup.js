(async () => {
    const response = await chrome.runtime.sendMessage({greeting: "hello"});
    // do something with response here, not outside the function
    document.getElementById('compteur').innerHTML = 'Time spent on redstar ' + response.timeSpent + ' seconds'
  })();

