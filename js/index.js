//maybe or maybe
const dicesound = document.querySelector('.song');
const bgsound = document.querySelector('.bgsound');
const timera = document.querySelector('.restart');
var sayac = 1;
var i = 1;
var a;
function diceRoll(){
    dicesound.play();
    var birinciSayi = Math.random();
    var ikinciSayi = Math.random();
    var vid = document.getElementById("zarSong");
        vid.volume = 0.005;

    if(birinciSayi < 1) {
        birinciSayi = (birinciSayi + 1 ) * 6;
        ikinciSayi = (ikinciSayi + 1) * 6;
        birinciSayi = Math.floor(birinciSayi);
        ikinciSayi = Math.floor(ikinciSayi);
        if(birinciSayi > 6) {
            birinciSayi = birinciSayi % 6;
        }
        if(ikinciSayi > 6) {
            ikinciSayi = ikinciSayi %  6;
        }
    }

    if(birinciSayi == 1 && ikinciSayi == 1) {
        document.getElementById('diceS').innerHTML = '<i class="fas fa-dice-one"></i>';
        document.getElementById('diceS2').innerHTML = '<i class="fas fa-dice-one"></i>';
        document.getElementById("score").innerHTML = sayac++;
      
    }
    if(birinciSayi == 1 && ikinciSayi == 2) {
        document.getElementById('diceS').innerHTML = '<i class="fas fa-dice-one"></i>';
        document.getElementById('diceS2').innerHTML = '<i class="fas fa-dice-two"></i>';
    }
    if(birinciSayi == 1 && ikinciSayi == 3) {
        document.getElementById('diceS').innerHTML = '<i class="fas fa-dice-one"></i>';
        document.getElementById('diceS2').innerHTML = '<i class="fas fa-dice-three"></i>';
    }
    if(birinciSayi == 1 && ikinciSayi == 4) {
        document.getElementById('diceS').innerHTML = '<i class="fas fa-dice-one"></i>';
        document.getElementById('diceS2').innerHTML = '<i class="fas fa-dice-four"></i>';
    }
    if(birinciSayi == 1 && ikinciSayi == 5) {
        document.getElementById('diceS').innerHTML = '<i class="fas fa-dice-one"></i>';
        document.getElementById('diceS2').innerHTML = '<i class="fas fa-dice-five"></i>';
    }
    if(birinciSayi == 1 && ikinciSayi == 6) {
        document.getElementById('diceS').innerHTML = '<i class="fas fa-dice-one"></i>';
        document.getElementById('diceS2').innerHTML = '<i class="fas fa-dice-six"></i>';
    }
    if(birinciSayi == 2 && ikinciSayi == 1) {
        document.getElementById('diceS').innerHTML = '<i class="fas fa-dice-two"></i>';
        document.getElementById('diceS2').innerHTML = '<i class="fas fa-dice-one"></i>';
    }
    if(birinciSayi == 2 && ikinciSayi == 2) {
        document.getElementById('diceS').innerHTML = '<i class="fas fa-dice-two"></i>';
        document.getElementById('diceS2').innerHTML = '<i class="fas fa-dice-two"></i>';
        document.getElementById('score').innerHTML = sayac++;
    }
    if(birinciSayi == 2 && ikinciSayi == 3) {
        document.getElementById('diceS').innerHTML = '<i class="fas fa-dice-two"></i>';
        document.getElementById('diceS2').innerHTML = '<i class="fas fa-dice-three"></i>';
    }
    if(birinciSayi == 2 && ikinciSayi == 4) {
        document.getElementById('diceS').innerHTML = '<i class="fas fa-dice-two"></i>';
        document.getElementById('diceS2').innerHTML = '<i class="fas fa-dice-four"></i>';
    }
    if(birinciSayi == 2 && ikinciSayi == 5) {
        document.getElementById('diceS').innerHTML = '<i class="fas fa-dice-two"></i>';
        document.getElementById('diceS2').innerHTML = '<i class="fas fa-dice-five"></i>';
    }
    if(birinciSayi == 2 && ikinciSayi == 6) {
        document.getElementById('diceS').innerHTML = '<i class="fas fa-dice-two"></i>';
        document.getElementById('diceS2').innerHTML = '<i class="fas fa-dice-six"></i>';
    }
    if(birinciSayi == 3 && ikinciSayi == 1) {
        document.getElementById('diceS').innerHTML = '<i class="fas fa-dice-three"></i>';
        document.getElementById('diceS2').innerHTML = '<i class="fas fa-dice-one"></i>';
    }
    if(birinciSayi == 3 && ikinciSayi == 2) {
        document.getElementById('diceS').innerHTML = '<i class="fas fa-dice-three"></i>';
        document.getElementById('diceS2').innerHTML = '<i class="fas fa-dice-two"></i>';
    }
    if(birinciSayi == 3 && ikinciSayi == 3) {
        document.getElementById('diceS').innerHTML = '<i class="fas fa-dice-three"></i>';
        document.getElementById('diceS2').innerHTML = '<i class="fas fa-dice-three"></i>';
        document.getElementById('score').innerHTML = sayac++;
    }
    if(birinciSayi == 3 && ikinciSayi == 4) {
        document.getElementById('diceS').innerHTML = '<i class="fas fa-dice-three"></i>';
        document.getElementById('diceS2').innerHTML = '<i class="fas fa-dice-four"></i>';
    }
    if(birinciSayi == 3 && ikinciSayi == 5) {
        document.getElementById('diceS').innerHTML = '<i class="fas fa-dice-three"></i>';
        document.getElementById('diceS2').innerHTML = '<i class="fas fa-dice-five"></i>';
    }
    if(birinciSayi == 3 && ikinciSayi == 6) {
        document.getElementById('diceS').innerHTML = '<i class="fas fa-dice-three"></i>';
        document.getElementById('diceS2').innerHTML = '<i class="fas fa-dice-six"></i>';
    }
    if(birinciSayi == 4 && ikinciSayi == 1) {
        document.getElementById('diceS').innerHTML = '<i class="fas fa-dice-four"></i>';
        document.getElementById('diceS2').innerHTML = '<i class="fas fa-dice-one"></i>';
    }
    if(birinciSayi == 4 && ikinciSayi == 2) {
        document.getElementById('diceS').innerHTML = '<i class="fas fa-dice-four"></i>';
        document.getElementById('diceS2').innerHTML = '<i class="fas fa-dice-two"></i>';
    }
    if(birinciSayi == 4 && ikinciSayi == 3) {
        document.getElementById('diceS').innerHTML = '<i class="fas fa-dice-four"></i>';
        document.getElementById('diceS2').innerHTML = '<i class="fas fa-dice-three"></i>';
    }
    if(birinciSayi == 4 && ikinciSayi == 4) {
        document.getElementById('diceS').innerHTML = '<i class="fas fa-dice-four"></i>';
        document.getElementById('diceS2').innerHTML = '<i class="fas fa-dice-four"></i>';
        document.getElementById('score').innerHTML = sayac++;
    }
    if(birinciSayi == 4 && ikinciSayi == 5) {
        document.getElementById('diceS').innerHTML = '<i class="fas fa-dice-four"></i>';
        document.getElementById('diceS2').innerHTML = '<i class="fas fa-dice-five"></i>';
    }
    if(birinciSayi == 4 && ikinciSayi == 6) {
        document.getElementById('diceS').innerHTML = '<i class="fas fa-dice-four"></i>';
        document.getElementById('diceS2').innerHTML = '<i class="fas fa-dice-six"></i>';
    }
    if(birinciSayi == 5 && ikinciSayi == 1) {
        document.getElementById('diceS').innerHTML = '<i class="fas fa-dice-five"></i>';
        document.getElementById('diceS2').innerHTML = '<i class="fas fa-dice-one"></i>';
    }
    if(birinciSayi == 5 && ikinciSayi == 2) {
        document.getElementById('diceS').innerHTML = '<i class="fas fa-dice-five"></i>';
        document.getElementById('diceS2').innerHTML = '<i class="fas fa-dice-two"></i>';
    }
    if(birinciSayi == 5 && ikinciSayi == 3) {
        document.getElementById('diceS').innerHTML = '<i class="fas fa-dice-five"></i>';
        document.getElementById('diceS2').innerHTML = '<i class="fas fa-dice-three"></i>';
    }
    if(birinciSayi == 5 && ikinciSayi == 4) {
        document.getElementById('diceS').innerHTML = '<i class="fas fa-dice-five"></i>';
        document.getElementById('diceS2').innerHTML = '<i class="fas fa-dice-four"></i>';
    }
    if(birinciSayi == 5 && ikinciSayi == 5) {
        document.getElementById('diceS').innerHTML = '<i class="fas fa-dice-five"></i>';
        document.getElementById('diceS2').innerHTML = '<i class="fas fa-dice-five"></i>';
        document.getElementById('score').innerHTML = sayac++;
    }
    if(birinciSayi == 5 && ikinciSayi == 6) {
        document.getElementById('diceS').innerHTML = '<i class="fas fa-dice-five"></i>';
        document.getElementById('diceS2').innerHTML = '<i class="fas fa-dice-six"></i>';
    }
    if(birinciSayi == 6 && ikinciSayi == 1) {
        document.getElementById('diceS').innerHTML = '<i class="fas fa-dice-six"></i>';
        document.getElementById('diceS2').innerHTML = '<i class="fas fa-dice-one"></i>';
    }
    if(birinciSayi == 6 && ikinciSayi == 2) {
        document.getElementById('diceS').innerHTML = '<i class="fas fa-dice-six"></i>';
        document.getElementById('diceS2').innerHTML = '<i class="fas fa-dice-two"></i>';
    }
    if(birinciSayi == 6 && ikinciSayi == 3) {
        document.getElementById('diceS').innerHTML = '<i class="fas fa-dice-six"></i>';
        document.getElementById('diceS2').innerHTML = '<i class="fas fa-dice-three"></i>';
    }
    if(birinciSayi == 6 && ikinciSayi == 4) {
        document.getElementById('diceS').innerHTML = '<i class="fas fa-dice-six"></i>';
        document.getElementById('diceS2').innerHTML = '<i class="fas fa-dice-four"></i>';
    }
    if(birinciSayi == 6 && ikinciSayi == 5) {
        document.getElementById('diceS').innerHTML = '<i class="fas fa-dice-six"></i>';
        document.getElementById('diceS2').innerHTML = '<i class="fas fa-dice-five"></i>';
    }
    if(birinciSayi == 6 && ikinciSayi == 6) {
        document.getElementById('diceS').innerHTML = '<i class="fas fa-dice-six"></i>';
        document.getElementById('diceS2').innerHTML = '<i class="fas fa-dice-six"></i>';
        document.getElementById('score').innerHTML = sayac++;
    }
    document.getElementById("dice2").style.color = 'rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';
}
function sure() {
    bgsound.currentTime = 0;  
    bgsound.play();
    parseInt(bgsound.currentTime);
    if(bgsound.currentTime == 0) { 
            setInterval(function(){
            document.getElementById("timerA").innerHTML = i++;
            if(i > 50) {
                document.getElementById("timerA").style.fontSize = '15px';
                if(document.getElementById("timerA").style.color == 'red') {
                    document.getElementById("timerA").style.color = 'rgb(248, 192, 70)';
                }else{
                    document.getElementById("timerA").style.color = 'red';
                }
            }
            if(bgsound.currentTime > 60) {
            var yourScore = document.getElementById('score').innerHTML;
            if(yourScore>69) {
                    var vid2 = document.getElementById("bgSong");
                    vid2.volume = 0; 
                    var newScore = yourScore
                    alert("                                         Great!. New Record" 
                    + "\n                                              Time's Up!\n                                            Your Score : " 
                    + yourScore
                    +"\n\n----------------------------------------------------------------------------\n\n         "
                    +"                                  Highest Score            \n                                                    " + newScore);
                    location.reload();
                    document.getElementById('score').innerHTML = "0";
                    document.getElementById("timerA").innerHTML = "1";
                    document.getElementById("dice2").style.visibility = "hidden";
                    document.getElementById("dice1").style.visibility = "visible";
                    document.getElementById("dice3").style.visibility = "hidden";
                    document.getElementById("dice1").style.cursor = "";
                    document.getElementById("dice1").style.pointerEvents = "";
                    document.getElementById("dice3").style.color = 'rgba(79, 61, 14, 0.796)';
                    document.getElementById("dice2").style.color =   'rgba(79, 61, 14, 0.796)';
                    document.getElementById('diceS').innerHTML = '';
                    document.getElementById('diceS2').innerHTML = '';
                    sayac = 0;
                    var sound = bgsound;
                    sound.currentTime = 0 ;
                    bgsound.play();
                    document.getElementById("timerA").innerHTML = (i = i -2);
                    document.getElementById("timerA").innerHTML = "0";
                    var vid2 = document.getElementById("bgSong");
                    vid2.volume = 0; 
            }else{
                    var vid2 = document.getElementById("bgSong");
                    vid2.volume = 0; 
                    alert("                                              Time's Up!\n                                            Your Score : " 
                    + yourScore
                    +"\n\n-------------------------------------------------------------------------------\n\n\n\n         "
                    +"                                  Highest Score            \n                                                   69");
                    location.reload();
                    document.getElementById('score').innerHTML = "0";
                    document.getElementById("timerA").innerHTML = "1";
                    document.getElementById("dice1").style.visibility = "visible";
                    document.getElementById("dice2").style.visibility = "hidden";
                    document.getElementById("dice3").style.visibility = "hidden";
                    document.getElementById("dice1").style.cursor = "";
                    document.getElementById("dice1").style.pointerEvents = "";
                    document.getElementById("dice3").style.color = 'rgba(79, 61, 14, 0.796)';
                    document.getElementById("dice2").style.color =   'rgba(79, 61, 14, 0.796)';
                    document.getElementById('diceS').innerHTML = '';
                    document.getElementById('diceS2').innerHTML = '';
                    sayac = 0;
                    var sound = bgsound;
                    sound.currentTime = 0 ;
                    bgsound.play();
                    document.getElementById("timerA").innerHTML = (i = i -2);
                    document.getElementById("timerA").innerHTML = "0";
                    var vid2 = document.getElementById("bgSong");
                    vid2.volume = 0; 
                }
            }
        },1000);
    }
    var vid2 = document.getElementById("bgSong");
    vid2.volume = 0.09;
    document.getElementById("dice2").style.visibility = "visible";
    document.getElementById("dice3").style.visibility = "visible";
    document.getElementById("dice1").style.cursor = "default";
    document.getElementById("dice1").style.pointerEvents = "none";
    
}

function resAt() {
    location.reload();
}