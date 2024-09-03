class ReavalingText {
    constructor(config) {
        this.element = config.element;
        this.text = config.text;
        this.speed = config.speed || 70;

        this.timeout = null;
        this.isDone = false;
    }

    revealOneCharacter(list){
        const next = list.splice(0,1)[0];
        next.span.classList.add("revealed")

        if(list.length > 0){
            this.timeout = setTimeout(() => {
                this.revealOneCharacter(list)
            }, next.delayAfter)
        }
        else{
            this.isDone = true
        }
    }

    init() {
        let characters = [];
        this.text.split("").forEach(char => { // Используем другое имя для параметра
            let span = document.createElement("span");
            console.log(char);
            span.textContent = char;
            this.element.appendChild(span);

            characters.push({
                span,
                delayAfter: char === " " ? 0 : this.speed
            });
        });

        this.revealOneCharacter(characters);
    }
}