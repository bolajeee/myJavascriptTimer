const duration = document.querySelector('#duration')
const startTimer = document.querySelector('#start')
const stopTimer = document.querySelector('#stop')
const circle = document.querySelector('circle')
const perimeter = circle.getAttribute('r') * Math.PI * 2

circle.setAttribute('stroke-dasharray', perimeter)

let currentOffset = 0
const timer = new Timer(duration, startTimer, stopTimer, {
  onStart () {
    console.log('timer started')
  },
  onTick () {
    circle.setAttribute('stroke-dashoffset', currentOffset)
    currentOffset = currentOffset - 20
  },
  onStop () {
    console.log('timer stopped')
  },
  onComplete () {
    console.log('timer completed')
  }
})
