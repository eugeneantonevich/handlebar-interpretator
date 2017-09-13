'using strict';

class Block {
  constructor(value) {
    this._text = value.text;
  }

  get text() {
    return this._text;
  }

  format() {
    return this._text;
  }
}

module.exports = (text) => { return new Block(text); };
