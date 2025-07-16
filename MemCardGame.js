const gameBoard = document.getElementById('game-board');
const movesDisplay = document.getElementById('moves');
const timeDisplay = document.getElementById('time');
const levelDisplay = document.getElementById('level');

let cards = [
    'Virat Kohli', 'Virat Kohli', 'MS Dhoni', 'MS Dhoni',
    'Sachin Tendulkar', 'Sachin Tendulkar', 'Rohit Sharma', 'Rohit Sharma',
    'Yuvraj Singh', 'Yuvraj Singh', 'Jasprit Bumrah', 'Jasprit Bumrah',
    'Hardik Pandya', 'Hardik Pandya', 'KL Rahul', 'KL Rahul'
];

let flippedCards = [];
let matchedCards = [];
let moves = 0;
let time = 0;
let level = 1;
let timer;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createCard(value) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.value = value;
    card.addEventListener('click', handleCardClick);
    return card;
}

function handleCardClick(event) {
    const card = event.target;

    if (flippedCards.length < 2 && !card.classList.contains('flipped')) {
        card.classList.add('flipped');
        card.textContent = card.dataset.value;
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            moves++;
            movesDisplay.textContent = moves;
            checkMatch();
        }
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.value === card2.dataset.value) {
        matchedCards.push(card1, card2);
        flippedCards = [];
        if (matchedCards.length === cards.length) {
            clearInterval(timer);
            alert(`Level ${level} complete!`);
            level++;
            levelDisplay.textContent = level;
            startGame();
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card1.textContent = '';
            card2.classList.remove('flipped');
            card2.textContent = '';
            flippedCards = [];
        }, 1000);
    }
}

function startTimer() {
    time = 0;
    timer = setInterval(() => {
        time++;
        timeDisplay.textContent = time;
    }, 1000);
}

function startGame() {
    gameBoard.innerHTML = '';
    matchedCards = [];
    flippedCards = [];
    moves = 0;
    movesDisplay.textContent = moves;
    timeDisplay.textContent = 0;
    shuffle(cards);
    cards.forEach(value => {
        const card = createCard(value);
        gameBoard.appendChild(card);
    });
    startTimer();
}

startGame();