const audioCtx = new (window.AudioContext || window.webkitAudioContext) ();
console.log(audioCtx);


const button1 = document.getElementById('gen_button_1');
const button2 = document.getElementById('gen_button_1-2');
let audio1 = new Audio();
let audio2 = new Audio();

dir = "Piano/"
// wav:Yes mp3:Yes  oog:No
//audio0.src = dir + 'E3.mp3' 
audio1.src = dir + 'C3.mp3' 
audio2.src = dir + 'E3.mp3' 

button1.addEventListener('click', play1)
button2.addEventListener('click', play2)

function play1(){
  console.log('click');
  audio1.play();
  audio1.addEventListener('playing',()=>{
    console.log("audio1 : playing");
  });
  audio1.addEventListener('ended',()=>{
    console.log("audio1 : ended");
  });
}

function play2(){
  console.log('click');
  audio2.play();
  const oscillator  = audioCtx.createOscillator();
  const oscillator2 = audioCtx.createOscillator();
  
  setTimeout(function() {  

    audio1.play();
    audio2.pause();
    oscillator.connect(audioCtx.destination);
    oscillator2.connect(audioCtx.destination);
    oscillator.type = 'triangle';
    oscillator2.type = 'triangle';
    oscillator.frequency.value = 50;
    oscillator2.frequency.value = 60;
    oscillator.start();
    oscillator2.start();
  },1000);
  setTimeout(function() {   
    oscillator.stop();
    oscillator2.stop();
    audio1.pause();
  },5000);
    
}


Math.random();