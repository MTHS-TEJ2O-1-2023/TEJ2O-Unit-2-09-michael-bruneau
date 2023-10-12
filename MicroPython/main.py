"""
Created by: Michael B
Created on: Oct 2023
This module is a Micro:bit MicroPython program
"""

import random
from microbit import *

score = 0
display.clear()
display.show(Image.HAPPY)

while True:
    if button_a.is_pressed():
        score = score + 1
        display.show(Image.YES)
        sleep(5000)
        display.show(Image.HAPPY)

    if button_b.is_pressed():
        display.scroll(str(score))

    gesture = accelerometer.current_gesture()
    if accelerometer.was_gesture("shake"):
        random_number = random.randint(0, 2)

        if random_number == 0:
            scissors = Image("99009:" "99090:" "00900:" "99090:" "99009:")
            display.show(scissors)

        if random_number == 1:
            rock = Image("00000:" "09990:" "09990:" "09990:" "00000:")
            display.show(rock)

        if random_number == 2:
            display.show(Image.SQUARE)

        sleep(5000)
        display.show(Image.HAPPY)
