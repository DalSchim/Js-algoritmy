
let prenom = ["jack","martin","patrick","pierre","Guillaume"]

class tueur{
    constructor(name, vie){
    this.name=name;
    this.vie=vie;
    }
}
x
tueurs = new tueur("jason",100);

class careteristique{
    constructor(nom, pm, pg, dgm){
    this.nom=nom
    this.pm=pm
    this.pg=pg
    this.dgm=dgm
    }
    


}

function pepol(np){
    return Math.floor(Math.random()* np)
}

function proba(){
    return Math.random()
}



let nerd= new careteristique(prenom[Math.floor(Math.random() * 5)] ,0.3 , 0.5, 0.2)
let sportif = new careteristique(prenom[Math.floor(Math.random() * 5)] ,0.3 , 0.5, 0.2)
let blonde= new careteristique(prenom[Math.floor(Math.random() * 5)] ,0.3 , 0.5, 0.2)
let pokergys= new careteristique(prenom[Math.floor(Math.random() * 5)] ,0.3 , 0.5, 0.2)
let gros= new careteristique(prenom[Math.floor(Math.random() * 5)] ,0.3 , 0.5, 0.2)






let players =[nerd,sportif,blonde,pokergys,gros]

console.log(players)


while(tueurs.vie > 0 && players.length >0 ){

    npeople = pepol(players.length)
    player= players[npeople]
    prob= proba()

    if(prob<= player.pm){
        console.log(player.nom+" est mort")
        players.splice(npeople,1)
    }

    else if (prob <= player.pm+ player.pg){
        tueurs.vie -= 10;
        console.log("le thuer a prie 10 de dega")
        console.log(tueurs)
    }
    else{
    tueurs.vie -= 15;
    console.log(player.nom+" est mort")
    players.splice(npeople,1)
        console.log(tueurs)
    }

}