const button = document.getElementById('button')
button.innerHTML = 'calculate'
document.getElementById('result').textContent = 0

const fillList = (c) => {
    let sel = document.getElementById('urlist');
    for (let i in c) {
    let opt = document.createElement('option');
    opt.innerHTML = c[i];
    opt.value = c[i];
    sel.appendChild(opt);
    };
};

chrome.storage.local.get().then((result) => {
    console.log(result)
    
    let ourObject = []
    let keys = Object.keys(result)
    let values = Object.values(result)
    let date = []
    let url = []
    let url2 = []

    for (let i  = 0 ; i < keys.length; i++){
        let cool = keys[i].split(':')
        ourObject.push({
            url: cool[0],
            time: values[i],
            date: cool[1] }
            );
        date.push(cool[1])
        if(url2.includes(cool[0]) == false){
            url.push(cool[0])
            url2.push(cool[0])
        }
    }
    console.log(ourObject)

    let sel = document.getElementById('date');
    let date2 = []
    for (let i in date) {
            if (date2.includes(date[i]) == false){
                date2.push(date[i])
                let opt = document.createElement('option');
                opt.innerHTML = date[i];
                opt.value = date[i];
                sel.appendChild(opt);
            }
        }
    fillList(url)
    
    button.onclick = () => {
        document.getElementById('result').textContent = 'No data on this day'
        let list = document.getElementById('urlist');
        let selectedValue = list.options[list.selectedIndex].value;
        let selectedDate = sel.options[sel.selectedIndex].value;
        console.log(selectedValue);
        console.log(selectedDate);
        for (let i = 0 ; i < ourObject.length; i++){
            if (selectedValue == ourObject[i].url && selectedDate == ourObject[i].date){
                document.getElementById('result').textContent = ourObject[i].time;
                }
            };
        };
    }
)

fetch("https://en.wikipedia.org/api/rest_v1/feed/onthisday/events/"+ new Date().toLocaleDateString("fr-FR", {month: "numeric" }) +"/"+ new Date().toLocaleDateString("fr-FR", {day: "numeric" }))
.then((response) => response.json())
.then((data) => {
    let text = data.events[2].text;
    let imgEl = document.createElement("img");
    let image = data.events[2].pages[0].originalimage.source;
    let url = document.createElement("a");
    let information = data.events[2].pages[0].content_urls.desktop.page;

    console.log(data.events[2]);
    document.getElementById("contenu").innerHTML = text;
    imgEl.src = image;
    imgEl.style.height = "90px";
    imgEl.style.width = "105px";
    document.getElementById("image").appendChild(imgEl);
    url.href = information
    url.innerHTML = "Information"
    document.getElementById("info").appendChild(url);
    console.log(typeof information)
    url.onclick = async () => {
        const response = await chrome.runtime.sendMessage({link: information});
        //const open = await chrome.runtime.sendMessage({open: "ok"});
    }
}).catch((error) => console.log("Erreur : " + error));


