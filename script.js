function updateText(advice) {
    document.querySelector(".advice-text").textContent = advice; 
}

function updateAdviceNum(num) {
    document.querySelector(".advice-num").textContent = num
}

function fetchData() {
    const endpoint = "https://api.adviceslip.com/advice"
    fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
        updateText(data.slip.advice);
        updateAdviceNum(data.slip.id);
    })
}

fetchData(); 

document.querySelector(".container div").addEventListener("click", fetchData); 