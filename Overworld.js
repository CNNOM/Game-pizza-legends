class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');
    }

    init(){
        console.log("Привет из другого мира", this)

        const image = new Image();
        image.src = "/images/maps/DemoLower.png"
        image.onload = () => {
            this.ctx.drawImage(image, 0, 0);
        }
    }
}