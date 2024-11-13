/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Joos
 * Created on: Nov 2024
 * This program uses nested loops to move sprite around the edge
*/

let sprite: game.LedSprite = null

// Clear the screen initially
basic.clearScreen()

input.onButtonPressed(Button.A, function () {
    // Create the sprite at the starting position when "A" is pressed
    sprite = game.createSprite(0, 0)

    let laps = 1

    while (laps > 0) {
        
        // Outer loop for each lap
        let sides = 4
        while (sides > 0) {
            
            // Inner loop for each side of the square
            let steps = 4
            while (steps > 0) {
                sprite.move(1)  
                basic.pause(400)
                steps = steps - 1
            }
            //turns sprite 90 degrees
            sprite.turn(Direction.Right, 90)  
            sides = sides -1
        }
        laps = laps-1 
    }

    // Clear the screen after finishing
    sprite.delete()
    basic.clearScreen()
})
