function jumper() {
    //define jumper start position and dimensions
    this.x = w/8
    this.y = 0
    this.width = 150
    this.height = 400
    //force of gravity
    this.gravity = 0.4
    //opposing force
    this.lift = -25
    //velocity
    this.velocity = 0

//show what the object looks like
    this.show = function() {
        fill(255,0,0)
        image(playerimg,this.x,this.y,this.width,this.height)
    }

//what happens when the object jumps
    this.jump = function() {
        this.velocity += this.lift
        jumppy.play()
    }

//handle updating the object
    this.update = function() {
        this.velocity += this.gravity
        this.y += this.velocity
        //pretend there is an atmosphere/air resistance
        this.velocity += 0.5
    //stop the object from falling through the bottom edge
        if (this.y > h - 450 ) {
            this.y = h - 450
            this.velocity = 0
        }
    //stop the object from going through the ceiling
        if (this.y < 0) {
            this.y = 0
            this.velocity = 0
        }
    }
}

function enemyyo() {
        this.x = w;
        this.width = 150;
        this.height = 150;
        this.y = h-150;
        this.speed = 8

    this.show = function() {
        image(enemyimg,this.x,this.y,this.width,this.height)
    }
    this.move = function() {
        this.x -= this.speed
    }
}