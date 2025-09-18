/* find the elements i want to interact with */
const VideoElement = document.querySelector ("#mediaPlayer");
const playPauseButton = document.querySelector("#playPauseButton");
const timeline = document.querySelector("#timelineProgress");

    /*when JS loads remove defult controls */
    VideoElement.removeAttribute("controls");



/*
Play/pause button behaviour:\When I click it begins the playback of the mmedia file
if media is not playing- when I click it begins playback of the media file 
When I click it again it pauses of the media file
Feedback:
toggle icon based on playing state
cusor change on hover
*/

function playPause(){
    if(VideoElement.paused || VideoElement.ended){
        VideoElement.play();
        playPauseButton.textContent = "‖";
    } else {
        VideoElement.pause();
        playPauseButton.textContent = "▶︎" ;
    }
    
    }
    playPauseButton.addEventListener("click" , playPause);

/*
Timeline behaviour: 
it should update as media playback occurs to show current time
i should be able to click and jump to particular time
*/

function updateTime