// Variables

let text_list: string[] = []
let index = 0
text_list = [
    "BEANS",
    "HOT SAUCE",
    "CATS",
    "PUPPIES",
    "MICRO:BIT",
    "DANCING",
    "GAME",
    "MARIO",
    "BOWSER",
    "FREDDY",
    "SUNSHINE",
    "WEATHER",
    "WATER",
    "THIRST",
    "POTATO",
    "CHIP",
    "FISH",
    "CANDY",
    "EASTER",
    "HALLOWEEN",
    "THANKSGIVING",
    "SUMMER",
    "WINTER",
    "CHRISTMAS",
    "NEW YEARS",
    "SANTA"
]

// Game

game.startCountdown(30000)

// Functions

input.onGesture(Gesture.LogoUp, function(){
    index = randint(0, text_list.length - 1)
    basic.showString(text_list[index])
})

input.onGesture(Gesture.ScreenDown, function(){
    game.addScore(1)
})

input.onGesture(Gesture.ScreenUp, function(){
    game.removeLife(1)
})