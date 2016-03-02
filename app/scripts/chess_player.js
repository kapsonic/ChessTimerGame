/**
 * Created by user on 26/2/16.
 */
class ChessTimerPlayer extends Player {
  constructor(id, name, game) {
    super(id, name);
    this.timer = new Timer(4 * 60);
    this.game = game;

    EventBus.getInstance().subscribe('timerFinish', `player-${this.id}`, (data) => {
      this.timer.reset();
      if (data === this.timer) {
        EventBus.getInstance().broadcast('playerGameOver', this);
      }
    });
  }

  harm() {
    console.log(`Player: ${this.getName()} Timer Start`);
    this.timer.start();
  }

  play() {
    console.log(`Player: ${this.getName()} Timer Stop`);
    this.timer.stop();
  }

  getTimerInstance() {
    return this.timer;
  }

  reset() {
    this.timer.reset();
  }
}
