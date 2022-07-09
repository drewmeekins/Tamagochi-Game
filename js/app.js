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

// game
const game = () => {
    const hunger()
}