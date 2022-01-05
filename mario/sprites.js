class Sprite {
    constructor(img, x, y, type) {
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