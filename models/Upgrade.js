// Export defines what is available when importing this file
export default class Upgrade {
  constructor(name, price, modifier, auto = false, tagname = name) {
    this.name = name
    this.price = price
    this.modifier = modifier
    this.quantity = 0
    this.auto = auto
  }

  // method (function)
  getTotalModifier() {
    return this.quantity * this.modifier
  }

  purchase() {
    // if (cheese -= this.price) {
    //   // CODE OMITTED
    // }
  }
}