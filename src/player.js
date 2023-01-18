const img_idle_right = new Image();
const img_idle_left = new Image();
img_idle_left.src = './img/duck_idle_left.png'
img_idle_right.src = './img/duck_idle_right.png'
export class Player {
    constructor(){
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 160;
        this.height = 160;
        this.image = img_idle_left;
        this.frames = 0;
        this.picture = 0;
    }
    setImageStandLeft(){
        this.image = img_idle_left;
    }
    setImageStandRight(){
        this.image = img_idle_right;
    }
    setImageRunLeft(){
        this.image = imgSpriteRunLeft;
    }
    setImageRunRight(){
        this.image = imgSpriteRunRight;
    }
}