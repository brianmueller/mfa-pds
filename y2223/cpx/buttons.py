from adafruit_circuitplayground import cp

cp.pixels.brightness = 0.1

while True:
    # CHALLENGE 1
    # if cp.button_a:
    #     print("Button A pressed!")
    #     cp.pixels[0] = (255, 0, 0)
    # else: 
    #     cp.pixels.fill((0, 0, 0))

    # CHALLENGE 2
    # if cp.button_a:
    #     print("Button A pressed!")
    #     cp.pixels[0] = (255, 0, 0)
    # if cp.button_b:
    #     cp.pixels.fill((0, 0, 0))

    # CHALLENGE 3
    if cp.button_a:
        cp.pixels[2] = (0, 255, 0) # green
    else:
        cp.pixels.fill((0, 0, 0))
    if cp.button_b:
        cp.pixels[7] = (0, 0, 255) # blue
    else:
        cp.pixels.fill((0, 0, 0))
