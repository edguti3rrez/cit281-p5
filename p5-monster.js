/*
    CIT 281: Project 5
    Name: Edwin Gutierrez
*/


module.exports = class Monster {
    constructor(monster) {
        const { monsterName = 'Unknown', minimumLife = 0, currentLife = 100 } = monster;
        this.monsterName = monsterName;
        this.minimumLife = minimumLife;
        this.currentLife = currentLife;
        this.isAlive = this.currentLife >= this.minimumLife ? true : false;
        /*
        this.monsterName = monster.monsterName ?? 'Unknown';
        this.minimumLife = monster.minimumLife ?? 0;
        this.currentLife = monster.currentLife ?? 100;
        */
    }

    // Will update current life of monster
    updateLife = (lifeChangeAmount) => {
        this.currentLife += lifeChangeAmount;

        this.currentLife = this.currentLife < 0 ? 0 : this.currentLife; 
        // Should we set isALive to false when dead? Or is it supposed to be true like in the project assignemnt?
        this.isAlive = this.currentLife < this.minimumLife ? false : true;
    }

    // is provided a min and max value and will call updateLife() to drain a random amount between min and max
    randomLifeDrain = (minimumLifeDrain, maximumLifeDrain) => {
        let lifeDrain = this.getRandomInteger(minimumLifeDrain, maximumLifeDrain);
        this.updateLife( -lifeDrain );
        console.log(`${this.monsterName} random power drain of ${lifeDrain}`); // Displays the life drain amount
    }

    // Used to get a random number between the minimum and maximim value
    getRandomInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }
}