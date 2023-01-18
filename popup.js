const button = document.getElementById('button')
button.innerHTML = 'calculate'

const fillList = (c) => {
    let sel = document.getElementById('urlist');
    for (let i in c) {
    let opt = document.createElement('option');
    opt.innerHTML = c[i];
    opt.value = i;
    sel.appendChild(opt);
    };
};

chrome.storage.local.get().then((result) => {
    let keys = Object.keys(result)
    let values = Object.values(result)
    fillList(keys)
    button.onclick = () => {
        let sel = document.getElementById('urlist');
        let selectedValue = sel.options[sel.selectedIndex].value;
        console.log(selectedValue)
        for (let i in values){
            if (selectedValue == i){
                document.getElementById('result').textContent = values[i]
                }
            };
        };
    }
);


fetch('http://fetedujour.fr/api/v2/xtThCYJ3Q1vqtvSX/text-normal-'+ new Date().toLocaleDateString("fr", {day: "numeric" }) + "-" + new Date().getMonth())
.then((response) => response.text())
.then((data) => document.getElementById("fete-jour").innerHTML = data 
).catch((error) => console.log("Erreur : " + error));

fetch("http://fetedujour.fr/api/v2/xtThCYJ3Q1vqtvSX/text-saints-" + new Date().toLocaleDateString("fr", {day: "numeric" }) + "-" + new Date().getMonth())
.then((response) => response.text())
.then((data) => 
  document.getElementById("contenu").innerHTML = data
).catch((error) => console.log("Erreur : " + error));


