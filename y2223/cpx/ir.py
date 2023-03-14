import pulseio
import board
import adafruit_irremote

# Create a 'pulseio' input, to listen to infrared signals on the IR receiver
pulsein = pulseio.PulseIn(board.IR_RX, maxlen=120, idle_state=True)
# Create a decoder that will take pulses and turn them into numbers
decoder = adafruit_irremote.GenericDecode()

cp.pixels.brightness = 0.1

while True:
    print("Receiving")
    pulses = decoder.read_pulses(pulsein)
    try:
        # Attempt to convert received pulses into numbers
        received_code = decoder.decode_bits(pulses)
    except adafruit_irremote.IRNECRepeatException:
        # We got an unusual short code, probably a 'repeat' signal
        # print("NEC repeat!")
        continue
    except adafruit_irremote.IRDecodeException as e:
        # Something got distorted or maybe its not an NEC-type remote?
        # print("Failed to decode: ", e.args)
        continue

    print("NEC Infrared code received: ", received_code)
    if received_code == (255, 2, 255, 0):
        # print("Received NEC Vol-")
        cp.pixels.fill((255, 0, 0))
    elif received_code == (255, 2, 255, 32):
        cp.pixels.fill((0, 255, 0))
    else:
        cp.pixels.fill((0, 0, 0))
    # if received_code == [255, 2, 127, 128]:
    #     print("Received NEC Play/Pause")
    # if received_code == [255, 2, 191, 64]:
    #     print("Received NEC Vol+")
