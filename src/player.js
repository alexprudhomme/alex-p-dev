const imgSpriteRunLeft = new Image();
const imgSpriteRunRight = new Image();
const imgSpriteStandRight = new Image();
const imgSpriteStandLeft = new Image();
imgSpriteRunLeft.src = './img/spriteRunLeft.png';
imgSpriteRunRight.src = './img/spriteRunRight.png';
imgSpriteStandRight.src = './img/spriteStandRight.png';
imgSpriteStandLeft.src = './img/spriteStandLeft.png';
const img_idle = new Image();
img_idle.src = './img/duck_idle_scaled_10x_pngcrushed.png'
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
        this.image = img_idle;
        this.frames = 0;
        this.picture = 0;
    }
    setImageStandLeft(){
        this.image = imgSpriteStandLeft;
    }
    setImageStandRight(){
        this.image = imgSpriteStandRight;
    }
    setImageRunLeft(){
        this.image = imgSpriteRunLeft;
    }
    setImageRunRight(){
        this.image = imgSpriteRunRight;
    }
}