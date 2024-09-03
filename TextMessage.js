class TextMessage {
    constructor({text, onComplete}) {
        this.text = text;
        this.onComplete = onComplete;
        this.element = null;


    }

    createElement() {
        this.element = document.createElement("div");
        this.element.classList.add("TextMessage");

        this.element.innerHTML=(`
           <p class="TextMessage_p"></p>
           <button class="TextMessage_button">Next</button>
        `)

        // Эфект пишуший машинки
        this.revealingText = new ReavalingText({
            element: this.element.querySelector(".TextMessage_p"),
            text: this.text,
        })

        this.element.querySelector("button").addEventListener("click", () =>{
            this.done();
        })


        this.actionListener = new KeyPressListener("Enter", () => {

            this.done();
        })
    }

    done(){
        if(this.revealingText.isDone){
            this.element.remove();
            this.onComplete();
            this.actionListener.unbind()

        }else{
            this.revealingText.warpToDone();
        }
    }

    init(container) {
        this.createElement();
        container.appendChild(this.element);
        this.revealingText.init();
    }
}