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

    this.startTimer.addEventListener('click', this.start)
    this.stopTimer.addEventListener('click', this.stop)
  }

  start = () => {
    if (this.onStart) {
      this.onStart()
    }
    this.tick()
    this.interval = setInterval(this.tick, 1000)
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
      this.timeRemaining = this.timeRemaining - 1
      this.onTick()
    }
  }

  get timeRemaining () {
    return parseFloat(this.duration.value)
  }

  set timeRemaining (time) {
    this.duration.value = time
  }
}
