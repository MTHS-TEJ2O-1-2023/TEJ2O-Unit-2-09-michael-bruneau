/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Michael B
 * Created on: Oct 2023
 * This program does rock paper scissors
*/

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// variables
let randomNumber: number = -1

input.onGesture(Gesture.Shake, function() {
  randomNumber = randint(0, 2)
  basic.clearScreen()

  // if randomNumber was 0
  if (randomNumber == 0) {
  basic.showIcon(IconNames.Scissors)
}

  // if randomNumber was 1
  if (randomNumber == 1)
  basic.showIcon(IconNames.Rock)
})
