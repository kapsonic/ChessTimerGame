"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Listeners = function () {
  function Listeners() {
    _classCallCheck(this, Listeners);

    this.list = {};
  }

  _createClass(Listeners, [{
    key: "create",
    value: function create(eventName, id, cb) {
      if (!this.list[eventName]) {
        this.list[eventName] = {};
      }
      this.list[eventName][id] = cb;
    }
  }, {
    key: "destroy",
    value: function destroy(eventName, id) {
      delete this.list[eventName][id];
    }
  }, {
    key: "fire",
    value: function fire(eventName, args) {
      for (var key in this.list[eventName]) {
        this.list[eventName][key](args);
      }
    }
  }]);

  return Listeners;
}();

var obj = Symbol();

var EventBus = function () {
  _createClass(EventBus, null, [{
    key: "getInstance",
    value: function getInstance() {
      if (!this[obj]) {
        this[obj] = new EventBus();
      }

      return this[obj];
    }
  }]);

  function EventBus() {
    _classCallCheck(this, EventBus);

    this.listeners = new Listeners();
  }

  _createClass(EventBus, [{
    key: "subscribe",
    value: function subscribe(eventName, id, cb, once) {
      this.listeners.create(eventName, id, cb);

      if (once) {
        this.unsubscribe(eventName, id);
      }
    }
  }, {
    key: "once",
    value: function once(eventName, id, cb) {
      this.subscribe(eventName, id, cb, true);
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(eventName, id) {
      this.listeners.destroy(eventName, id);
    }
  }, {
    key: "broadcast",
    value: function broadcast(eventName, args) {
      this.listeners.fire(eventName, args);
    }
  }]);

  return EventBus;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Game super class

var Game = function () {
  function Game(name) {
    _classCallCheck(this, Game);

    this.name = name;
    this.players = [];
    this.isInPlay = false;
  }

  _createClass(Game, [{
    key: 'isPlaying',
    value: function isPlaying() {
      return this.isInPlay;
    }
  }, {
    key: 'registerPlayer',
    value: function registerPlayer(player) {
      this.players.push(player);
    }
  }, {
    key: 'isWin',
    value: function isWin() {
      console.error('Not defined');
    }
  }, {
    key: 'start',
    value: function start() {
      console.error('Not defined');
    }
  }, {
    key: 'reset',
    value: function reset() {
      console.error('Not defined');
    }
  }, {
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }, {
    key: 'notifyPlayerAction',
    value: function notifyPlayerAction() {
      console.error('Not defined');
    }
  }, {
    key: 'proceed',
    value: function proceed() {}
  }, {
    key: 'end',
    value: function end() {}
  }]);

  return Game;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Kapil on 26/2/16.
 */
// Player Super class

var Player = function () {
  function Player(id, name) {
    _classCallCheck(this, Player);

    this.id = id;
    this.name = name;
  }

  _createClass(Player, [{
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }, {
    key: 'harm',
    value: function harm() {
      console.error('Not defined');
    }
  }, {
    key: 'play',
    value: function play() {
      console.error('Move not defined');
      return false;
    }
  }, {
    key: 'reset',
    value: function reset() {
      console.error('Not defined');
    }
  }]);

  return Player;
}();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by user on 26/2/16.
 */

var Timer = function () {
  function Timer(timeSpan) {
    _classCallCheck(this, Timer);

    this.origTime = timeSpan;
    this.timeSpan = timeSpan;
    this.reset();
  }

  _createClass(Timer, [{
    key: "reset",
    value: function reset() {
      if (this.isStarted()) {
        this.stop();
      }
      this.timeSpan = this.origTime;
      if (this.display) this._showTime();
    }
  }, {
    key: "isStarted",
    value: function isStarted() {
      return this.started;
    }
  }, {
    key: "setDisplay",
    value: function setDisplay(el) {
      this.display = el;
      this._showTime();
    }
  }, {
    key: "_showTime",
    value: function _showTime() {
      var minutes, seconds, duration;
      minutes = parseInt(this.timeSpan / 60, 10);
      seconds = parseInt(this.timeSpan % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      this.display.textContent = minutes + ":" + seconds;
    }
  }, {
    key: "start",
    value: function start() {
      var _this = this;

      this.started = true;
      this.timer = setInterval(function () {
        _this._showTime();
        if (--_this.timeSpan === 0) {
          console.log('Lost');
          _this.reset();
          EventBus.getInstance().broadcast('timerFinish', _this);
        }
      }, 1000);
    }
  }, {
    key: "stop",
    value: function stop() {
      clearInterval(this.timer);
      this.started = false;
    }
  }]);

  return Timer;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by user on 26/2/16.
 */

var ChessTimerPlayer = function (_Player) {
  _inherits(ChessTimerPlayer, _Player);

  function ChessTimerPlayer(id, name, game) {
    _classCallCheck(this, ChessTimerPlayer);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ChessTimerPlayer).call(this, id, name));

    _this.timer = new Timer(4 * 60);
    _this.game = game;

    EventBus.getInstance().subscribe('timerFinish', 'player-' + _this.id, function (data) {
      _this.timer.reset();
      if (data === _this.timer) {
        EventBus.getInstance().broadcast('playerGameOver', _this);
      }
    });
    return _this;
  }

  _createClass(ChessTimerPlayer, [{
    key: 'harm',
    value: function harm() {
      console.log('Player: ' + this.getName() + ' Timer Start');
      this.timer.start();
    }
  }, {
    key: 'play',
    value: function play() {
      console.log('Player: ' + this.getName() + ' Timer Stop');
      this.timer.stop();
    }
  }, {
    key: 'getTimerInstance',
    value: function getTimerInstance() {
      return this.timer;
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.timer.reset();
    }
  }]);

  return ChessTimerPlayer;
}(Player);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by user on 26/2/16.
 */

var ChessTimerGame = function (_Game) {
  _inherits(ChessTimerGame, _Game);

  function ChessTimerGame(name) {
    _classCallCheck(this, ChessTimerGame);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ChessTimerGame).call(this, name, 2));

    _this.nextPlayer = 0;
    return _this;
  }

  _createClass(ChessTimerGame, [{
    key: 'start',
    value: function start() {
      var _this2 = this;

      console.log('game has been started');
      this.isInPlay = true;
      this.players[this.nextPlayer].harm();
      EventBus.getInstance().subscribe('playerGameOver', this.name, function (playerId) {
        console.info(_this2._getOpponent(playerId).getName() + ' Wins');
        // Broadcast Game finish event with winner object
        EventBus.getInstance().broadcast('gameFinish', _this2._getOpponent(playerId));
      });
    }
  }, {
    key: 'reset',
    value: function reset() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.players[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var o = _step.value;

          o.reset();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.nextPlayer = 0;
      this.isInPlay = false;
    }
  }, {
    key: 'proceed',
    value: function proceed(player) {
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
  }, {
    key: '_getOpponent',
    value: function _getOpponent(player) {
      var opponent;
      // Since we already know there can be only two player so we
      // use direct method instead of looping things
      return this.players[0].id === player.id ? this.players[1] : this.players[0];
    }
  }, {
    key: 'end',
    value: function end() {
      this.isInPlay = false;
    }
  }]);

  return ChessTimerGame;
}(Game);
'use strict';

var player1 = new ChessTimerPlayer(1, 'Player 1');
var player2 = new ChessTimerPlayer(2, 'Player 2');

var chess = new ChessTimerGame('Damco Chess Game');
chess.registerPlayer(player1);
chess.registerPlayer(player2);

document.getElementById('start').onclick = function () {
  chess.reset();
  if (!chess.isPlaying()) {
    chess.start();
  }
};

document.getElementById('reset').onclick = function () {
  chess.reset();
};

document.getElementById('player1').onclick = function () {
  if (chess.isPlaying()) {
    chess.proceed(player1);
  } else {
    alert('Game is not in play');
  }
};

document.getElementById('player2').onclick = function () {
  if (chess.isPlaying()) {
    chess.proceed(player2);
  } else {
    alert('Game is not in play');
  }
};

player1.getTimerInstance().setDisplay(document.querySelector('#player1-timer'));
player2.getTimerInstance().setDisplay(document.querySelector('#player2-timer'));

