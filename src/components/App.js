import React, { useEffect, useState } from 'react';
import garbageBtn from './../images/garbage.svg';
import likeBtn from './../images/favorite-black.svg';
import dislikeBtn from './../images/favorite-black.svg';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
// import EditAvatarPopup from './EditAvatarPopup';
import ImagePopup from './ImagePopup';
// import { api } from '../utils/Api.js';



function App() {

	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)
  }
// useEffect(() => {
// 	Promise.all([api.getUserInfo(), api.getInitialCards()])
//   .then(([me, cards]) => {
//     setUserInfo(me);
//     userId = me._id;
//     renderItems(cards);
//   })
//   .catch((err) => {
//     console.log(`Ошибка: ${err}`);
//   })
//   .finally(() => {});
// })


function closeAllPopups(){
	setIsEditAvatarPopupOpen(false);
	// setIsEditProfilePopupOpen(false);
	// setIsAddPlacePopupOpen(false);
	// setIsDeleteCardQuestionPopupOpen(false);
	// setSelectedCard({});
};


	return (
		<div className="page__content">
			<Header />
			<Main 
				onEditAvatar={handleEditAvatarClick}

			 />			
			<Footer />
			<PopupWithForm 
				name= {'avatar'}
				title= {"Обновить аватар"} 
				// btnText={"Сохранить"} 
				isOpen={isEditAvatarPopupOpen} 
				onClose={closeAllPopups}
			>
				<div className="popup__input-container">
						<input type="url" id="avatar-image-input" placeholder="Ссылка на изображение"
							className="popup__input popup__input_data_avatar" name="link" required />
						<span className="avatar-image-input-error popup__input-error"></span>
					</div>
					<button id="avatar-save" type="submit" className="popup__save" name="button2">Сохранить</button>
			
				</PopupWithForm>
			
			<ImagePopup />			
			
			<template id="card-template" className="template">
				<figure className="gallery__card-body">
					<img src={garbageBtn} className="gallery__delete" alt="Удалить" />					
					<img src="#" className="gallery__image gallery__image_source_card" alt="" />
					<figcaption className="gallery__description">
						<h2 className="gallery__name"></h2>
						<div className="gallery__likes">
							<button className="gallery__button-favourites" type="button" name="button">
								<img src={likeBtn} className="gallery__image-favourites-liked active" alt="Добавить в избранное" />
									<img src={dislikeBtn} className="gallery__image-favourites" alt="Добавить в избранное" />
							</button>
							<p className="gallery__likes-counter">0</p>
						</div>

					</figcaption>
				</figure>
			</template>		
			</div>
		)
		
	};



	export default App;
