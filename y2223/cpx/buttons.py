import time
import math
from adafruit_circuitplayground import cp

cp.pixels.brightness = 0.1

# 1
# while True:
#     print("Light:", cp.light)
#     print((cp.light,))
#     time.sleep(0.1)
    
# 2
# while True:
#     if cp.light > 20:
#         #Turn off all lights
#         cp.pixels.fill((0, 0, 0))
#     else:
#         #Turn on all lights
#         cp.pixels.fill((255, 255, 255))

# 3
# while True:
#     if cp.light > 80:
#         #Turn lights green
#         cp.pixels.fill((0, 255, 0))
#     elif cp.light > 40:
#         #Turn lights yellow
#         cp.pixels.fill((255, 255, 0))
#     else:
#         #Turn lights red
#         cp.pixels.fill((255, 0, 0))
#     print("Light:", cp.light)
#     time.sleep(0.1)

# 4
# night light: less ambient light = more LED light
# range: 120 (bright ambient) to 20 (dim ambient)
# cp.pixels[0:5] = [(255, 0, 0)] * 5 # first half
# cp.pixels[5:10] = [(255, 0, 0)] * 5 # second half

while True:
    cp.pixels.fill((0, 0, 0)) # reset
    scaledLight = math.floor((cp.light-20)/10) # 9 to 0
    numLeds = 10 - scaledLight
    cp.pixels[0:numLeds] = [(255, 255, 255)] * numLeds
