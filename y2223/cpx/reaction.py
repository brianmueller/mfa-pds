from adafruit_circuitplayground import cp
import time 

cp.pixels.brightness = 0.1
cp.pixels.fill((0, 0, 0)) # reset

# time.sleep(1)

while True:
    if cp.touch_A1:
        cp.pixels[0] = (0, 255, 0) # green
    else:
        cp.pixels[0] = (255, 0, 0) # red
