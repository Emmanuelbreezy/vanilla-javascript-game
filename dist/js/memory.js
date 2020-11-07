document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'fries',
        img: '../images/memoryGame/fries.png'
      },
      
      {
        name: 'cheeseburger',
        img: '../images/memoryGame/cheeseburger.png'
      },

      {
        name: 'ice-cream',
        img: '../images/memoryGame/ice-cream.png'
      },

      {
        name: 'pizza',
        img: '../images/memoryGame/pizza.png'
      },
      {
        name: 'milkshake',
        img: '../images/memoryGame/milkshake.png'
      },

      {
        name: 'hotdog',
        img: '../images/memoryGame/hotdog.png'
      },

      {
        name: 'fries',
        img: '../images/memoryGame/fries.png'
      },
      {
        name: 'cheeseburger',
        img: '../images/memoryGame/cheeseburger.png'
      },

      {
        name: 'ice-cream',
        img: '../images/memoryGame/ice-cream.png'
      },
      {
        name: 'pizza',
        img: '../images/memoryGame/pizza.png'
      },

      {
        name: 'milkshake',
        img: '../images/memoryGame/milkshake.png'
      },

      {
        name: 'hotdog',
        img: '../images/memoryGame/hotdog.png'
      },

      {
        name: 'fries',
        img: '../images/memoryGame/fries.png'
      },
      {
        name: 'cheeseburger',
        img: '../images/memoryGame/cheeseburger.png'
      },

      {
        name: 'ice-cream',
        img: '../images/memoryGame/ice-cream.png'
      },
      {
        name: 'pizza',
        img: '../images/memoryGame/pizza.png'
      },

      {
        name: 'milkshake',
        img: '../images/memoryGame/milkshake.png'
      },

      {
        name: 'hotdog',
        img: '../images/memoryGame/hotdog.png'
      },
      {
        name: 'fries',
        img: '../images/memoryGame/fries.png'
      },
      
      {
        name: 'cheeseburger',
        img: '../images/memoryGame/cheeseburger.png'
      },

      {
        name: 'ice-cream',
        img: '../images/memoryGame/ice-cream.png'
      },

      {
        name: 'pizza',
        img: '../images/memoryGame/pizza.png'
      },
      {
        name: 'milkshake',
        img: '../images/memoryGame/milkshake.png'
      },

      {
        name: 'hotdog',
        img: '../images/memoryGame/hotdog.png'
      },
    ];


cardArray.sort(() => 0.5 - Math.random());

const grid_layout = document.querySelector('.grid_layout');
const resultDisplay = document.querySelector('#result');
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];
// create your board

let createBoard = () => {
  for( let i = 0; i < cardArray.length; i++ ){
    var card = document.createElement('img');
    card.setAttribute('src','../images/memoryGame/blank.png');
    card.classList.add('cursor-pointer');
    card.classList.add('p-1');
    card.setAttribute('data-id',i);
    card.addEventListener('click', flipcard);
    grid_layout.appendChild(card);
  }
}

// flip your card
function flipcard(){
  var cardId = this.getAttribute('data-id');
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenId.push(cardId);
  this.setAttribute('src', cardArray[cardId].img);
  if(cardsChosen.length === 2){
    setTimeout(checkForMatch, 500);
  }

}


  //check for matches
 function checkForMatch(){
  var cards = document.querySelectorAll('img');
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];

  if (cardsChosen[0] === cardsChosen[1]){
    alert('You found a match');
    cards[optionOneId].setAttribute('src', '../images/memoryGame/white.png');
    cards[optionTwoId].setAttribute('src', '../images/memoryGame/white.png');
    //cards[optionTwoId].removeEventListener('click');
    //card.classList.remove('cursor-pointer');
    cardsWon.push(cardsChosen);
console.log(cardsWon,'cardsWon');
  }else{
    cards[optionOneId].setAttribute('src','../images/memoryGame/blank.png');
    cards[optionTwoId].setAttribute('src','../images/memoryGame/blank.png');
    
    alert('Sorry, try again');
  }

  cardsChosen = [];
  cardsChosenId = [];
  resultDisplay.textContent = cardsWon.length;
  if(cardsWon.length === cardArray.length/2){
    resultDisplay.textContent = 'Congratulations! You found them all!'
  }
}

createBoard();



});