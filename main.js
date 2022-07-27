// query selector below
const titleInput = document.querySelector('#title-box');
const bodyInput = document.querySelector('#body-box');
// commentInput = document.querySelector('.card-comments');
const saveButton = document.querySelector('.user-form--button');
const ideaCardsArea = document.querySelector('.idea-cards--area');
const ideaCard = document.querySelector('.idea-card');
const ideaCardX = document.querySelector('.delete-icon');

//global variables
const listOfBoxes = [];

//event listeners below
saveButton.addEventListener('click', saveUserInfo);
window.addEventListener('load', createExampleIdeaCard)

function createExampleIdeaCard() {
  var exampleCard = new Idea('Example Idea', 'I think big thoughts!')
  listOfBoxes.unshift(exampleCard)
  createIdeaCard();
}

function createIdeaCard() {
  ideaCardsArea.innerHTML = "";
  for (let i = 0; i < listOfBoxes.length; i++) {
    ideaCardsArea.innerHTML += `
    <div class="idea-card">
    <div class="card-header">
      <img class="star-active-icon" src="./assets/star-active.svg" alt="star-active-icon">
      <img id="${listOfBoxes[i].id}" class="delete-icon" src="./assets/delete.svg" alt="delete-icon">
    </div>
    <div class="card-body">
      <p class="idea-title">${listOfBoxes[i].title}</p>
      <p>${listOfBoxes[i].body}</p>
    </div>
    <div class="card-comments"><img class="plus-icon" src="./assets/comment.svg" alt="plus-icon">
      <div>comment</div>
    </div>
  </div>`;
  }
    
}


function saveUserInfo(event) {
  event.preventDefault();

  const ideaBox = new Idea(titleInput.value, bodyInput.value);

  if (titleInput.value && bodyInput.value) {
    listOfBoxes.unshift(ideaBox);
    createIdeaCard();
    clearInputBoxes();
  }
}

function clearInputBoxes() {
  titleInput.value = "";
  bodyInput.value = "";
}

ideaCardsArea.addEventListener('click', deleteCard)
// if X is clicked, this.element.remove()
function deleteCard(event) {
  // for (let i = 0; i < listOfBoxes.length; i++) {
  //     if (event.target === ideaCardX) {
  //       listOfBoxes
  //       ideaCardsArea.removeChild(ideaCard)
      // this.ideaCard.remove();
      console.log('test', event.target);
    }
  // }
  
// }