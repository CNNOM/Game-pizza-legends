class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');
    }

    init(){
        console.log("Привет из другого мира", this)
    }
}