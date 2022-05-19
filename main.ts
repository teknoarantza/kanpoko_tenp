let tenExt = 0
radio.setGroup(1)
basic.forever(function () {
    tenExt = input.temperature()
    tenExt = input.temperature() + 0
    basic.showNumber(tenExt)
    radio.sendNumber(tenExt)
})
