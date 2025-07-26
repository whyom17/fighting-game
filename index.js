const canvas= document.querySelector('canvas')

// declaring canvas context - The canvas context is an object that provides methods and properties for drawing on a canvas.

const c=canvas.getContext('2d')  // '2d' is the context type

canvas.width = 1024   // in px
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height)   // (start point in x, start point in y, length in x, length in y )
// there is no need to create this Rectangle rn though

const gravity = 0.2

// creating player and enemy
// moving image in games is called 'sprite'
class Sprite {  
    constructor({position, velocity}){    // object destructuring in function's argument
        this.position = position
        this.velocity = velocity 
        this.height = 150
        this.width = 50
        this.lastKey
    } 

    draw(){
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height )
    }

    update(){
        this.draw()

        this.position.x += this.velocity.x

        this.position.y += this.velocity.y
        this.velocity.y += gravity               // lil bit of NLM

        if (this.position.y + this.height >= canvas.height){       // here (this.position.y + this.height == canvas.height) will not work ... think why ?
            this.velocity.y = 0
        } 
    }
} 

const player = new Sprite({   // passing an object as an argument
    position : {x: 300,
    y: 0},
    velocity : {
        x: 0,
        y: 0}
    })

const enemy = new Sprite({
    position : {x: 600,
    y: 0},
    velocity : {
        x: 0,
        y: 0}
    })

const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    w: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    },
    ArrowRight: {
        pressed: false
    },
    ArrowUp: {
        pressed: false
    }
}

function animate(){
    window.requestAnimationFrame(animate)   // used to loop a function over and over , here 'animate'
    // requestAnimationFrame() enables smooth, power-efficient animations synced to screen refresh, auto-pauses in inactive tabs, and delivers precise timestamps for frame logic.
    // Browsers typically repaint at a rate of 60 frames per second (fps) on most standard displays.

    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.update()
    enemy.update()
    
    // player movements
    if (keys.a.pressed && player.lastKey === 'a'){
        player.velocity.x = -5
    } else if (keys.d.pressed && player.lastKey === 'd'){
        player.velocity.x = 5
    } else {
        player.velocity.x = 0
    }

    // enemy movements
    if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft'){
        enemy.velocity.x = -5
    } else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight'){
        enemy.velocity.x = 5
    } else {
        enemy.velocity.x = 0
    }
}

animate()

window.addEventListener('keydown', (e)=>{   // event = whenever we press a key on keyboard
    
    switch(e.key){
    
    // player movements
    case 'd':
        keys.d.pressed = true
        player.lastKey = 'd'
        break
    case 'a':
        keys.a.pressed = true
        player.lastKey = 'a'
        break
    case 'w':
        player.velocity.y = -10
        keys.w.pressed = true
        player.lastKey = 'w'
        break

    // enemy movements
    case 'ArrowRight':
        keys.ArrowRight.pressed = true
        enemy.lastKey = 'ArrowRight'
        break
    case 'ArrowLeft':
        keys.ArrowLeft.pressed = true
        enemy.lastKey = 'ArrowLeft'
        break
    case 'ArrowUp':
        enemy.velocity.y = -10
        keys.ArrowUp.pressed = true
        enemy.lastKey = 'ArrowUp'
        break
    }   
})

window.addEventListener('keyup', (e)=>{   // event = when a key on keyboard is stopped pressing
    
    switch(e.key){
    case 'd':
        keys.d.pressed = false
        break
    case 'a':
        keys.a.pressed = false
        break
    case 'w':
        keys.w.pressed = false
        break
    case 'ArrowRight':
        keys.ArrowRight.pressed = false
        break
    case 'ArrowLeft':
        keys.ArrowLeft.pressed = false
        break
    case 'ArrowUp':
        keys.ArrowUp.pressed = false
        break
    }    
})

/*      
WE CAN ALSO MOVE OUR PLAYER USING 'keydown' AND 'keyup' BUT THE PROBLEM IS THEY ARE NOT THAT ACCURATE FOR GAME MOVEMENTS

window.addEventListener('keydown', (e)=>{   // event = whenever we press a key on keyboard
    
    switch(e.key){
    case 'd':
        player.velocity.x = 5
        break
    case 'a':
        player.velocity.x = -5
        break
    }   
})

window.addEventListener('keyup', (e)=>{   // event = when a key on keyboard is stopped pressing
    
    switch(e.key){
    case 'd':
        player.velocity.x = 0
        break
    case 'a':
        player.velocity.x = 0 
        break
    }    
})
*/