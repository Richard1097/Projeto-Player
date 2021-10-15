let audio = document.getElementById("audio");

var i = 0;
var musicas =[
{mp3:'./Galeria/Ghost Rider x Ranji & Major7 - Vicious Game (Official Lyrics Video)_70k.mp3',titulo:'Ghost Rider x Ranji & Major7 - Vicious Game'},
{mp3:'./Galeria/Neelix - Makeup (feat Caroline Harrison) (Blazy Remix) Official Audio _70k.mp3',titulo:'Neelix - Makeup Blazy Remix'},
{mp3:'./Galeria/3 Of Life - Santa Catarina_70k.mp3',titulo:'3 Of Life - Santa Catarina'},
];
audio = document.getElementById('audio');
    audio.addEventListener('canplay', play_evento , false);
    audio.addEventListener('timeupdate', atualizar , false);
    audio.addEventListener('ended', proxima , false);
 
function play(){
    audio.play();
}
function pause(){
    audio.pause();
}
function aumentarVolume(){
    if( audio.volume < 1)  audio.volume += 0.1;
}

function diminuirVolume(){
    if( audio.volume > 0)  audio.volume -= 0.1;
}
     
function mute(){
    if( audio.muted ){
        audio.muted = false;
    }else{
        audio.muted = true;
    }
}
function next(){
    if(audio.canPlayType("audio/mp3") != ''){
        audio.src = musicas[i].mp3;
    }
    document.getElementById('nome_musica').innerHTML = musicas[i].titulo;
    audio.play();

    i++;
    if( i >= musicas.length ) i = 0;
}
function back(){
    if(audio.canPlayType("audio/mp3") != ''){
        audio.src = musicas[i].mp3;
    }
    document.getElementById('nome_musica').innerHTML = musicas[i].titulo;
    audio.play();


    i--;
    if(i < 0 ) i = musicas.length -1;

    if( i >= musicas.length ) i = 0;

}

function play_evento(){
    document.getElementById('tempo_atual').innerHTML = secToStr( audio.currentTime) ;
    document.getElementById('tempo_total').innerHTML = secToStr( audio.duration );
    document.getElementById('barraProg').max = audio.duration;
    document.getElementById('barraProg').value = audio.currentTime;
}

function atualizar(){
    document.getElementById('tempo_atual').innerHTML = secToStr( audio.currentTime);
    document.getElementById('barraProg').value = audio.currentTime;
}
function secToStr( sec_num ) {
    sec_num = Math.floor( sec_num );
    var horas   = Math.floor(sec_num / 3600);
    var minutos = Math.floor((sec_num - (horas * 3600)) / 60);
    var segundos = sec_num - (horas * 3600) - (minutos * 60);

    if (horas   < 10) {horas   = "0"+horas;}
    if (minutos < 10) {minutos = "0"+minutos;}
    if (segundos < 10) {segundos = "0"+segundos;}
    var tempo    = horas+':'+minutos+':'+segundos;
    return tempo;
}