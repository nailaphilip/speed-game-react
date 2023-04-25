'use strict'
const circles = document.querySelectorAll('.circle')
const startButton = document.querySelector('#start')
const endButton = document.querySelector('#end')
const closeButton = document.querySelector('#close')
const scoreSpan = document.querySelector('.score')
const scoreEnd = document.querySelector('.scoreEnd')
const overlay = document.querySelector('.overlay')

let score = 0
let active = 0
let timer   //is called intwo diffrent places
let pace = 1000  //to make the game faster
let rounds = 0 //how many numbers it can find
let mySound

circles.forEach((circle, i) => {       // start the clickcircle event, i - to know which one was clicked
  circle.addEventListener('click', () => clickCircle(i))
}
)

const getRndInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min   //can be outside

const clickCircle = (i) => {   //styling
  if (i !== active) {
    return endGame()
  }

  score += 10
  scoreSpan.textContent = score     
}

const enableCircles = () => {
  circles.forEach(circle => {
    circle.style.pointerEvents = 'auto'
  })
}

const startGame = () => {
  if (rounds >= 10) {
    return endGame()
  }
  mySound = new Audio('/assets/monster.mp3')
  startButton.classList.add('hidden')
  endButton.classList.remove('hidden')

  enableCircles()
  const nextActive = pickNew(active)

  circles[nextActive].classList.toggle('active')
  circles[active].classList.remove('active')

  active = nextActive

  timer = setTimeout(startGame, pace)

  pace -= 10
  rounds++
  console.log(score)
  function pickNew (active) {
    const nextActive = getRndInt(0, 3)
    if (nextActive !== active
    ) {
      return nextActive
    }
    return pickNew(active)
  }
}

const endGame = () => {
  scoreEnd.textContent = score
  endButton.classList.remove('hidden')
  startButton.classList.add('hidden')
  mySound.play()
  overlay.style.visibility = 'visible'
  console.log('game ended')
  clearTimeout(timer)
}

const resetGame = () => {
  window.location.reload()
}

startButton.addEventListener('click', startGame)
endButton.addEventListener('click', endGame)
closeButton.addEventListener('click', resetGame)

