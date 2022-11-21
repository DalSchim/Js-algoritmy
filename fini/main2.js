let taxi = 0
let music = [
    "wejden-anisa",
    "creep-radiohead",
    "secretdoor-AM",
    "heartofglass-blondi",
    "numb-linkinparck"
]

class Personage{
    constructor(name, health){
    this.name=name;
    this.health=health;
    }
    song(){
        return Math.floor(Math.random() * 5)
    }
}

let passager = new Personage("jojo",1)


for( i= 0 ; i< 30; i++){
    console.log(i)
    let musique = music[passager.song()]
    console.log(musique)
    if(musique== "wejden-anisa" ){
        passager.health -= 1
        taxi += 1
        console.log(passager)
    }

    if(passager.health == 0){
        console.log ("explosion")
        break
    }
}