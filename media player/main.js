/* find the elements i want to interact with */
const VideoElement = document.querySelector("#mediaPlayer");
const playPauseButton = document.querySelector("#playPauseButton");
const timeline = document.querySelector("#timelineProgress");
const currentTimeText = document.querySelector("#currentTimeFeedback");
const totalTimeText = document.querySelector("#totalTimeFeedback");

/*when JS loads remove defult controls */
VideoElement.removeAttribute("controls");

//I want to update the totqal time based on tje currently loaded ,edia file
//this will run when page loads, but if i wanted to change the file afterwards, i'd have to 
// update there too
VideoElement.addEventListener("canplay", updateTotalTime);


function updateTotalTime(){
    let videoSeconds = VideoElement.duration;
    let totalMin = Math.floor (videoSeconds / 60);
    let totalSec = videoSeconds % 60;
    if(totalSec < 10){
        totalSec = "0" = totalSec;
    }
   currentTimeText.textContent = `${totalMin} :${totalSec}`;

}
/*
Play/pause button behaviour:\When I click it begins the playback of the mmedia file
if media is not playing- when I click it begins playback of the media file 
When I click it again it pauses of the media file
Feedback:
toggle icon based on playing state
cusor change on hover
*/

function playPause() {
  if (VideoElement.paused || VideoElement.ended) {
    VideoElement.play();
    playPauseButton.textContent = "‖";
  } else {
    VideoElement.pause();
    playPauseButton.textContent = "▶︎";
  }
}
playPauseButton.addEventListener("click", playPause);

/*
Timeline behaviour: 
it should update as media playback occurs to show current time
i should be able to click and jump to particular time
*/

function updateTimeline() {
  console.log(VideoElement.currentTime);
  /* percentage of total time */
  let timePercent = VideoElement.currentTime / VideoElement.duration;
  //timeline.value= 0;
}

VideoElement.addEventListener("timeupdate", updateTimeline);
