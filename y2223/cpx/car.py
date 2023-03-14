import time
import board
import pwmio
from adafruit_motor import servo
from adafruit_circuitplayground import cp

cp.pixels.brightness = 0.1

# create a PWMOut object on Pin A2.
pwm_l = pwmio.PWMOut(board.A2, frequency=50)
pwm_r = pwmio.PWMOut(board.A3, frequency=50)

# Create a servo object, my_servo.
my_servo_l = servo.ContinuousServo(pwm_l)
my_servo_r = servo.ContinuousServo(pwm_r)



# while True:
#     print("Slide switch:", cp.switch)
#     time.sleep(0.1)

speed = 0.15

while True:
    if(cp.switch):
        cp.pixels.fill((0, 255, 0)) # green
        print("forward")
        my_servo_l.throttle = speed
        my_servo_r.throttle = -1*speed
        time.sleep(2.0)
        print("stop")
        my_servo_l.throttle = 0.0
        my_servo_r.throttle = 0.0
        time.sleep(2.0)
        print("reverse")
        my_servo_l.throttle = -1*speed
        my_servo_r.throttle = 0.6*speed # this motor was moving too fast, in reverse only
        time.sleep(2.0)
        print("stop")
        my_servo_l.throttle = 0.0
        my_servo_r.throttle = 0.0
        time.sleep(2.0)
    else:
        cp.pixels.fill((255, 0, 0)) # red




