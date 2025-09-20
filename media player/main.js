/* find the elements i want to interact with */
const VideoElement = document.querySelector("#mediaPlayer");
const playPauseButton = document.querySelector("#playPauseButton");
const timeline = document.querySelector("#timelineProgress");
const currentTimeText = document.querySelector("#currentTimeFeedback");
const totalTimeText = document.querySelector("#totalTimeFeedback");

/*when JS loads remove defult controls */
VideoElement.removeAttribute("controls");

//I want to update the totqal time based on the currently loaded ,edia file
//this will run when page loads, but if i wanted to change the file afterwards, i'd have to
// update there too
VideoElement.addEventListener("canplay", updateTotalTime);

function updateTotalTime() {
  let videoSeconds = VideoElement.duration;
  let totalMin = Math.floor(videoSeconds / 60);
  let totalSec = videoSeconds % 60;
  if (totalSec < 10) {
    totalSec = "0" + totalSec;
  }
  totalTimeText.textContent = `${totalMin} :${totalSec}`;
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
  /* find percentage of total time */
  let timePercent = (VideoElement.currentTime / VideoElement.duration) * 100;
  //console.log(timePercent);
  timeline.value = timePercent;
  updateCurrentTime();
}

function updateCurrentTime() {
  let videoSeconds = VideoElement.currentTime;
  let totalMin = Math.floor(videoSeconds / 60);
  let totalSec = Math.floor(videoSeconds % 60);
  if (totalSec < 10) {
    totalSec = "0" + totalSec;
  }
  currentTimeText.textContent = `${totalMin}:${totalSec}`;
}

VideoElement.addEventListener("timeupdate", updateTimeline);

// find when I click my timeline and then jump to appropriate time
timeline.addEventListener("click", jumpToTime);

function jumpToTime(ev) {
  // find how far from the left we clicked
  let clickX = ev.offsetX;
  // find how wide my timeline is
  let timeLineWidth = timeline.offsetWidth;
  // find the ratio of click to width
  let clickPercent = clickX / timeLineWidth;
  // update the current time
  videoElement.currentTime = videoElement.duration * clickPercent;
}
