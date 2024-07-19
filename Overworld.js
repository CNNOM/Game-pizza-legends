class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.map = null;
    }

    startGameLoop() {
        const step = () => {

            // Clear off the canvas
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

            const cameraPerson = this.map.gameObject.hero

            Object.values(this.map.gameObject).forEach(object => {
                object.update({
                    arrow: this.directionInput.direction,
                    map: this.map,
                })
            })
            //Draw Lower layer
            this.map.drawLowerImage(this.ctx, cameraPerson);

            //Draw Game Objects
            Object.values(this.map.gameObject).sort((a, b) => {
                return a.y - b.y;
            }).forEach(object => {
                object.sprite.draw(this.ctx, cameraPerson)
            })

            //Draw Upper layer
            this.map.drawUpperImage(this.ctx, cameraPerson);

            requestAnimationFrame(() => {
                step();
            })
        }
        step()
    }

    init() {
        this.map = new OverworldMap(window.OverworldMap.DemoRoom)
        this.map.mountObject();
        console.log(this.map.walls);
        this.directionInput = new DirectionInput();
        this.directionInput.init()

        this.startGameLoop();

        this.map.startCutscene([
            {who: "hero", type: "walk", direction: "down"},
            {who: "hero", type: "walk", direction: "down"},
            {who: "npcA", type: "walk", direction: "up"},
            {who: "npcA", type: "walk", direction: "left"},
            {who: "hero", type: "stand", direction: "right", time: 200},
            {type: "textMessage", text:"авыаоукщащкоащь"},

        ])

    }
}