document.getElementById('compteur').innerHTML = 'yoyoyo'




//   (async () => {
//     const response = await chrome.runtime.sendMessage({greeting: "hello"});
//     // do something with response here, not outside the function
//     console.log(response);
//   })();


function sendMessagio(){

  chrome.runtime.sendMessage(
    {
        message: "messageSent"
    }, (res) => {console.log(res.status)})

}
sendMessagio()

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (sendResponse.farewell === "goodbye")
        {
            document.getElementById('compteur').innerHTML = 'réussi'
        }
    }
)