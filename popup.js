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


fetch('http://fetedujour.fr/api/v2/xtThCYJ3Q1vqtvSX/text-normal-'+ new Date().toLocaleDateString("fr", {day: "numeric" }) + "-" + new Date().getMonth())
.then((response) => response.text())
.then((data) => document.getElementById("fete-jour").innerHTML = data 
).catch((error) => console.log("Erreur : " + error));

fetch("http://fetedujour.fr/api/v2/xtThCYJ3Q1vqtvSX/text-saints-" + new Date().toLocaleDateString("fr", {day: "numeric" }) + "-" + new Date().getMonth())
.then((response) => response.text())
.then((data) => 
  document.getElementById("contenu").innerHTML = data
).catch((error) => console.log("Erreur : " + error));