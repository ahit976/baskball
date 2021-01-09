startbit.startbit_Init()
let 步骤 = 0
let 计数 = 0
startbit.startbit_digitaltube(startbit.startbit_digitaltubePort.port2, 7, 4)
basic.forever(function () {
    if (步骤 == 0) {
        if (startbit.startbit_avoidSensor(startbit.startbit_touchKeyPort.port1)) {
            步骤 = 1
            计数 += 1
        }
    } else {
        basic.pause(100)
        if (计数 == 9999) {
            计数 = 1
        }
        步骤 = 0
    }
    startbit.startbit_showNumber(计数)
})
