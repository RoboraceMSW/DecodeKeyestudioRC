IR.IR_callbackUser(function () {
    if (IR.IR_read() == 157) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
    }
    if (IR.IR_read() == 221) {
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
    }
    if (IR.IR_read() == 61) {
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
    }
    if (IR.IR_read() == 21) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . # # # .
            . . # . .
            `)
    }
    if (IR.IR_read() == 253) {
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            . . . . .
            `)
    }
    if (IR.IR_read() == 189) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    }
    if (IR.IR_read() == 173) {
        basic.showLeds(`
            . # . # .
            # # # # #
            . # . # .
            # # # # #
            . # . # .
            `)
    }
    if (IR.IR_read() == 22) {
        basic.showNumber(1)
    }
    if (IR.IR_read() == 25) {
        basic.showNumber(2)
    }
    if (IR.IR_read() == 13) {
        basic.showNumber(3)
    }
    if (IR.IR_read() == 12) {
        basic.showNumber(4)
    }
    if (IR.IR_read() == 24) {
        basic.showNumber(5)
    }
    if (IR.IR_read() == 133) {
        basic.showNumber(6)
    }
    if (IR.IR_read() == 8) {
        basic.showNumber(7)
    }
    if (IR.IR_read() == 199) {
        basic.showNumber(8)
    }
    if (IR.IR_read() == 165) {
        basic.showNumber(9)
    }
    if (IR.IR_read() == 181) {
        basic.showNumber(0)
    }
})
Maqueen_V5.I2CInit()
IR.IR_init()
basic.forever(function () {
	
})
