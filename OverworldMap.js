class OverworldMap {
    constructor(config) {
        this.gameObject = config.gameObject;
        this.walls = config.walls || {};

        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc;

        this.upperImage = new Image();
        this.upperImage.src = config.upperSrc;

    }

    drawLowerImage(ctx, cameraPerson) {
        ctx.drawImage(
            this.lowerImage,
            utils.withGrid(10.5) - cameraPerson.x,
            utils.withGrid(6) - cameraPerson.y,
        )
    }

    drawUpperImage(ctx, cameraPerson) {
        ctx.drawImage(
            this.upperImage,
            utils.withGrid(10.5) - cameraPerson.x,
            utils.withGrid(6) - cameraPerson.y,
        )
    }

    isSpaceTaken(currentX, currentY, direction){
        const {x,y} = utils.nextPosition(currentX, currentY, direction);
        return this.walls[`${x},${y}`] || false;
    }

    mountObject(){
        Object.values(this.gameObject).forEach(o => {
            o.mount(this);
        })
    }

    addWall(x, y){
        this.walls[`${x},${y}`] = true
    }

    removeWall(x, y){
        delete this.walls[`${x},${y}`]
    }

    moveWall(wasX, wasY, direction){
        this.removeWall(wasX, wasY);
        const {x,y} = utils.nextPosition(wasX, wasY, direction);
        this.addWall(x, y);
    }
}

window.OverworldMap = {
    DemoRoom: {
        lowerSrc: "images/maps/DemoLower.png",
        upperSrc: "images/maps/DemoUpper.png",
        gameObject: {
            hero: new Person({
                isPlayerControlled: true,
                x: utils.withGrid(5),
                y: utils.withGrid(6),
            }),
            npc1: new Person({
                x: utils.withGrid(7),
                y: utils.withGrid(9),
                src: "images/characters/people/npc1.png"
            }),
        },
        walls:{
            [utils.asGridCoords(6,1)] : true,
            [utils.asGridCoords(8,1)] : true,

            [utils.asGridCoords(6,2)] : true,
            [utils.asGridCoords(8,2)] : true,

            [utils.asGridCoords(1,3)] : true,
            [utils.asGridCoords(2,3)] : true,
            [utils.asGridCoords(3,3)] : true,
            [utils.asGridCoords(4,3)] : true,
            [utils.asGridCoords(5,3)] : true,
            [utils.asGridCoords(6,3)] : true,
            [utils.asGridCoords(8,3)] : true,
            [utils.asGridCoords(9,3)] : true,
            [utils.asGridCoords(10,3)] : true,

            [utils.asGridCoords(6,4)] : true,
            [utils.asGridCoords(8,4)] : true,


            [utils.asGridCoords(7,6)] : true,
            [utils.asGridCoords(8,6)] : true,
            [utils.asGridCoords(7,7)] : true,
            [utils.asGridCoords(8,7)] : true,


            [utils.asGridCoords(1,10)] : true,
            [utils.asGridCoords(2,10)] : true,
            [utils.asGridCoords(3,10)] : true,
            [utils.asGridCoords(4,10)] : true,
            [utils.asGridCoords(6,10)] : true,
            [utils.asGridCoords(8,10)] : true,
            [utils.asGridCoords(9,10)] : true,
            [utils.asGridCoords(10,10)] : true,

            [utils.asGridCoords(5,11)] : true,


            [utils.asGridCoords(0,0)] : true,
            [utils.asGridCoords(0,1)] : true,
            [utils.asGridCoords(0,2)] : true,
            [utils.asGridCoords(0,3)] : true,
            [utils.asGridCoords(0,4)] : true,
            [utils.asGridCoords(0,5)] : true,
            [utils.asGridCoords(0,6)] : true,
            [utils.asGridCoords(0,8)] : true,
            [utils.asGridCoords(0,9)] : true,
            [utils.asGridCoords(0,10)] : true,

            [utils.asGridCoords(11,0)] : true,
            [utils.asGridCoords(11,1)] : true,
            [utils.asGridCoords(11,2)] : true,
            [utils.asGridCoords(11,3)] : true,
            [utils.asGridCoords(11,4)] : true,
            [utils.asGridCoords(11,5)] : true,
            [utils.asGridCoords(11,6)] : true,
            [utils.asGridCoords(11,8)] : true,
            [utils.asGridCoords(11,9)] : true,
            [utils.asGridCoords(11,10)] : true,
        }
    },
    Kitchen: {
        lowerSrc: "images/maps/KitchenLower.png",
        upperSrc: "images/maps/KitchenUpper.png",
        gameObject: {
            hero: new GameObject({
                x: 3,
                y: 5,
            }),
            npcA: new GameObject({
                x: 9,
                y: 6,
                src: "images/characters/people/npc2.png"
            }),
            npcB: new GameObject({
                x: 10,
                y: 8,
                src: "images/characters/people/npc3.png"
            }),

        }
    }
}