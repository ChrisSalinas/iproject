//"use strict";
function controlVideo(ev){
    var code=ev.which||ev.keycode;
    switch(code){
        case 75: // k
        case 32: // spatie
            if(video.paused == true){
                video.play();
            }else{
                video.pause();
            }
            break;
        case 77: // m
            if(video.muted == false){
                video.muted = true;
            }else{
                video.muted = false;
            }
            break;
        case 70: // f
            if (fullscreenMod == false) {
                if (video.requestFullscreen) {
                    video.requestFullscreen();
                }else if (video.mozRequestFullScreen) {
                    video.mozRequestFullScreen();
                } else if (video.webkitRequestFullscreen) {
                    video.webkitRequestFullscreen();
                }
                fullscreenMod = true;
            }else {

                document.webkitExitFullscreen();
                fullscreenMod = false;

            }
            break;
        case 189: // -
            if(video.muted == true){
                video.muted = false
            }
            video.volume = video.volume - 0.1;
            console.log(video.volume);
            break;
        case 187: // =
            if(video.muted == true){
                video.muted = false
            }
            video.volume = video.volume + 0.1;
            console.log(volumeBar.value);
            break;
        case 76: // l
            video.currentTime += 10;
            console.log(video.currentTime)
            break;
        case 74: // j
            video.currentTime -= 10;
            console.log(video.currentTime)
            break;
        case 39: // rechter pijl
            video.currentTime += 5;
            break;
        case 37: // linker pijl
            video.currentTime -= 5;
            break;
        case 65: // a
            video.playbackRate -= 0.25
            if(video.playbackRate < 0.25){
                video.playbackRate = 0.25;
            }else if(video.playbackRate > 1){
                video.playbackRate = 1
            }

            console.log(video.playbackRate)
            break;
        case 68: // d
            video.playbackRate += 0.5;
            if(video.playbackRate > 2){
                video.playbackRate =video.playbackRate * 2-1;
            } else if (video.playbackRate <= 0.75){
                video.playbackRate = 1;
            }
            if(video.playbackRate > 64){
                video.playbackRate = 64
            }
            console.log(video.playbackRate)
            break;
    }

}
window.onload=loadHandler;
var video;

var fullscreenMod;


function  loadHandler () {
    console.log("keylistener added");
    window.focus();
    document.addEventListener("keydown", controlVideo);
    video = document.getElementById("video");

    fullscreenMod = false;

}













