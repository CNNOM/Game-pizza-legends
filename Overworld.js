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

        const x = 5; //начальные координаты персонажи и его тени
        const y = 6; //начальные координаты персонажи и его тени

        const hero = new Image();
        hero.src = "/images/characters/people/hero.png"
        hero.onload = () => {
            this.ctx.drawImage(
                hero,
                0, //точка left начала
                0, //точка top начала
                32, // ширина разреза
                32, // высота разреза
                x * 16 - 8, // точка нахождения пресонажа, умножаем на 16, так как размер ондой клетки 16px
                y * 16 - 18, // точка нахождения пресонажа
                32, // ширина персонажа
                32, // высота персонажа
            );
        }

        // создаём тень персонажаы
        const shadow = new Image();
        shadow.src = "/images/characters/shadow.png"
        shadow.onload = () => {
            this.ctx.drawImage(
                shadow,
                0,
                0,
                32,
                32,
                x * 16 - 8,
                y * 16 - 18,
                32,
                32,
            );
        }
    }
}