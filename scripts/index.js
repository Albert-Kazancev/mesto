const content = document.querySelector('.content')
const profile = content.querySelector('.profile')
const profileInfo = profile.querySelector('.profile__info')
const openPopupProfileEditButton = profileInfo.querySelector('.profile__edit-button')
const popup = document.querySelector('.popup')
const popupContainerEditProfile = popup.querySelector('.popup__container')
const closePopupProfileEditButton = popupContainerEditProfile.querySelector('.popup__close')
const popupFieldsEditProfile = popupContainerEditProfile.querySelector('.popup__fields')
const profileAuthor = profile.querySelector('.profile__author')
const profileAuthorSubline = profile.querySelector('.profile__author-subline')
const popupNameAuthorInputEditProfile = popupContainerEditProfile.querySelector('.popup__input_type_name')
const popupJobAuthorInputEditProfile = popupContainerEditProfile.querySelector('.popup__input_type_job')


function openPopup() {
  popup.classList.add('popup_opened')
  popupNameAuthorInputEditProfile.value = profileAuthor.textContent;
  popupJobAuthorInputEditProfile.value = profileAuthorSubline.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened')
}

openPopupProfileEditButton.addEventListener('click', openPopup)
closePopupProfileEditButton.addEventListener('click', closePopup)

function handleProfileFormSubmit (evt) {
  evt.preventDefault()
  profileAuthor.textContent = popupNameAuthorInputEditProfile.value;
  profileAuthorSubline.textContent = popupJobAuthorInputEditProfile.value;
  closePopup()
}
popupContainerEditProfile.addEventListener('submit', handleProfileFormSubmit)