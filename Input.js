const Keys = {
  ArrowUp: 'ArrowUp',
  ArrowDown: 'ArrowDown',
  ArrowLeft: 'ArrowLeft',
  ArrowRight: 'ArrowRight'
}
const Input = {
  pressedKeys: [],

  _keyConfig: {
    moveUp: 'w',
    moveDown: 's',
    moveLeft: 'a',
    moveRight: 'd'
  },

  _lastLeftRight: 0,
  _lastUpDown: 0,

  _initialized: false,
  keyIsPressed(key) {
    return (this.pressedKeys.indexOf(key) !== -1)
  },
  dir8() {
    const keyConfig = Input._keyConfig

    if (Input.keyIsPressed(keyConfig.moveDown) && !Input.keyIsPressed(keyConfig.moveUp)) {
      Input._lastUpDown = 1
    }
    if (Input.keyIsPressed(keyConfig.moveUp) && !Input.keyIsPressed(keyConfig.moveDown)) {
      Input._lastUpDown = -1
    }
    if (Input.keyIsPressed(keyConfig.moveLeft) && !Input.keyIsPressed(keyConfig.moveRight)) {
      Input._lastLeftRight = -1
    }
    if (Input.keyIsPressed(keyConfig.moveRight) && !Input.keyIsPressed(keyConfig.moveLeft)) {
      Input._lastLeftRight = 1
    }

    if (!Input.keyIsPressed(keyConfig.moveDown) && !Input.keyIsPressed(keyConfig.moveUp)) {
      Input._lastUpDown = 0
    }
    if (!Input.keyIsPressed(keyConfig.moveLeft) && !Input.keyIsPressed(keyConfig.moveRight)) {
      Input._lastLeftRight = 0
    }

    if (Input._lastUpDown === 0 && Input._lastLeftRight === 0) {
      return 5
    }
    if (Input._lastUpDown === -1 && Input._lastLeftRight === 0) {
      return 8
    }
    if (Input._lastUpDown === 1 && Input._lastLeftRight === 0) {
      return 2
    }
    if (Input._lastUpDown === 0 && Input._lastLeftRight === 1) {
      return 6
    }
    if (Input._lastUpDown === -1 && Input._lastLeftRight === 1) {
      return 9
    }
    if (Input._lastUpDown === 1 && Input._lastLeftRight === 1) {
      return 3
    }
    if (Input._lastUpDown === 0 && Input._lastLeftRight === -1) {
      return 4
    }
    if (Input._lastUpDown === -1 && Input._lastLeftRight === -1) {
      return 7
    }
    if (Input._lastUpDown === 1 && Input._lastLeftRight === -1) {
      return 1
    }
  },
  init() {
    if (this._initialized) {
      return
    }
    window.addEventListener('keydown', function (event) {
      if (!Input.keyIsPressed(event.key)) {
        Input.pressedKeys.push(event.key)
      }
    }, false)

    window.addEventListener('keyup', function (event) {
      const index = Input.pressedKeys.indexOf(event.key)
      if (index !== -1) {
        Input.pressedKeys.splice(index, 1)
      }
    }, false)
  }
}