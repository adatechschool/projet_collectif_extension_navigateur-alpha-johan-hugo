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
)