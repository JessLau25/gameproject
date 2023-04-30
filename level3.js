function playa() {
    let w = window.innerWidth;
    let h = window.innerHeight;
    this.height = 400
    this.width = 150
    this.height = 400
    this.x = 0
    //sets player on cursor
    this.show = function() {
        image(playerimg,mouseX-this.width/2,h-this.height,this.width,this.height)
    }
    //to make sure player does not move pass screen
    this.move = function() {
        if(this.x < 0) {
           this.x = 0
        }
        if(this.x > 0) {
            this.x = this.x - 15
        }
        if(this.x > w-160) {
            this.x = w - 160
        }
        if(this.x < w-160) {
            this.x = this.x + 15
        }
    }
}


