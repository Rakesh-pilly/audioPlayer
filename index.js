


let a = [90,80,120,130,90,120,120,90,70,98,76,123,64,97,133,76,86,93,102,90,80,132,120,160,92,120,120,90,70,98,]


let btn = document.getElementById('btn');

let runState = false;




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

    function getCursorPosition(canvas, event) {
        const rect = canvas.getBoundingClientRect()
        const x = event.clientX-rect.left;
        const right = rect.right-rect.left; 
        console.log("x: " + x)
        console.log("Right " + right);
        let prectage = Math.floor((x/right)*100);
        let timeToSet = Math.floor((audio.duration * prectage)/100);
        console.log(Math.floor((audio.duration * prectage)/100));
        audio.currentTime = timeToSet;
        audio.play();
        btn.innerHTML = `<i class="fas fa-pause"></i>`;

        runState = true;


    }

    let canvas = document.getElementById("canvas");
    canvas.addEventListener('click',function(e){

        getCursorPosition(canvas,e)

    })

    let c =canvas.getContext("2d");




const rect = canvas.getBoundingClientRect()
        const x = rect.left;
        const right = rect.right-rect.left;
        const height = Math.floor(rect.bottom-rect.top);
        console.log("top: " + rect.top+ " bottom: " + rect.bottom);
        console.log("height: " + height);
        console.log(right)


// update the current time 
    audio.ontimeupdate = function() {

        console.log("current time :" + audio.currentTime)
        let currentTime = Math.floor(audio.currentTime);
        let min = String(Math.floor(currentTime/60)).padStart(2, '0')
        let sec = String(Math.floor(currentTime%60) ).padStart(2, '0')
        let dur = Math.floor(audio.duration)
        
        document.getElementById("crtTime").innerText = ("Timer min "+ min+" : sec " + sec);
        document.getElementById("durTime").innerText = ("Duratin min " + String(Math.floor(dur/60)).padStart(2, '0') + " : sec " + String(Math.floor(dur%60) ).padStart(2, '0'));
    
          

        console.log("muqic duratin: "+ dur);
        console.log(`length  :  ${Math.floor((right - x)/dur)}`)
        console.log(`width of the canvas :${ right - x} ` );
        
        c.clearRect(0,0,innerWidth,innerHeight);
        tag(10,70, "green", "Introduction");
        tag(80,70 , 'green', "once_sce");
        tag (180,70, "purple", "Rappport Bulling")
        tag(260,70,"brown" ,"Polite");

        for(let i = currentTime+1; i< dur; i++){
             c.fillStyle = "rgba(128,128,128,0.5)";
            c.fillRect(i*10,a[i]+20,4, -30);
            
        
        }


        for(let i = 0 ; i<= currentTime; i++){

            console.log(i*10)
            c.fillStyle = "rgba(255,0,0,0.5)"
            c.fillRect(i*10,a[i]+20,4,-30);

        }
        

    }

    for(let i = 0 ; i<= 30; i++){

        console.log(i*10)
        

        c.fillStyle = "rgba(128,128,128,0.5)";
        c.fillRect(i*10,a[i]+20,4,-30);

    }



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

tag(10,70, "green", "Introduction");
tag(80,70 , 'green', "once_sce");
tag (180,70, "purple", "Rappport Bulling")
tag(260,70,"brown" ,"Polite");


   



    
