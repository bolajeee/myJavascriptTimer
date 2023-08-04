const duration = document.querySelector('#duration')
const startTimer = document.querySelector('#start')
const stopTimer = document.querySelector('#stop')
const circle = document.querySelector('circle')
const perimeter = circle.getAttribute('r') * Math.PI * 2

circle.setAttribute('stroke-dasharray', perimeter)

let period

const timer = new Timer(duration, startTimer, stopTimer, {
  onStart (totalDuration) {
    period = totalDuration
  },
  onTick () {
    circle.setAttribute(
      'stroke-dashoffset',
      (perimeter * this.timeRemaining) / period - perimeter
    )
  },
  onStop () {
    console.log('timer stopped')
  },
  onComplete () {
    console.log('timer completed')
  }
})
