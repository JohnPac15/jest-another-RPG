const Potion = require('../lib/Potion')

function Enemy(name, weapon) {
    this.name = name
    this.weapon = weapon 
    this.potion = new Potion()

    this.health = Math.floor(Math.random()* 10 + 85)
    this.strength = Math.floor(Math.random()* 5 + 5)
    this.agility = Math.floor(Math.random()* 5 + 5)

     //returns the  health
     Enemy.prototype.getHealth = function() {
        return `${this.name}'s health is now ${this.health}!`
    }

    //makes the isAlive method
    Enemy.prototype.isAlive = function() {
        if(this.health === 0){
            return false
        }
        else{
            return true
        }
    }

     //attack value method
     Enemy.prototype.getAttackValue = function() {
        const min = this.strength - 5;
        const max = this.strength + 5;

        return Math.floor(Math.random()* (max - min) + min);
    }

    //reduce health method 
    Enemy.prototype.reduceHealth = function(health) {
        this.health -= health

        if(this.health < 0){
            this.health = 0
        }
    }

    //this is the description
    Enemy.prototype.getDescription = function() {
        return `A ${this.name} holding a ${this.weapon} has appeared!`
    }
}

module.exports = Enemy