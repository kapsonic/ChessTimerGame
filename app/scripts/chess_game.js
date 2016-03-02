/**
 * Created by user on 26/2/16.
 */
class ChessTimerGame extends Game {
  constructor(name) {
    super(name, 2);
    this.nextPlayer = 0;
  }

  start() {
    console.log('game has been started');
    this.isInPlay = true;
    this.players[this.nextPlayer].harm();
    EventBus.getInstance().subscribe('playerGameOver', this.name, (playerId) => {
      console.info(`${this._getOpponent(playerId).getName()} Wins`);
      // Broadcast Game finish event with winner object
      EventBus.getInstance().broadcast('gameFinish', this._getOpponent(playerId));
    });
  }

  reset() {
    for (let o of this.players) {
      o.reset();
    }
    this.nextPlayer = 0;
    this.isInPlay = false;
  }

  proceed(player) {
    if (player == this.players[this.nextPlayer]) {
      player.play();
      this.nextPlayer++;
      if (this.nextPlayer >= this.players.length) {
        this.nextPlayer = 0;
      }
      this._getOpponent(player).harm();
      return true;
    } else {
      console.error('Invalid player turn');
      return false;
    }
  }

  _getOpponent(player) {
    var opponent;
    // Since we already know there can be only two player so we
    // use direct method instead of looping things
    return this.players[0].id === player.id ? this.players[1] : this.players[0];
  }

  end() {
    this.isInPlay = false;
  }
}
