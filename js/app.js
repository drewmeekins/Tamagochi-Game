class Tamagotchi {
    constructor(name){
        this.name = name
        this.age = 0
        this.hunger = 10
        this.sleepiness = 10
        this.boredom = 0
    }

    // ageUp(){
    //     return this.age += 1
    // }

    eat(){
        return this.hunger += 1
    }

    sleepy(){
        return this.sleepiness -= 1
    }

    play(){
        return this.boredom -= 1
    }

}

const startButton = document.querySelector(`#start`)
const eatButton = document.querySelector(`#eat`)
const playButton = document.querySelector(`#play`)
const lightsButton = document.querySelector(`#lights`)
const name = document.querySelector(`.name`)

const link = new Tamagotchi(`${name}`)

// game
const game = {
    startGame() {
        alert(`Welcome to the The Tamagatchi Tournament`)
    },

    setHunger() {
        const intervalID = setInterval(() => {
            const hungerID = document.querySelector(`.hunger`)
            hungerID.innerHTML = `Hunger: ${link.hunger}`
            link.hunger -= 1
            if(link.hunger == 0){
                alert(`${this.name} has fainted from hunger`)
                return
            }
        }, 2000)
    },

    setAge() {
        const intervalID = setInterval(() => {
            const ageID = document.querySelector(`.age`)
            ageID.innerHTML = `Age: ${link.age}`
            link.age += 1
            if(link.age == 5){
                alert(`${this.name} just grew up`)
                document.querySelector(`#link`).src = 'img/link_old.gif'
            }
        }, 2000)
    },

    setSleepiness() {
        const intervalID = setInterval(() => {
            const sleepinessID = document.querySelector(`.sleepiness`)
            sleepinessID.innerHTML = `Sleepiness: ${link.sleepiness}`
            link.sleepiness -= 1
            if(link.sleepiness == 3){
                alert(`${this.name} needs a nap`)
                return
            }
        }, 2000)
    },

    setBoredom() {
        const intervalID = setInterval(() => {
            const boredomID = document.querySelector(`.boredom`)
            boredomID.innerHTML = `Boredom: ${link.boredom}`
            link.boredom += 1
            if(link.boredom == 10){
                alert(`${this.name} is going to beat up some Bokoblins out of boredom`)
            }
        }, 2000)
    },

    setName() {
        this.name = prompt(`What's your Tamagotchi's name?`)
        const nameID = document.querySelector(`.name`)
        nameID.innerText = `${this.name}`
    }
}

startButton.addEventListener('click', () => {
    game.startGame()
    game.setName()
    game.setHunger()
    game.setAge()
    game.setSleepiness()
    game.setBoredom()
    // console.log('working start')
    return
})

eatButton.addEventListener('click', () => {
    link.eat()
    // console.log(`I'm eating`)
})

playButton.addEventListener('click', () => {
    link.play()
    // console.log(`I'm eating`)
})

