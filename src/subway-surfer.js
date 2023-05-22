const {Player} = require('./player.js');

class SubwaySurfer {
  #police
  #jake

  constructor(police, jake) {
    this.#police = police;
    this.#jake = jake;
  }

  #run() {
    this.#jake.updatePosition();
    this.#police.updatePosition();
  }

  #hasOvertakeTheThief() {
    return this.#police.position >= this.#jake.position;
  }

  #displayEndMessage() {
    console.log(this.#jake.name, '🙇‍♂️ got caught!!!!');
  }

  #gotCaught(gameLoopId) {
    if (this.#hasOvertakeTheThief()) {
      this.#displayStatus();
      clearInterval(gameLoopId);
      this.#displayEndMessage();
    }
  }

  #displayStatus() {
    console.clear();
    console.log('🚔'.padStart(this.#police.position));
    console.log('🚖'.padStart(this.#jake.position));
  }

  start() {
    const interval = setInterval(() => {
      this.#run();
      this.#displayStatus();
      this.#gotCaught(interval);
    }, 1000);
  }
}

const police = new Player('biswa');
const jake = new Player('raj');
const race = new SubwaySurfer(police, jake);

race.start();


const main = function() {
  return 1;
};

exports.main = main;
