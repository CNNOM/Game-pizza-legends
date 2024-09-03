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

    bindActionInput(){
        new KeyPressListener("Enter", () =>{
            this.map.checkForActionCutscene()
        })
    }

    bindHeroPositionCheck(){
        document.addEventListener("PersonWalkingComplete", e => {
            if(e.detail.whoId === "hero"){
                this.map.checkForFootstepCutscene()
            }
        })
    }

    startMap(mapConfig){
        this.map = new OverworldMap(mapConfig);
        this.map.overworld = this;
        this.map.mountObject();
    }

    init() {
        this.startMap(window.OverworldMap.Kitchen);

        this.bindActionInput();
        this.bindHeroPositionCheck();

        this.directionInput = new DirectionInput();
        this.directionInput.init()

        this.startGameLoop();

        this.map.startCutscene([
            { type: "textMessage", text: "Равным образом повышение уровня гражданского сознания позволяет оценить значение модели..."},

        ])

    }
}