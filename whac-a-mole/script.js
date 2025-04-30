const cells = document.querySelectorAll('.cell')
const StartBtn = document.querySelector('.button')
const Score = document.querySelector('#Score')
const clock = document.querySelector('#timer')

let mole = []
let timeLeft = 30
let points = 0
let moleMover = null
let timer = null
clock.textContent = timeLeft
Score.textContent = points

const randomMole = () => {
    cells.forEach((cell) => {
        cell.classList.remove('mole')
    })

    mole = cells[Math.floor(Math.random() * 9)]
    mole.classList.add('mole')
}

const moveMole = () => {
    moleMover = setInterval(() => {
        randomMole()
    }, 2000)
}

const endGame = () => {
    clearInterval(moleMover)
    clearInterval(timer)
    cells.forEach((cell) => {
        cell.classList.remove('mole')
    })
    alert('Game Over!')
}

const timerMechanism = () => {
    timer = setInterval(() => {
        timeLeft--
        clock.textContent = timeLeft
        if (timeLeft === 0) {
            endGame()
            timeLeft = 30
        }
    }, 1000)
}

const hitMole = (e) => {
    const cellHitted = e.target.getAttribute('id')
    const molePresentAt = mole.getAttribute('id')
    
    if(cellHitted === molePresentAt){
        console.log(`hitted!`);
        points++
        Score.textContent = points
    }
}

StartBtn.addEventListener('click', () => {
    points = 0
    Score.textContent = points
    moveMole()
    timerMechanism()
    cells.forEach((cell) => {
        cell.addEventListener('click', hitMole)
    })
})