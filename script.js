window.outerHeight = 700;
window.outerWidth = 500
console.log("connected")

var sounds = {
    "R": {
        src: "./sounds/openhat.wav"
    },
    "U": {
        src: "./sounds/ride.wav"
    },
    "G": {
        src: "./sounds/boom.wav"
    },
    "H": {
        src: "./sounds/snare.wav"
    },
    "F": {
        src: "./sounds/tom.wav"
    },
    "J": {
        src: "./sounds/clap.wav"
    },
    "V": {
        src: "./sounds/kick.wav"
    },
    "N": {
        src: "./sounds/kick.wav"
    }
}

async function changeStyle(k){
    let btnPressed = document.querySelector(`.${k}`);
    console.log(btnPressed.classList.value)
    btnPressed.classList =  btnPressed.classList + " on-btn-press";
    console.log(btnPressed.classList)
    setTimeout(()=>{
        btnPressed.classList = `clap ${k}`;
    },500);
}


function btn(s,k){
    let id;
    if(s!=undefined) id = s.innerHTML 
    else id = k;
    try{
        let src = sounds[id].src;
        // clap.addEventListener('keydown',clap.classList.add('active'))
        changeStyle(id);
        var audio = new Audio(src);
        audio.play();
        console.log(src)
    }catch{

    }
    
}

var body = document.getElementsByTagName('body')[0];
body.addEventListener('keyup',(key)=>{
    let k = key.key.toUpperCase();
    console.log(k);
    btn(undefined,k=k)
})



