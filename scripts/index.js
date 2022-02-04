let content = document.querySelector('.content')
let profile = content.querySelector('.profile')
let profileInfo = profile.querySelector('.profile__info')
let openPopupProfileEditButton = profileInfo.querySelector('.profile__edit-button')
let popup = document.querySelector('.popup')
let popupContainer = popup.querySelector('.popup__container')
let popupClose = popupContainer.querySelector('.popup__close')


function openPopup() {
  popup.classList.add('popup__opened')
}

function closePopup() {
  popup.classList.remove('popup__opened')
}

openPopupProfileEditButton.addEventListener('click', openPopup)
popupClose.addEventListener('click', closePopup)

let popupSave = popupContainer.querySelector('.popup__save')
let profileAuthor = profile.querySelector('.profile__author')
let profileAuthorSubline = profile.querySelector('.profile__author-subline')
let popupAuthorInput = popupContainer.querySelector('.popup__author')
let popupAuthorSublineInput = popupContainer.querySelector('.popup__author-subline')

  popupAuthorInput.value = 'Жак-Ив Кусто';
  popupAuthorSublineInput.value = 'Исследователь океана';

function formSubmitHandler (evt) {
  evt.preventDefault()
  profileAuthor.textContent = popupAuthorInput.value;
  profileAuthorSubline.textContent = popupAuthorSublineInput.value;
  popup.classList.remove('popup__opened')
}
popupSave.addEventListener('click', formSubmitHandler)