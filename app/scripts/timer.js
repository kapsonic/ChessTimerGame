/**
 * Created by user on 26/2/16.
 */

class Timer {
  constructor(timeSpan) {
    this.origTime = timeSpan;
    this.timeSpan = timeSpan;
    this.reset();
  }

  reset() {
    if (this.isStarted()) {
      this.stop();
    }
    this.timeSpan = this.origTime;
    if (this.display)
      this._showTime();
  }

  isStarted() {
    return this.started;
  }

  setDisplay(el) {
    this.display = el;
    this._showTime();
  }

  _showTime() {
    var minutes, seconds, duration;
    minutes = parseInt(this.timeSpan / 60, 10)
    seconds = parseInt(this.timeSpan % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    this.display.textContent = minutes + ":" + seconds;
  }

  start() {
    this.started = true;
    this.timer = setInterval(() => {
      this._showTime();
      if (--this.timeSpan === 0) {
        console.log('Lost');
        this.reset();
        EventBus.getInstance().broadcast('timerFinish', this);
      }
    }, 1000);
  }

  stop() {
    clearInterval(this.timer);
    this.started = false;
  }
}
