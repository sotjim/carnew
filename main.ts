input.onButtonPressed(Button.A, function () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, -66)
    wuKong.setMotorSpeed(wuKong.MotorList.M2, -50)
    wuKong.setLightMode(wuKong.LightMode.BREATH)
})
input.onSound(DetectedSound.Loud, function () {
    wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 100)
    basic.pause(5000)
    wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 90)
})
input.onButtonPressed(Button.B, function () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, 50)
    wuKong.setMotorSpeed(wuKong.MotorList.M2, 50)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 80)
    basic.pause(5000)
    wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 90)
})
basic.showIcon(IconNames.Heart)
let rainwater = false
basic.forever(function () {
    if (Environment.ReadWaterLevel(AnalogPin.P1) > 10) {
        if (rainwater == false) {
            wuKong.stopAllMotor()
            rainwater = true
        }
    }
    if (Environment.ReadWaterLevel(AnalogPin.P1) < 10) {
        if (rainwater == true) {
            rainwater = false
            wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 90)
        }
    }
})
