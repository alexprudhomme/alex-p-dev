const imgPlatform = new Image();
imgPlatform.src = './img/platform.png';
export class Platform{
    constructor({x, y, width, height}){
        this.position = {
            x,
            y
        }
        this.width = 400;
        this.height = 50;
        this.image = imgPlatform
    }
}