
const imgBackground = new Image();
const imgHills = new Image();
imgBackground.src = './img/background.png';
imgHills.src = './img/hills.png';

import { Player } from './src/player.js';
import { Platform } from './src/platform.js';

const canvas = document.querySelector('canvas'); 
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const gravity = 0.6;
const player = new Player();
const platforms = [
    new Platform({x: -1, y:window.innerHeight/2}),
    new Platform({x: 397, y:window.innerHeight/2}),
    new Platform({x: 795, y:window.innerHeight/2}),
    new Platform({x: 1193, y:window.innerHeight/2}),
    new Platform({x: 1591, y:window.innerHeight/2})];

const keys = {
    right: {
        pressed: false,
    },
    left: {
        pressed: false,
    },
    up: {
        pressed: false,
    }
}
const player_state = {
    idle: {
        left: false,
        right: false,
    },
    run: {
        left: false,
        right: false,
    },
    jump: {
        left: false,
        right: false,
    },
    fall: {
        left: false,
        right: false,
    }
}

function drawPlatform(platform){
    c.drawImage(platform.image, platform.position.x, platform.position.y, platform.width, platform.height);
}

function drawPlayer(player){
    // https://lospec.com/pixel-art-scaler/
    /*c.drawImage(imgSpriteStandRight,
                177 * player.frames, 0, tilesheet x, y(top left corner of the sprite) 177, 400,
                player.position.x, player.position.y,
                player.width, player.height);  */
    c.drawImage(player.image,
        320 * player.picture, 0, // tile sheet x, y
        320, 320, //size that we want to draw
        player.position.x, player.position.y, //position on canvas
        player.width, player.height); //size that we want to draw on canvas
}

function updatePlayer(player){
    player.frames++;
    if (player.frames % player.animation_state_modulo == 0){
        player.picture++;
        if (player.picture == 4){
            player.picture = 0;
        }
    }

    drawPlayer(player);
    player.position.x += player.velocity.x;
    player.position.y += player.velocity.y;

    if (player.position.y + player.height + player.velocity.y <= canvas.height){
        player.velocity.y += gravity;
    }else{
        player.velocity.y = 0;
    }
}

function animatePlayerMovement(player){
    console.log(player.position.x)
    if(keys.right.pressed && player.position.x < 400){
        player.setImageRunRight();
        player.velocity.x = 3;
    } else if (keys.left.pressed && player.position.x > 0){
        player.velocity.x = -3;
        player.setImageRunLeft();
    }else {
        player.velocity.x = 0;
        if (keys.right.pressed){
            platforms.forEach((platform) => {platform.position.x -= 3});
            player.setImageRunRight();
        }else if (keys.left.pressed){
            platforms.forEach((platform) => {platform.position.x += 3});
            player.setImageRunLeft();
        }
    }
}

function checkCollision(player){
    var gapUnderPlayer = 25;
    var gapSidePlayer = 50;
    platforms.forEach((platform) => {
        if(player.position.y + player.height <= platform.position.y + gapUnderPlayer
        && player.position.y + player.height + player.velocity.y >= platform.position.y + gapUnderPlayer
        && player.position.x + player.width - gapSidePlayer >= platform.position.x
        && player.position.x + gapSidePlayer <= platform.position.x + platform.width){
            player.velocity.y = 0;
        }
    }); 
}  

function animate(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    requestAnimationFrame(animate);
    c.fillStyle = 'white';
    c.fillRect(0, 0, canvas.width, canvas.height);
    platforms.forEach((platform) => {drawPlatform(platform)});
    updatePlayer(player);
    animatePlayerMovement(player);
    checkCollision(player);
}

animate()

addEventListener('keydown', ({code}) => {
    console.log(code);
    switch (code) {
        case 'Space':
            player.velocity.y -= 10;
            break;
        case 'ArrowRight':
            keys.right.pressed = true;
            break;
        case 'ArrowLeft':
            keys.left.pressed = true;
            break;
    }
})

addEventListener('keyup', ({code}) => {
    console.log(code);
    switch (code) {
        case 'Space':
            break;
        case 'ArrowRight':
            keys.right.pressed = false;
            player.setImageStandRight();
            break;
        case 'ArrowLeft':
            keys.left.pressed = false;
            player.setImageStandLeft();
            break;
    }
})