// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let errorMsg = document.querySelector('#modal')
  errorMsg.className = "hidden"

document.addEventListener('DOMContentLoaded', ()=> {

  //grab all post elements
  let post = document.querySelectorAll('.media-post')

  //iterate over posts and add eventlistener to elements
  for(const element of post){
    let like = element.lastElementChild.getElementsByTagName('span').item(0)
    like.addEventListener('click', () => {
      mimicServerCall()
      .then(likeChecker(like))
      .catch((e) => {
        errorMsg.classList.remove("hidden")
        errorMsg.lastElementChild.textContent = e.message
        setTimeout(errorMsg.className = "hidden", 300)
      })
    })
  }
  
})

//manipulate like based on its content
function likeChecker(element){
  if(element.innerText != FULL_HEART){
    element.innerText = FULL_HEART
    element.className = "activated-heart"
  }else {
    element.innerText = EMPTY_HEART
  }
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
