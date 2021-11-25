// let btn = document.getElementById('btn');

// let runState = false;

// let audio = document.getElementById('audio');

//     // update the current time 
//     // audio.ontimeupdate = function() {
//     //     console.log(audio.currentTime)
//     // }


//     // durtion of the audio
//     console.log()

//     //to set the time
//     audio.currentTime = 12;

//     btn.addEventListener('click', ()=> {
       
//        if(runState){
//             btn.innerText = "Play";
//             runState = false;
//             audio.pause();
//        }else{
//            btn.innerText = "pasues";
//            runState = true;
           
//            audio.play();
//        }
        
// });

let canvas = document.getElementById("canvas");

    canvas.width = "";
    canvas.height = window.innerHeight;

//contex
//to crearte a retangle 
let c = canvas.getContext("2d"); 
// c.fillStyle = "rgba(255,0,0,0.5)"
// c.fillRect(100,100,100,100);
// c.fillStyle = "rgba(0,255,0,0.5)"
// c.fillRect(200,200,100,100);
// c.fillStyle = "rgba(0,0,255,0.5)"
// c.fillRect(300,100,100,100);

// //to create a line
// c.beginPath();
// c.moveTo(20,40);
// c.lineTo(40,50);
// c.lineTo(100,100);
// c.strokeStyle = "blue"
// c.stroke();

// c.beginPath();
// c.arc(200,200,30,0,Math.PI*2,false);
// c.strokeStyle = "blue";
// c.stroke();

// var x = 200;
// var dx = 4;
// let radi = 30;
// let y = 200;
// let dy = 4;
// function animate(){

//     requestAnimationFrame(animate);
//     //clear the canvas
//     c.clearRect(0,0,innerWidth,innerHeight);
    
//     c.beginPath();
//     c.arc(x,y,radi,0,Math.PI*2,false);
//     c.strokeStyle = "blue";
//     c.stroke();
//     if(x+radi> innerWidth || x-radi < 0){
//         dx = -dx;
//     }

//     if(y+radi > innerHeight || y-radi < 0){
//         dy = -dy;
//     }
//     x += dx;
//     y += dy;
//     // console.log("checking")

// }
// // animate();


function Line(x,y){
    this.x = x; 
    this.y = y;

    this.draw = function(){
        c.beginPath();
        c.moveTo(this.x,this.y);
        c.lineTo(this.x+10,this.y+10)
        c.stroke();
    }
}

window.addEventListener('click', function(event) {

    let x = event.x, y = event.y;

    let line = new Line(x,y);
    line.draw()



})

