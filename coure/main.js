let j = 'jean'
let p = 'paul'
let result = verify(j,p)

function verify(a,b){
    if( a == b ){
        return true
    }
    else{
        return false
    }
}

console.log(result);




table =[]


    table.push("vincent", "paul", "arture");

    table.forEach(element => { 
        console.log(element + 'vas a la peche')
        
    });



class pokemon{ 
    constructor(name, attak, defence, hp , luck){

        this.name = name;
        this.attak=attak;
        this.defence=defence;
        this.hp=hp;
        this.luck=luck;
    }

    
        
    isLucky(){
        let i =Math.random()
        console.log("luck " +i )
        if(this.luck < i){
            return true
        }
        else {
           return false
        }
    }

    attackPokemon(otherpokemon){
        
        if(this.isLucky()){
           let dégat = this.attak - otherpokemon.defence;
           otherpokemon.hp -= dégat
           
        }
        

    }

}


let picka = new pokemon(null,20,10, 100,0.7)
let cara = new pokemon(null,26,15, 100,0.4)

while(picka.hp>0 && cara.hp>0){
    picka.attackPokemon(cara)
    console.log(cara.hp)
    if(cara.hp <  0 ){
        break
    }
}