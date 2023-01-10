let seconds = 0;


function counter() {
    seconds++;
    document.getElementById('compteur').innerHTML = seconds;
}


setInterval(counter, 1000)