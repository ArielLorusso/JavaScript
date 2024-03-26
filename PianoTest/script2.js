const audioCtx = new (window.AudioContext || window.webkitAudioContext) ();
console.log(audioCtx);


//const button1 = document.getElementById('button1');

gen_button_1.addEventListener('click', rand_maj_min)
gen_button_2.addEventListener('click', rand_interval)


// https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API
// https://www.musicca.com/intervals
const inter_semitone  = 1.059463094359295265 // 2^(1/12)
const inter_tone      = 1.122462048309372981 // 2^(2/12)
const inter_second_dis= inter_semitone
const inter_second    = inter_tone
const inter_third_dis = 1.189207115002721067 // 2^(3/12)
const inter_third     = 1.259921049894873165 // 2^(4/12)
const inter_forth     = 1.334839854170034365 // 2^(5/12)
const inter_fifth_dis = 1.414213562373095049 // 2^(6/12)
const inter_fifth     = 1.498307076876681499 // 2^(7/12)
const inter_sixth_dis = 1.587401051968199475 // 2^(8/12)
const inter_sixth     = 1.681792830507429086 // 2^(9/12)
const inter_sevent_dis= 1.781797436280678609  // 2^(10/12)
const inter_seventh   = 1.887748625363386993 // 2^(11/12)
const inter_octave    = 2.0                  // 2^(12/12)

console.log(inter_semitone);

let playing = false;
function rand_maj_min(){
  if( !playing ){
    playing = true;
    let major = Math.random(); //  ( 0 ~ 1 )
    if (major >= 0.5 )  /* MAJOR */ {
      // let octave_num = Math.floor( Math.random() * 4+3);
      f1 = 440;
      f2 = f1 * inter_third;
      f3 = f1 * inter_fifth;  
    }
    else /* MINOR */ { 
      f1 = 440;
      f2 = f1 * inter_third_dis;
      f3 = f1 * inter_fifth;
    }
    console.log(major);
    
    const oscilators_3 = [  audioCtx.createOscillator(),
                            audioCtx.createOscillator(),
                            audioCtx.createOscillator() ];
      
    const frequencies  = [f1, f2, f3];
    
    for (let i = 0; i < oscilators_3.length; i++) {
      const osc = oscilators_3[i];
      osc.connect(audioCtx.destination);
      osc.type = 'sine';
      osc.frequency.value = frequencies[i];
      osc.start();
    }
    
    setTimeout(function() {
      for (const osc of oscilators_3) {
        osc.stop();
      }
      playing = false;
    },700);  
  }
}

intervals = [ inter_second_dis, inter_second,
              inter_third_dis , inter_third ,
              inter_forth,
              inter_fifth_dis , inter_fifth ,
              inter_sixth_dis , inter_sixth , 
              inter_sevent_dis , inter_seventh ] ;
  
intervals_names = [ '2m','2',
                    '3m','3' ,
                    '4',
                    '5m','5' ,
                    '6m','6' ,
                    '7m','7' ];

function rand_interval() {    // INTERVALS 
  let f0 = 220;
  let f1 = 1 ,f2 =1 ;
  let frequencies  = [f1, f2];
  // GENERATE FRECUENCIES
  for (let i = 0; i < frequencies.length; i++) {
    let rand_inter = Math.floor( Math.random() * 8);
    frequencies[i] = f0  * intervals[ rand_inter ];    
    console.log(intervals_names[rand_inter])
  }
  
  // PLAY FRECUENCIES
  console.log(frequencies)
  const oscilators_2 = [  audioCtx.createOscillator(),
                          audioCtx.createOscillator() ];
  for (let i = 0; i < oscilators_2.length; i++) {
    const osc = oscilators_2[i];
    osc.connect(audioCtx.destination);
    osc.type = 'triangle';
    osc.frequency.value = frequencies[i];
  }
  console.log(oscilators_2);
  setTimeout(function() {
    oscilators_2[0].start();    },500);
  //        ^?
  setTimeout(function() {
    oscilators_2[0].stop();    
    oscilators_2[1].start();    },1000);
  setTimeout(function() {
    oscilators_2[1].stop();     },1500);
}

