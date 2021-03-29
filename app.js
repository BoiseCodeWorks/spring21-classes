// defining a blueprint or a concept of a Class
// class Chair {
//   constructor(legs, seatHeight) {
//     this.legs = legs
//     this.seatHeight = seatHeight
//   }
// }


// // Object
// let x = {}
// debugger

// // Chair
// // classes get instatiated by the 'new' keyword and their invocation
// let officeChair = new Chair(1, 20);
// let sofaChair = new Chair(4, 17);
// let rockingChair = new Chair(2, 18);


// let chairs = [officeChair, sofaChair, rockingChair]


import Upgrade from './models/Upgrade.js'

let cheese = 0

let upgrades = {
  click: {
    knife: new Upgrade('knife', 10, 1),
    shovel: new Upgrade('shovel', 15, 2),
    bucket: new Upgrade('bucket', 25, 3),
  },
  auto: {
    knife: new Upgrade('knife', 10, 1, true),
    shovel: new Upgrade('shovel', 15, 2, true),
  }
}

// using modules you must manually attach to window to access methods in html
window['mine'] = function() {
  cheese++
  console.log(cheese)
}




