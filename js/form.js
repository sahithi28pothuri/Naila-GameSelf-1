class Form{
  
  constructor(){
    this.titleImg = createImg("./images/image main shinchan.jpg","gameTitle")   
  }

  setElementsPosition() {
      this.titleImg.position(120, 160);
  }

  setElementsStyle() {
    this.titleImg.class("gameTitle");
  }

  hide() {
    // this.greeting.hide();
    // this.playButton.hide();
    // this.input.hide();
  }
  display(){
    this.setElementsPosition()
  }
}
