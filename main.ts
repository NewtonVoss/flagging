radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber > 47 && receivedNumber < 50) {
        soundExpression.giggle.play()
        servos.P1.setAngle(90)
    }
})
input.onButtonPressed(Button.A, function () {
    soundExpression.giggle.play()
    servos.P1.setAngle(90)
})
radio.setGroup(63)
servos.P1.setAngle(0)
