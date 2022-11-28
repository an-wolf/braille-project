input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . . .
        # # . . .
        . # . . .
        . . . . .
        . . . . .
        `)
    basic.pause(2000)
    basic.showLeds(`
        # . . . .
        . # . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(3000)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(3000)
    basic.showLeds(`
        # # . . .
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(3000)
    basic.showLeds(`
        . # . . .
        . # . . .
        # # . . .
        . . . . .
        . . . . .
        `)
    basic.pause(2000)
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(3000)
    basic.showLeds(`
        # # . . .
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(3000)
    basic.showLeds(`
        . . . . .
        # # . . .
        . # . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
