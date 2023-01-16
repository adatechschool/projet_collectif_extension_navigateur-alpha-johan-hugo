(async () => {
    const response = await chrome.runtime.sendMessage({greeting: "hello"});

    let timeTemp = response.timeRedStar;
    document.getElementById('compteur').innerHTML = 'Time spent on redstar ' + timeTemp + ' seconds';
    
    //let totalRedStar = parseInt(localStorage.getItem('redstar')) + response.timeSpent;
    // if (totalRedStar - response.timeSpent != parseInt(localStorage.getItem('redstar'))){
    //     localStorage.setItem('redstar', totalRedStar.toString());
    // }
    
})();

const redstar = localStorage.getItem('redstar');
document.getElementById('storage').innerHTML = 'Total time spent on redstar ' + redstar + ' seconds';