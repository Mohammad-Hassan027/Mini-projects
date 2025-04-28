const cardArray = [
    {
        name: 'Lexus LC',
        img: './image/Lexus-LC.jpeg'
    },
    {
        name: 'Lamborghini Huracán',
        img: './image/Lamborghini-Huracan.jpeg'
    },
    {
        name: 'Audi R8',
        img: './image/Audi-R8.jpeg'
    },
    {
        name: 'Jaguar F-TYPE',
        img: './image/Jaguar-F-TYPE.jpeg'
    },
    {
        name: 'McLaren 720S',
        img: './image/McLaren-720S.jpeg'
    },
    {
        name: 'Ford Mustang',
        img: './image/Ford-Mustang.jpeg'
    },
    {
        name: 'Lexus LC',
        img: './image/Lexus-LC.jpeg'
    },
    {
        name: 'Lamborghini Huracán',
        img: './image/Lamborghini-Huracan.jpeg'
    },
    {
        name: 'Audi R8',
        img: './image/Audi-R8.jpeg'
    },
    {
        name: 'Jaguar F-TYPE',
        img: './image/Jaguar-F-TYPE.jpeg'
    },
    {
        name: 'McLaren 720S',
        img: './image/McLaren-720S.jpeg'
    },
    {
        name: 'Ford Mustang',
        img: './image/Ford-Mustang.jpeg'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const cardContainer = document.querySelector('.card-container')
const resultDisplay = document.querySelector('#Score')
const msgDisplay = document.querySelector('.msg')
let cardChosen = []
let cardChosenId = []
let cardWon = []

const createCards = () => {
    for (let i = 0; i <= 11; i++) {
        const img = document.createElement('img')
        img.classList.add('img')
        img.setAttribute('src', './image/card.png')
        img.setAttribute('data-id', i)
        img.addEventListener('mousedown', flip)
        cardContainer.appendChild(img)
    }
}


function flip(e) {
    const cardId = e.target.getAttribute('data-id')
    e.target.setAttribute('src', cardArray[cardId].img)
    cardChosen.push(cardArray[cardId].name)
    cardChosenId.push(cardId)
    console.log(cardChosen)
    console.log(e.target)
    if (cardChosen.length == 2) {
        setTimeout(checkMatch , 600)
    }
}

const checkMatch = () => {
    const cards = document.querySelectorAll('img')
    const optionOneCard = cardChosenId[0]
    const optionTwoCard = cardChosenId[1]

    if (cardChosen[0] === cardChosen[1]) {
        msgDisplay.classList.remove('win', 'lose')
        msgDisplay.textContent = 'You chosen correct match!'
        cards[optionOneCard].setAttribute('src', './image/blank.png')
        cards[optionTwoCard].setAttribute('src', './image/blank.png')
        cards[optionOneCard].removeEventListener('mousedown', flip)
        cards[optionTwoCard].removeEventListener('mousedown', flip)
        cardWon.push(cards[optionOneCard])
        let Score = cardWon.length
        resultDisplay.textContent = Score
        msgDisplay.classList.add('win')
    } else {
        msgDisplay.classList.remove('win', 'lose')
        msgDisplay.textContent = 'Try again, incorrect match!'
        cards[optionOneCard].setAttribute('src', './image/card.png')
        cards[optionTwoCard].setAttribute('src', './image/card.png')
        msgDisplay.classList.add('lose')
        console.log(cardChosenId)
    }
    if (cardWon.length === cardArray.length / 2) {
        msgDisplay.textContent = 'Congratulations, You won!'
        msgDisplay.classList.remove('win', 'lose')
        msgDisplay.classList.add('congrats')
    }
    cardChosen = []
    cardChosenId = []
}

createCards();
