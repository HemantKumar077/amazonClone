console.log("Welcome to Spocify");
//Inititialize the variable
let audioElemant =new Audio('mp3.mp3')



let songIndex=0;
let progressBar=document.getElementById('progressBar');


let songs=[
    {songName:"Slam-e -Ishq", filePath:"mp3.mp3", coverPath:"cover/1.mp3"}
    
]





document.addEventListener('DOMContentLoaded', () => {
    let masterPlay = document.getElementById('masterPlay');
    if (masterPlay) {
      masterPlay.addEventListener('click', () => {
        if(audioElemant.paused || audioElemant.currentTime<=0){
            audioElemant.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
        }

            else{
              audioElemant.pause();
              masterPlay.classList.remove('fa-circle-pause');
              masterPlay.classList.add('fa-circle-play');
        }
      });
    }
  });
  //listen to Evvents
  audioElemant.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    // updates seekbar
    progress = parseInt((audioElemant.currentTime/audioElemant.duration)*100);
    condsole.log(progress);
    progressBar.value=progress;
    
  })
  progressBar.addEventListener('change' , ()=>{
      audioElemant.currentTime = progressBar.value*audioElemant;
  })
  