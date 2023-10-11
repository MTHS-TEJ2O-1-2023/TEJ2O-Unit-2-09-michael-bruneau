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
let score: number = 0

// increase score
input.onButtonPressed(Button.A, function () {
  score = score + 1
  basic.showIcon(IconNames.Yes)
})

input.onButtonPressed(Button.B, function () {
  basic.showNumber(score)
  basic.showIcon(IconNames.Happy)
})

input.onGesture(Gesture.Shake, function () {
  randomNumber = randint(0, 2)
  basic.clearScreen()

  // if randomNumber was 0
  if (randomNumber == 0) {
    basic.showIcon(IconNames.Scissors)
  }

  // if randomNumber was 1
  if (randomNumber == 1) {
    basic.showLeds(`
  . . . . .
  . # # # .
  . # # # .
  . # # # .
  . . . . .
  `)}

  // if randomNumber was 2
  if (randomNumber == 2) {
    basic.showLeds(`
  # # # # #
  # . . . #
  # . . . #
  # . . . #
  # # # # #
  `)}

  // pause and show you are ready again
  basic.pause(1000)
  basic.showIcon(IconNames.Happy)
})
