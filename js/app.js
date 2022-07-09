class Tamagotchi {
    constructor(name){
        this.name = name
        this.age = 0
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
    // console.log('working start')
    return
})

eatButton.addEventListener('click', () => {
    link.eat()
    // console.log(`I'm eating`)
})