function ityou() {
        this.width = 200
        this.height = 150
        //sets player on cursor
    this.show = function() {
        image(boxerimg,mouseX-this.width/2,mouseY-this.height/2,this.width,this.height)
    }
}

function notyou() {
        this.x = w/2
        this.y = h/2
        this.width = 200
        this.height = 250
        
    this.show = function(papaimgs) {
        image(papaimgs,this.x,this.y,this.width,this.height)
    }
}

function busyou() {
    this.x = w/4
    this.y = h/4
    this.height = 200
    this.width = 200

this.show = function() {
    image(busdrive,this.x,this.y,this.width,this.height)
}
}