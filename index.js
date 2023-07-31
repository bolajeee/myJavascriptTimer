class Timer {
  constructor (duration, startTimer, stopTimer) {
    this.duration = duration
    this.startTimer = startTimer
    this.stopTimer = stopTimer

    this.startTimer.addEventListener('click', this.start)
    this.stopTimer.addEventListener('click', this.stop)
  }

  start = () => {
    this.tick()
    this.interval = setInterval(this.tick, 1000)
  }

  stop = () => {
    clearInterval(this.interval)
  }

  tick = () => {
    if (this.timeRemaining <= 0) {
      this.stop
    } else {
      this.timeRemaining = this.timeRemaining - 1
    }
  }

  get timeRemaining () {
    return parseFloat(this.duration.value)
  }

  set timeRemaining (time) {
    this.duration.value = time
  }
}

const duration = document.querySelector('#duration')
const startTimer = document.querySelector('#start')
const stopTimer = document.querySelector('#stop')

const timer = new Timer(duration, startTimer, stopTimer)
