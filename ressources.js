// DEBUT COMMENTAIRES BACKGROUND



// //background.js
// var currentUrl = "";
// var timeSpent = {};
// let startTime;

// chrome.tabs.onActivated.addListener(function(activeInfo) {
//   chrome.tabs.get(activeInfo.tabId, function(tab) {
//     // Check if the URL has changed
//     if (tab.url != currentUrl) {
//       // Update the time spent on the previous URL
//       if (currentUrl in timeSpent) {
//         timeSpent[currentUrl] += Date.now() - startTime;
//       } else {
//         timeSpent[currentUrl] = Date.now() - startTime;
//       }

//       // Update the current URL and start time
//       currentUrl = tab.url;
//       startTime = Date.now();
//     }
//   });
//   document.getElementById('compteur') = "Temps de connexion" + startTime;
// });

// // When the browser is closed, save the time spent on the current URL
// chrome.runtime.onSuspend.addListener(function() {
//   if (currentUrl in timeSpent) {
//     timeSpent[currentUrl] += Date.now() - startTime;
//   } else {
//     timeSpent[currentUrl] = Date.now() - startTime;
//   }

//   // Save the time spent to storage
//   chrome.storage.local.set({ timeSpent: timeSpent });
// });

// // background.js
// chrome.browserAction.onClicked.addListener(function() {
//     // Get the time spent from storage
//     chrome.storage.local.get("timeSpent", function(data) {
//       var timeSpent = data.timeSpent;
//       var message = "Time spent on websites:\n\n";
  
//       for (var url in timeSpent) {
//         message += url + ": " + timeSpent[url] + "ms\n";
//       }
  
//       // Display the time spent in a notification
//       chrome.notifications.create("timeSpent", {
//         type: "basic",
//         title: "Time Tracker",
//         message: message,
//         iconUrl: "icon.png"
//       });
//     });
//   });
  

// FIN COMMENTAIRES BACKGROUND


// BALISE SCRIPT DANS HTML //

// <script>
// // Get the time spent from storage
// chrome.storage.local.get("timeSpent", function(data) {
//   var timeSpent = data.timeSpent;

//   for (var url in timeSpent) {
//     // Add a list item for each website
//     var item = document.createElement("li");
//     item.innerText = url + ": " + timeSpent[url] + "ms";
//     document.getElementById("time-spent-list").appendChild(item);
//   }
// });
// </script>

// BALISE SCRIPT DANS HTML //

// const displayCounter = () => {
//     document.getElementById('compteur').innerHTML = seconds;
// }

// setInterval(displayCounter, 1000)

// perfomance.Date()

// com 11/01 16:23


// async function detectYoutubeURL() {
//   let queryOptions = { active: true, lastFocusedWindow: true };
//   let [tab] = await chrome.tabs.query(queryOptions);
//   if (tab.url.startsWith('https://www.youtube.com/')) {
//     console.log('New Youtube page');
//     return true
//   } 
// };

// function moveToTargetTab(activeInfo) {
//   try {
//     getCurrentTab();
//     console.log('new tab selected');
   
       
//   } catch (error) {
//     if (error == 'Error: Tabs cannot be edited right now (user may be dragging a tab).') {
//       setTimeout(() => moveToTargetTab(activeInfo), 50);
//     } else {
//       console.error(error);
//     }
//   }
// }


//for (let i in keys){
    //     const newDiv = document.createElement('div')
    //     const newContent = 'coucou'
    //     newDiv.appendChild(newContent)
    //     const currentDiv = document.getElementById('div1')
    //     document.body.insertBefore(newDiv, currentDiv)
    //     //document.getElementById('storage').innerHTML = keys[i] + values[i]
    // }
