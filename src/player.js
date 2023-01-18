const img_idle_right = new Image();
const img_idle_left = new Image();
const img_run_right = new Image();
const img_run_left = new Image();
img_idle_left.src = './img/duck_idle_left.png'
img_idle_right.src = './img/duck_idle_right.png'
img_run_left.src = './img/duck_run_left.png'
img_run_right.src = './img/duck_run_right.png'
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
        this.animation_state_modulo = 15;
        this.frames = 0;
        this.picture = 0;
    }
    setImageStandLeft(){
        this.image = img_idle_left;
        this.animation_state_modulo = 15;
    }
    setImageStandRight(){
        this.image = img_idle_right;
        this.animation_state_modulo = 15;
    }
    setImageRunLeft(){
        this.image = img_run_left;
        this.animation_state_modulo = 5;
    }
    setImageRunRight(){
        this.image = img_run_right;
        this.animation_state_modulo = 5;
    }
}