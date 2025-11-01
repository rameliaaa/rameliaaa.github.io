// This code lets users click the amount of stars as a protype for how a click would work//
let likeCount = 0;

const likeButton = document.querySelector("#like-btn");
console.log(likeButton);
likeButton.addEventListener("click", addLikes);
const likes = document.querySelector("#likes");
likes.textContent = likeCount;

function addLikes() {
  likeCount++;
  likes.textContent = likeCount;
}
//For the style.css I wanted to create a dreamy, moody colour pallette with a darker blue colour to contrast with the bright yellow stars//
//Further, the typeface is a suppose to be a whimsical, dream-like look in a contrasting cream to the dark blue//
