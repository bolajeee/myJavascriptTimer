class Timer {
  constructor (duration, startTimer, stopTimer, callBacks) {
    this.duration = duration
    this.startTimer = startTimer
    this.stopTimer = stopTimer

    if (callBacks) {
      this.onStart = callBacks.onStart
      this.onStop = callBacks.onStop
      this.onComplete = callBacks.onComplete
      this.onTick = callBacks.onTick
    }

    this.startTimer.addEventListener('click', this.start.bind(this))
    this.stopTimer.addEventListener('click', this.stop.bind(this))
  }

  start = () => {
    if (this.onStart) {
      this.onStart()
    }
    this.tick()
    this.interval = setInterval(this.tick, 50)
  }

  stop = () => {
    if (this.onStop) {
      this.onStop()
    }
    clearInterval(this.interval)
  }

  tick = () => {
    if (this.timeRemaining <= 0) {
      this.stop
      this.onComplete()
    } else {
      this.timeRemaining = this.timeRemaining - 0.5
      this.onTick()
    }
  }

  get timeRemaining () {
    return parseFloat(this.duration.value)
  }

  set timeRemaining (time) {
    this.duration.value = time.toFixed(2)
  }
}
