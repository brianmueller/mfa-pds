import time
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
while True:
    if cp.light > 80:
        #Turn lights green
        cp.pixels.fill((0, 255, 0))
    elif cp.light > 40:
        #Turn lights yellow
        cp.pixels.fill((255, 255, 0))
    else:
        #Turn lights red
        cp.pixels.fill((255, 0, 0))
    print("Light:", cp.light)
    time.sleep(0.1)
