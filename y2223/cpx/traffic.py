"""This example lights up the first NeoPixel red."""
from adafruit_circuitplayground import cp
import time 

cp.pixels.brightness = 0.1

while True:
    cp.pixels[0] = (0, 255, 0) # green
    time.sleep(1)
    cp.pixels.fill((0, 0, 0))
    
    cp.pixels[1] = (255, 255, 0) # yellow
    time.sleep(1)
    cp.pixels.fill((0, 0, 0))
    
    cp.pixels[2] = (255, 0, 0) # red
    time.sleep(1)
    cp.pixels.fill((0, 0, 0))
