class Player {
  #name
  #position

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  };

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  };

  updatePosition() {
    this.#position += Math.floor(Math.random() * 10);
  };
}

exports.Player = Player;
