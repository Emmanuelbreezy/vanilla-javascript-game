const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');


let result = 0;
let currentTime = timeLeft.textContent;

function randomSquare(){
    square.forEach(className => {
        className.classList.remove('mole');
    })

    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');
    randomPosition.classList.add('cursor-poi');


    hitPostion = randomPosition.id;

}


square.forEach(ele => {
    ele.addEventListener('mouseup',()=>{
        if(ele.id === hitPostion){
            result = result + 1;
            score.textContent = result;
        }
    })
});


function moveMole(){
    let timerId = null;
    timerId = setInterval(randomSquare, 1000); 

}

moveMole();

function countDown(){
    currentTime--;
    timeLeft.textContent = currentTime;

    if(currentTime === 0){
        clearInterval(timerId);
        alert('GAME OVER!! Your final score is'+ result);
    }
}

let timerId = setInterval(countDown,1000);
