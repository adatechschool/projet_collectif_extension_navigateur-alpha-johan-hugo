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