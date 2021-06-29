let reading = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 100; index++) {
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
})
basic.forever(function () {
    reading = input.lightLevel()
    led.plotBarGraph(
    reading,
    255
    )
})
