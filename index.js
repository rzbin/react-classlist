class ClassList {
  constructor(classString, condition = true) {
    this.classes = new Set()
    this.add(classString, condition)
    return this
  }

  add(classString, condition = true) {
    if (condition) {
      const classes = classString.split(' ')
      classes.map((c) => this.classes.add(c))
    }
    return this
  }

  remove(classString, condition = true) {
    if (condition) {
      const classes = classString.split(' ')
      classes.map((c) => this.classes.delete(c))
    }
    return this
  }

  toClassString() {
    return Array.from(this.classes).join(' ')
  }

  toString() {
    return this.toClassString()
  }
}

module.exports.ClassList = ClassList
