let store = {};
const counterElement = document.getElementById('counter');
const minusButton = document.getElementById('-');
const plusButton = document.getElementById('+');
const heartButton = document.getElementById('<3');
const pauseButton = document.getElementById('pause');
const likeList = document.getElementsByClassName('likes')[0];
const submitButton = document.getElementById('submit');
const commentForm = document.getElementById('comment-form')
const commentList = document.getElementById('list')
let isPaused = false



counterElement.addEventListener("DOMContentLoaded", timedIncrement());
minusButton.addEventListener("click", minusButtonClick);
plusButton.addEventListener("click", plusButtonClick);
heartButton.addEventListener("click", heartButtonClick);
pauseButton.addEventListener("click", pauseButtonClick);
submitButton.addEventListener("click", submitButtonClick)



function timedIncrement() {setInterval(function() {
  if (!isPaused)
    {counterElement.innerHTML++}
  }, 1000)
};



function minusButtonClick() {
  counterElement.innerHTML--;
};

function plusButtonClick() {
  counterElement.innerHTML++;
};

function heartButtonClick() {
  createKeyOrIncrementLikes(counterElement.innerHTML);
  if (store[`${counterElement.innerHTML}`] === 1) {
    const listElement = document.createElement('li');
    listElement.id = counterElement.innerHTML;
    listElement.innerHTML = `${counterElement.innerHTML} has been liked ${store[counterElement.innerHTML]} time(s).`;
    likeList.appendChild(listElement);}
  else {
    const listElementWeWantToEdit = document.getElementById(counterElement.innerHTML);
    listElementWeWantToEdit.innerHTML = `${counterElement.innerHTML} has been liked ${store[counterElement.innerHTML]} time(s).`
  }
  console.log(store)
};

function pauseButtonClick() {
  if (isPaused) {
    pauseButton.innerHTML = "pause";
  } else {
    pauseButton.innerHTML = "resume";
  }
  isPaused = !isPaused;
  plusButton.disabled = !plusButton.disabled;
  minusButton.disabled = !minusButton.disabled;
  heartButton.disabled = !heartButton.disabled;
};

function submitButtonClick(e) {
  e.preventDefault()
  const newComment = document.createElement('li');
  newComment.innerHTML = commentForm.elements[0].value;
  commentList.appendChild(newComment)
  commentForm.elements[0].value = ''

}

function createKeyOrIncrementLikes(int) {
  if (store[`${int}`] != undefined) {
    store[`${int}`] = store[`${int}`] + 1;
  } else {
    store[`${int}`] = 1;
  }
}

function testElementAdd() {
var testElement = document.createElement('h1')
testElement.innerHTML = 'testing testing'
document.body.appendChild(testElement) };
