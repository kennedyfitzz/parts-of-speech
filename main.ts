controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    shark.say(sentence)
    fish.say(pronouns)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    shark.say(sentence)
    fish.say(verbs)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    shark.say(sentence)
    fish.say(Nouns)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    shark.say(sentence)
    fish.say(adjectives)
})
let adjectives = ""
let pronouns = ""
let verbs = ""
let Nouns = ""
let sentence = ""
let fish: Sprite = null
let shark: Sprite = null
scene.setBackgroundColor(0)
shark = sprites.create(img`
    ...........fffffff...ccfff..........
    ..........fbbbbbbbffcbbbbf..........
    ..........fbb111bbbbbffbf...........
    ..........fb11111ffbbbbff...........
    ..........f1cccc1ffbbbbbcff.........
    ..........ffc1c1c1bbcbcbcccf........
    ...........fcc3331bbbcbcbcccf..ccccc
    ............c333c1bbbcbcbccccfcddbbc
    ............c333c1bbbbbbbcccccddbcc.
    ............c333c11bbbbbccccccbbcc..
    ...........cc331c11bbbbccccccfbccf..
    ...........cc13c11cbbbcccccbbcfccf..
    ...........c111111cbbbfdddddc.fbbcf.
    ............cc1111fbdbbfdddc...fbbf.
    ..............cccfffbdbbfcc.....fbbf
    ....................fffff........fff
    `, SpriteKind.Player)
fish = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . c c c c . . . . 
    . . . . . . c c d d d d c . . . 
    . . . . . c c c c c c d c . . . 
    . . . . c c 4 4 4 4 d c c . . . 
    . . . c 4 d 4 4 4 4 4 1 c . c c 
    . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
    . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
    f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
    f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
    f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
    . f 4 4 4 4 1 c 4 f 4 d f f f f 
    . . f f 4 d 4 4 f f 4 c f c . . 
    . . . . f f 4 4 4 4 c d b c . . 
    . . . . . . f f f f d d d c . . 
    . . . . . . . . . . c c c . . . 
    `, SpriteKind.Player)
shark.setPosition(124, 64)
fish.setPosition(29, 56)
sentence = "The shark ate all of the food"
Nouns = "" + sentence.substr(4, 5) + ", " + sentence.substr(25, 4)
verbs = sentence.substr(10, 3)
pronouns = sentence.substr(14, 3)
adjectives = "none"
