(async () => {
    const response = await chrome.runtime.sendMessage({greeting: "hello"});

    document.getElementById('compteur1').innerHTML = 'Time spent on redstar ' + response.timeRedStar + ' seconds';
    document.getElementById('compteur2').innerHTML = 'Time spent on nantes ' + response.timeNantes + ' seconds';

    let redStarTotal = parseInt(localStorage.getItem('redStarTotal'));
    let redStarCurrent = response.timeRedStar
    let redStarTotalCurrent = redStarTotal + redStarCurrent

    if (redStarTotalCurrent > redStarTotal){
        localStorage.setItem('redStarTotal', redStarTotalCurrent);
    }
    

    
})();

const redstar = localStorage.getItem('redStarTotal');
document.getElementById('storage').innerHTML = 'Total time spent on redstar ' + redstar + ' seconds';