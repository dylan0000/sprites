controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Swordfighter.vx = 200
    if (Swordfighter.vx > 0) {
        animation.runImageAnimation(
        Swordfighter,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . b b b b b . . . . . 
            . . . . . . b f f f b . . . . . 
            . . . . a a a f f f b . . . . . 
            . . . . a f a f f f b . . . . . 
            . . . . a f f a a a . . . . . . 
            . . . . a f f f a f f 5 5 5 5 . 
            . . . . a a a a 9 . f 5 5 5 5 5 
            . . . . . . . . . . . . . . . . 
            . . . . f f . . f f . . . . . . 
            . . . . f f f . f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . 9 9 9 9 9 . . . . . . 
            . . . 9 9 9 . . . 9 9 9 9 9 . . 
            . 9 9 9 . . . . . . . . . 9 . . 
            . 9 . . . . . . . . . . . . 9 . 
            . 9 . . . . 9 9 9 9 9 . . . 9 . 
            9 9 . . . 9 9 b 9 9 b 9 . . 9 . 
            9 . . . . 9 b f f f b 9 . . 9 . 
            9 . . . a a a f f f b . . . 9 . 
            9 . . . a f a f f f b . . . 9 . 
            9 . . . a 5 5 5 5 a . . . . 9 . 
            . . . 9 a f 5 5 5 5 5 . . . 9 . 
            . . 9 b a 5 5 5 5 5 . . . . 9 . 
            . 9 b a a . 9 b . . . . . . 9 . 
            f b a b . 9 b b . . . . . 9 9 . 
            f f b . 9 f b . . . . . 9 9 . . 
            f f . . f f f f . . . . . . . . 
            `,img`
            . . . . . 9 9 9 9 9 9 9 9 . . . 
            . . . . 9 9 . . . . . . 9 9 9 9 
            . . . 9 9 . . . . . . . . . . 9 
            . 9 9 9 . . . . . . . . . . . 9 
            9 9 . . . . 9 9 9 9 9 9 . . . 9 
            . . . . . 9 b b 9 9 b 9 . . . 9 
            5 5 . . . 9 b f f f b 9 . . . 9 
            5 5 5 . a a a f f f b . . . . 9 
            . 5 5 5 f a a f f f b . . . . 9 
            9 . 5 5 5 f f a a a . . . . 9 9 
            9 . . 5 f f f f a . . . . . 9 . 
            . . 9 b a a a a 9 . . . 9 9 . . 
            . 9 b a a . 9 b . . 9 9 9 . . . 
            f b a b . 9 b b . . 9 . . . . . 
            f f b . 9 f b . . . . . . . . . 
            f f . . f f f f . . . . . . . . 
            `],
        100,
        false
        )
    }
    pause(100)
    Swordfighter.vx = 0
})
function Swordfighter2 () {
    Swordfighter = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . b b b b b . . . . . 
        . . . . . 9 b f f f b . . . . . 
        . . . . . 9 b f f f b . . . . . 
        . . . . 9 a a a f f b . . . . . 
        . . . . a f f f a b b . . . 5 5 
        . . . . a f f f a 9 . . . 5 5 5 
        . . . . a f f f a b 9 9 5 5 5 . 
        . . . a a a a a a b b 5 5 5 . . 
        . . 9 b a . . 9 b a a f 5 . . . 
        . 9 b a . . 9 b b . f . . . . . 
        9 b b b . 9 b b . . . . . . . . 
        f f b . . f f f . . . . . . . . 
        f f f . . . f f f . . . . . . . 
        `, SpriteKind.Player)
}
let Swordfighter: Sprite = null
scene.setBackgroundColor(1)
Swordfighter2()
game.onUpdate(function () {
    if (Swordfighter.vx == 0) {
        Swordfighter.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . b b b b b . . . . . . . 
            . . . . b f b b b . . . . . . . 
            . . . . b f f f b . . . . . . . 
            . . . . b f f f b f . f . . . . 
            . . . . b a a a b 5 f . . . . . 
            . . . . a f f f a 5 5 f . . . . 
            . . . . a f f f a 5 . . . . . . 
            . . . . a f f f a . . . . . . . 
            . . . 5 a a a a a . . . . . . . 
            . . . 5 9 b . b b 9 . . . . . . 
            . . . 9 b b . b b 9 . . . . . . 
            . . . 9 b b . b f . . . . . . . 
            . . . . f f . f f . . . . . . . 
            . . . f f f . f f f . . . . . . 
            `)
    }
})
