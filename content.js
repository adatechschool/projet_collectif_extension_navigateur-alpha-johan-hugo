console.log('coucou');

let popUp = prompt('Working')

let par = document.getElementsByTagName('p');


for (i of par){
    i.style['background-color'] = 'blue';
};


let temps = 0
function start () {
    temps +=1
    console.log(temps)
}

setInterval(start, 1000)