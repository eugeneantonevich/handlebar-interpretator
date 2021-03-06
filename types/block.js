'using strict';

const Base = require('./base');

class Block extends Base {
  constructor(value) {
    super(value);
    this._text = value.text;
  }

  get text() {
    return this._text;
  }

  format() {
    return this._text;
  }

  get fieldsToResolve() {
    return {
      text: this._text
    };
  }
}

module.exports = (text) => { return new Block(text); };
