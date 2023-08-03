const duration = document.querySelector('#duration')
const startTimer = document.querySelector('#start')
const stopTimer = document.querySelector('#stop')

const timer = new Timer(duration, startTimer, stopTimer, {
  onStart () {
    console.log('timer started')
  },
  onTick () {
    console.log('timer ticking down')
  },
  onStop () {
    console.log('timer stopped')
  },
  onComplete () {
    console.log('timer completed')
  }
})
