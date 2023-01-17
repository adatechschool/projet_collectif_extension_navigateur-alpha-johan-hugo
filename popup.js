const fillList = (c) =>{
    let sel = document.getElementById('urlist');
    let fragment = document.createDocumentFragment();

    c.forEach(function(cle) {
    let opt = document.createElement('option');
    opt.innerHTML = cle;
    opt.value = cle;
    fragment.appendChild(opt);
    });
    sel.appendChild(fragment);
}

chrome.storage.local.get().then(
    (result) => {
        let keys = Object.keys(result)
        let values = Object.values(result)
        //document.getElementById('storage').innerHTML = keys[0]
        
        fillList(keys)
        
}
)

document.getElementById('result').innerHTML = 0
let sel = document.getElementById('urlist');
let selectedValue = sel.options[sel.selectedIndex].value;

if (selectedValue == 'deezer'){
    document.getElementById('result').innerHTML = 1
    }











