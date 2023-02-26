import React, { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { api } from '../utils/Api.js';



function App() {

	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
	function handleEditAvatarClick() {
		setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)
	}

	const [isEditPersonalPopupOpen, setIsEditPersonalPopupOpen] = useState(false);
	function handleEditPersonalClick() {
		setIsEditPersonalPopupOpen(!isEditPersonalPopupOpen);
	}

	const [isAddNewCard, setIsAddNewCard] = React.useState(false);
	function handleAddNewCardClick() {
		setIsAddNewCard(!isAddNewCard);
	}

	const [selectedCard, setSelectedCard] = useState({})
	function handleCardClick(card) {
    setSelectedCard(card)
  }

	function closeAllPopups() {
		setIsEditAvatarPopupOpen(false);
		setIsEditPersonalPopupOpen(false);
		setIsAddNewCard(false);
		// setIsDeleteCardQuestionPopupOpen(false);
		setSelectedCard({});
	};

	

	return (
		<div className="page__content">
			<Header />
			<Main
				onEditAvatar={handleEditAvatarClick}
				onEditPersonalData={handleEditPersonalClick}
				onAddNewCard={handleAddNewCardClick}
				onCardClick={handleCardClick}
			/>
			<Footer />
			<PopupWithForm
				name={'avatar'}
				title={"Обновить аватар"}
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
			<PopupWithForm
				name={'personal'}
				title={"Редактировать профиль"}
				isOpen={isEditPersonalPopupOpen}
				onClose={closeAllPopups}
			>
				<div className="popup__input-container">
					<input type="text" id="username-input" placeholder="Имя" className="popup__input popup__input_data_name"
						name="name" minLength="2" maxLength="40" required />
					<span className="username-input-error popup__input-error"></span>
					<input type="text" id="about-input" placeholder="Вид деятельности"
						className="popup__input popup__input_data_about" name="about" minLength="2" maxLength="200" required />
					<span className="about-input-error popup__input-error"></span>
				</div>
				<button id="avatar-save" type="submit" className="popup__save" name="button2">Сохранить</button>

			</PopupWithForm>
			<PopupWithForm
				name={'place'}
				title={"Новое место"}
				isOpen={isAddNewCard}
				onClose={closeAllPopups}
			>
				<div className="popup__input-container">
					<input type="text" id="name-card-input" placeholder="Название" className="popup__input popup__input_name_card"
						name="name" minLength="2" maxLength="30" required />
					<span className="name-card-input-error popup__input-error"></span>
					<input type="url" id="link-image-input" placeholder="Ссылка на картинку"
						className="popup__input popup__input_address_image" name="link" required />
					<span className="link-image-input-error popup__input-error"></span>
				</div>
				<button id="avatar-save" type="submit" className="popup__save" name="button2">Сохранить</button>
			</PopupWithForm>

			<ImagePopup card={selectedCard} onClose={closeAllPopups} />

			{/* <template id="card-template" className="template">
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
			</template> */}
		</div>
	)

};



export default App;
