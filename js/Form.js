///creating a form class
class Form {

  //the consturctor is being shown here
  constructor() {
    ///createing the button, element, input
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
  }
  //hide function has been used
  hide(){
    ///hiding the greeting, button, input and title
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }
///////displaying the form class
  display(){
    ///title is being shown
    this.title.html("Car Racing Game");
    ///title position is given
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,20);

    //mousePressed is being used
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      ///greeting is being done
      this.greeting.html("Hello " + player.name)
      ///position of the greeting is shown
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });
///mousePressed used in reset
    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    });

  }
}
