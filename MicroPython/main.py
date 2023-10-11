"""
Created by: Michael B
Created on: Oct 2023
This module is a Micro:bit MicroPython program
"""

import random
from microbit import *

display.clear()
display.show(Image.HAPPY)

while True:
    gesture = accelerometer.current_gesture()
    if gesture == "face up":
        random.randint(0, 2)
        
        if (random == 0):
            display.show(Image.SCISSOR)
            display.pause(1000)
            display.show(Image.HAPPY)
        
        if (random == 1):
            display.show(Image.SQUARE_SMALL)
            display.pause(1000)
            display.show(Image.HAPPY)
        
        if (random == 2):
            display.show(Image.SQUARE)
            display.pause(1000)
            display.show(Image.HAPPY)
