window.onload=function(){
    var hour = 0o0;
    var minute = 0o0;
    var  second = 0o0;
    var count = 0o0;
    var strhour =document.getElementById('hr');
    var strminute =document.getElementById('min');
    var strsecond =document.getElementById('sec');
    var strcount =document.getElementById('count');
    var startBtn=document.getElementById('start');
    var stopBtn=document.getElementById('stop');
    var resetBtn=document.getElementById('reset');
    var Interval;
    startBtn.onclick=function(){
        clearInterval(Interval);
        Interval=setInterval(startTimer,10);
    }
    stopBtn.onclick=function(){
        clearInterval(Interval);
    }
    resetBtn.onclick=function(){
        clearInterval(Interval);
        hour="00";
        minute="00";
        second="00";
        count="00";
        strhour.innerHTML = hour;
        strminute.innerHTML = minute;
        strsecond.innerHTML = second;
        strcount.innerHTML = count;

    }
    function startTimer(){
        count++;
        if(count <=9){
            strcount.innerHTML="0"+count;
        }
        if(count > 9){
            strcount.innerHTML=count;
        }
        if(count >99){
            console.log(second);
            second++;
            strsecond.innerHTML="0"+second;
            count=0;
            strcount.innerHTML="0" + 0;
         
        }
       
        if(second > 9){
            strsecond.innerHTML=second;
        }
        if(second >59){
            console.log(minute);
            minute++;
            strminute.innerHTML="0"+minute;
            second=0;
            strsecond.innerHTML="0" + 0;
        }
        if(minute > 9){
            strminute.innerHTML=minute;
        }
        if(minute >59){
            console.log(hour);
            hour++;
            strhour.innerHTML="0"+hour;
            minute=0;
            strminute.innerHTML="0" + 0;
        }
        if(hour>9){
            strhour.innerHTML=hour;
        }
    }
}
 