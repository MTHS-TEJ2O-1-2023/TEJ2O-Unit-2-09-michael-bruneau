"""
Created by: Michael B
Created on: Oct 2023
This module is a Micro:bit MicroPython program
"""

from microbit import *

display.clear()
display.show(Image.HAPPY)

while True:
    gesture = accelerometer.current_gesture()
    if gesture == "shaken":
        display.show(Image.YES)
