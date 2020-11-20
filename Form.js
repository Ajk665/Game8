class Form{

    constructor(){
        this.input = createInput('name');
        this.button = createButton('PLAY');
        this.greeting = createElement('h2');
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    
    display(){

        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(displayWidth/2 + 100,displayHeight - 600);

        this.input.position(displayWidth/2 + 115,displayHeight - 500);
        this.button.position(displayWidth/2 + 150,displayHeight - 400);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            

            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            
            this.greeting.html("Hello "+ player.name);
            this.greeting.position(displayWidth/2 + 100,displayHeight - 450);
        })
    }



}