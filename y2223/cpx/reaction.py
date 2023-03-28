from adafruit_circuitplayground import cp
import time 

cp.pixels.brightness = 0.1
cp.pixels.fill((0, 0, 0)) # reset

# time.sleep(1)




while True:
    players = [
        {
          "input": cp.touch_A1,
          "output": 6 # cp.pixels[6]
        },
        {
          "input": cp.touch_A2,
          "output": 8
        }
    ]

    # print(players[0])
    # if cp.touch_A1:
    #     cp.pixels[0] = (0, 255, 0) # green
    # else:
    #     cp.pixels[0] = (255, 0, 0) # red
    
    for player in players:
        print(player["input"])
        if player["input"]:
            cp.pixels[player["output"]] = (0, 255, 0) # green
        else:
            cp.pixels[player["output"]] = (255, 0, 0) # red



