// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
const hearts = document.querySelectorAll("span.like-glyph");
hearts.forEach((heart) => {
  let modal = document.getElementById("modal");
  heart.addEventListener("click", () => {
    mimicServerCall()
      .then(() => {
        modal.className = "hidden";
        if (heart.className === "activated-heart") {
          heart.textContent = EMPTY_HEART;
          heart.className = "";
        } else {
          heart.textContent = FULL_HEART;
          heart.className = "activated-heart";
        }
      })
      .catch(() => {
        modal.className = "";
      });
    setTimeout(() => {
      modal.className = "hidden";
    }, 3000);
  });
});
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
