// (async () => {
//     const response = await chrome.runtime.sendMessage({greeting: "hello"});

//     let URList = response.list;
//     document.getElementById('compteur').innerHTML = 'Time spent on ' + URList[1].url + ' ' + URList[1].time + ' seconds';

//     let checkMatch = false
//     for (i in URList) {
//         localStorage.setItem(URList[i].url, URList[i].time)
//     }
    
// })();

chrome.storage.local.get().then(
    (result) => {
        let arrayDisplay = []
        let keys = [Object.keys(result)]
        let values = [Object.values(result)]
        arrayDisplay.push({cles: keys, valeur: values})
        for (let i in arrayDisplay){
        document.getElementById('storage').innerHTML += obj[i].cles
    }
    }
)




