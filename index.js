//create a intial array of height for the bar 
let a = [90,80,120,130,90,120,120,90,70,98,76,123,64,97,133,76,86,93,102,90,80,132,120,160,92,120,120,90,70,98,]

//get the button where the audio need to play or  and maint a state need to chec where the audio is playing
let btn = document.getElementById('btn');
let runState = false;
//get audio file form the html 
let audio = document.getElementById('audio');

    btn.addEventListener('click', ()=> {
       
       if(runState){
            btn.innerHTML = `<i class="fas fa-play"></i>`;
            runState = false;
            audio.pause();
       }else{
            btn.innerHTML = `<i class="fas fa-pause"></i>`;
            runState = true;
            audio.play();
       }
        
    });

    //get the canvas elemet for the mainuplation on click

let canvas = document.getElementById("canvas");
    canvas.addEventListener('click',(e) => getCursorPosition(canvas,e))

      //this function will help to interact with the canvas and abil to get the postion of the cursor position 
function getCursorPosition(canvas, event) {

    // get the bounders of the canvas
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX-rect.left;
    const right = rect.right-rect.left; 

    //and we need to converte into prectage for to use with play time with the music time 
    // we manuplate the button to play and continue 
    let prectage = Math.floor((x/right)*100);
    let timeToSet = Math.floor((audio.duration * prectage)/100);
        audio.currentTime = timeToSet;
        audio.play();
        btn.innerHTML = `<i class="fas fa-pause"></i>`;
        runState = true;
}

    //to draw in the canvas we need to create context and the context is 2d
    //context is used alot in place so i used c for simple and easy to use
let c =canvas.getContext("2d");
    //getting the bounders for the cavnas for the mainuplation

const rect = canvas.getBoundingClientRect()
const x = rect.left;
const right = rect.right-rect.left;
const height = Math.floor(rect.bottom-rect.top);
     //this function run where time update on the of the audio plays but this we create a animation t
    // effect for the canvas 
audio.ontimeupdate = function() {
    let currentTime = Math.floor(audio.currentTime);
    let min = String(Math.floor(currentTime/60)).padStart(2, '0')
    let sec = String(Math.floor(currentTime%60) ).padStart(2, '0')
    let dur = Math.floor(audio.duration)
        
    // updating the time to the elelemet every time it update
    document.getElementById("crtTime").innerText = ("Timer min "+ min+" : sec " + sec);
    document.getElementById("durTime").innerText = ("Duratin min " + String(Math.floor(dur/60)).padStart(2, '0') + " : sec " + String(Math.floor(dur%60) ).padStart(2, '0'));
    
    //this will clear the previceos animation which we are added 
    c.clearRect(0,0,innerWidth,innerHeight);

    //tag function draw a statci tag in the canvavs check funtion belwo code
    tag(10,70, "green", "Introduction");
    tag(80,70 , 'green', "once_sce");
    tag (180,70, "purple", "Rappport Bulling")
    tag(260,70,"brown" ,"Polite");

    //this loop draw reactangle with gray color bar for the remaining time as to be play 
    for(let i = currentTime+1; i< dur; i++){
        c.fillStyle = "rgba(128,128,128,0.5)";
        c.fillRect(i*10,a[i]+20,4, -30);
    }      
    // this loop draw reactangle with pink color var for the time has been played
    for(let i = 0 ; i<= currentTime; i++){
        c.fillStyle = "rgba(255,0,0,0.5)"
        c.fillRect(i*10,a[i]+20,4,-30);
    }
    //when the audio is completed the state will be reset 
    if(currentTime === dur){
        btn.innerHTML = `<i class="fas fa-play"></i>`;
        runState = false;
        audio.pause();
    }
    
}

    //for inital rendering the this function wil be draw a gray bar chart
function draw(inital , end , color, arr){
    for(let i = inital ; i<= end; i++){ 
        c.fillStyle = color;
        c.fillRect(i*10,arr[i]+20,4,-30);
    }
}
draw(0,30,"rgba(128,128,128,0.5)", a)

   //this function crearte a statci tags for the canvas 

function tag(x,y,color,text){

    c.fill()
    c.beginPath();
    c.arc(x,y,2,0,2*Math.PI);
    c.strokeStyle = color;
    c.fill()
    c.stroke();
    c.fillStyle = color;
    c.fillRect(x,y,1,-40);
    c.fillRect(x-10, y-45,20,5);
    c.font = '10px Arial';
    c.fillStyle = "black";
    c.fillText(text,x-10,y-45)

}
//calling the stack tags initally to render 
tag(10,70, "green", "Introduction");
tag(80,70 , 'green', "once_sce");
tag (180,70, "purple", "Rappport Bulling")
tag(260,70,"brown" ,"Polite");


   



    
