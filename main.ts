radio.onReceivedNumber(function (receivedNumber) {
    action = receivedNumber
})
function reverse () {
    wuKong.setAllMotor(-100, -100)
}
function forkdown () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
}
function forkup () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 60)
}
function forward () {
    wuKong.setAllMotor(100, 100)
}
let action = 0
joystickbit.initJoystickBit()
radio.setGroup(23)
basic.showIcon(IconNames.Pitchfork)
