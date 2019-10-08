class GuessingGame {
  constructor() {
  	this._min = null;
  	this._max = null;
  	this._average = null;
  }

  setRange(min, max) {
  	this._min = min + 1;
  	this._max = max;
  }

  guess() {
  	this._average = Math.floor((this._max + this._min) / 2);
  	return this._average;
  }

  lower() {
  	this._max = this._average;
  }

  greater() {
  	this._min = this._average + 1;
  }
}

module.exports = GuessingGame;
