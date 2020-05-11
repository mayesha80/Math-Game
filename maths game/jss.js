var playing=false;
var score;
var action;
var time;
var ca;
//start
document.getElementById("reset").onclick=function(){
    //if we play
    if(playing==true){
        location.reload();//reload page
    }else{//not play
        playing=true;
        
        score=0;
        document.getElementById("sv").innerHTML=score;
       
        show("time");
       time=60;
       document.getElementById("timevalue").innerHTML=time; 
        
        hide("gameover");
        document.getElementById("reset").innerHTML="Reset Game";
        
        startsCountdown(); 
         
        generateQA();
       
    }
}
for(i=1;i<5;i++){
document.getElementById("b"+i).onclick=function(){
    if(playing==true){
        if(this.innerHTML==ca){
           score++;
            document.getElementById("sv").innerHTML=score;
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");
            },1000);
            
            generateQA();
           }else{
            hide("correct");
            show("wrong");
            setTimeout(function(){
            hide("wrong");
            },1000);
           }
    }
}
}
function startsCountdown(){
   action=setInterval(function(){
       time -= 1;
       document.getElementById("timevalue").innerHTML=time;
  if(time==0){
        stopCountdown();
         show("gameover");  
      document.getElementById("gameover").innerHTML="<p>Game Over!</p><p>score is "+score +".</p>";
      hide("time");
      hide("correct");
      hide("wrong");
      playing= false;
      hide("score")
      document.getElementById("reset").innerHTML="Start Game" ;
       show("score");
   }
   },1000); 
}

function stopCountdown(){
    clearInterval(action);
}
function hide(Id){
document.getElementById(Id).style.display="none";
}
function show(Id){
    document.getElementById(Id).style.display="block";
}

function generateQA(){
    var x=1+ Math.round(9*Math.random());
    var y=1+ Math.round(9*Math.random());
    ca= x*y; 
    document.getElementById("qus").innerHTML= x +"*" +y;
    var cp = 1+ Math.round(3*Math.random()); 
      
    document.getElementById("b"+cp).innerHTML = ca;
    
    var ans=[ca];
    
    for(i=1;i<5;i++){
        if(i !=cp){
           var wa;
           do{
                wa = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random()));
            }
            while(ans.indexOf(wa)>-1)
            document.getElementById("b"+i).innerHTML=wa;
            ans.push(wa);
        }
    }
    
}

