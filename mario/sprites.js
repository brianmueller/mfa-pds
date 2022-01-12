class Sprite {
    constructor(img, x, y, type) { // type: index number in tiles array / CSV
        this.img = img;
        this.x = x;
        this.y = y;
        this.w = img.width
        this.h = img.height
        this.type = type;
        this.collidable = COLLIDABLES.includes(type) ? true : false
    }

    display() {
        image(this.img, this.x, this.y, this.w, this.h)
    }
}

class AnimatedSprite extends Sprite {
    constructor(img, x, y, type, walking, idle, jumping) {
        super(img, x, y, type)
        this.dx = 0;
        this.dy = 0;
        this.state = 'idle'
        this.walking = walking // array
        this.idle = idle
        this.jumping = jumping
    }

    display() {
        if(this.state == 'idle') {
            this.animation = this.idle
        } else if(this.state == 'walking') {
            this.animation = this.walking
        } else if(this.state == 'jumping') {
            this.animation = this.jumping
        }

        let numImages = this.animation.length

        image(this.animation[frameCount % numImages], this.x, this.y)
    }
}