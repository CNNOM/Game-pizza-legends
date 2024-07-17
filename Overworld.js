class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');
    }

    init(){

        // Игровое Поле
        const image = new Image();
        image.src = "/images/maps/DemoLower.png"
        image.onload = () => {
            this.ctx.drawImage(image, 0, 0);
        }

        //Размешение Несколько Игровых Объектов
        const hero = new GameObject({
            x: 5,
            y: 6,
        })
        const npc1 = new GameObject({
            x: 7,
            y: 9,
            src: "/images/characters/people/npc1.png"
        })

        setTimeout(() => {
            hero.sprite.draw(this.ctx);
            npc1.sprite.draw(this.ctx);
        }, 200)
    }
}