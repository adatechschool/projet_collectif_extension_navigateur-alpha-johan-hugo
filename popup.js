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

let hours = [];
let minutes = [];
let seconds = [];


const time = (n) => {
    for (i in n) {
        console.log("time", n[0])
       
        // hours.push(n[i]);  
    }
   

}

chrome.storage.local.get().then((result) => {
    let keys = Object.keys(result)
    let values = Object.values(result)
    fillList(keys)
    time(values)
    button.onclick = () => {
        let sel = document.getElementById('urlist');
        let selectedValue = sel.options[sel.selectedIndex].value;
        console.log(selectedValue)
        for (let i in selectedValue){
            for (i in values){
            
                if (n[i] < 60) {
                    seconds.push(n[i]);
                    break;
                    }
                    else if (n[i] >= 60) {
                    minutes.push(n[i] / 60);
                    seconds.push()
                    hours.push(0)
                    }
                    else if (n[i] >= 3600) {
                    hours.push[n[i] / 3600]
            
                    }

            }

            if (selectedValue == i) {
                document.getElementById('result').textContent = hours[i] + " heures " + minutes[i] + " minutes " + seconds[i] + " secondes "
                }

            };
        };
    }
)