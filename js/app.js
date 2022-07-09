class Tamagotchi {
    constructor(name, age){
        this.name = name
        this.age = age
        this.hunger = 10
        this.sleepiness = 10
        this.boredom = 10
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

    bored(){
        return this.boredom += 1
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
    setHunger() {
        const intervalID = setInterval(() => {
            const hungerID = document.querySelector(`.hunger`)
        })
    },

    startGame() {
        alert(`Welcome to the The Tamagatchi Tournament`)
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
    console.log('working start')
})