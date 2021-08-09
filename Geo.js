class Vec2 {
  constructor(x = 0, y = 0) {
    this.x = x
    this.y = y
  }

  add(other) {
    return new Vec2(this.x + other.x, this.y + other.y)
  }

  scale(factor) {
    return new Vec2(this.x * factor, this.y * factor)
  }
}

class Rect {
  constructor(pos = new Vec2(), width = 0, height = 0) {
    this.pos = pos
    this.width = width
    this.height = height
  }

  get x() {
    return this.pos.x
  }
  set x(val) {
    this.pos.x = val
  }
  get y() {
    return this.pos.y
  }
  set y(val) {
    this.pos.y = val
  }
  get bl() {
    return new Vec2(this.pos.x, this.pos.y)
  }
  get b() {
    return new Vec2(this.pos.x + this.width / 2, this.pos.y)
  }
  get br() {
    return new Vec2(this.pos.x + this.width, this.pos.y)
  }
  get l() {
    return new Vec2(this.pos.x, this.pos.y - this.height / 2)
  }
  get r() {
    return new Vec2(this.pos.x + this.width, this.pos.y - this.height / 2)
  }
  get tl() {
    return new Vec2(this.pos.x, this.pos.y - this.height)
  }
  get t() {
    return new Vec2(this.pos.x + this.width / 2, this.pos.y - this.height)
  }
  get tr() {
    return new Vec2(this.pos.x + this.width, this.pos.y - this.height)
  }
}