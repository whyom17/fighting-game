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
    constructor({position, velocity}){    // object destructuring in function argument
        this.position = position
        this.velocity = velocity 
        this.height = 150
        this.width = 50
    } 

    draw(){
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height )
    }

    update(){
        this.draw()
        this.position.y += this.velocity.y
        this.velocity.y += gravity               // lil bit of NLM

        if (this.position.y + this.height >= canvas.height){
            this.velocity.y = 0
        } 
    }
} 

const player = new Sprite({   // passing an object as an argument
    position : {x: 0,
    y: 0},
    velocity : {
        x: 0,
        y: 0}
    })

const enemy = new Sprite({
    position : {x: 500,
    y: 200},
    velocity : {
        x: 0,
        y: 0}
    })


function animate(){
    window.requestAnimationFrame(animate)   // used to loop a function over and over , here 'animate'
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.update()
    enemy.update()
}

animate()