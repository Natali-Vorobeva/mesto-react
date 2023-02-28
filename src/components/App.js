import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {

	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
	const [isEditPersonalPopupOpen, setIsEditPersonalPopupOpen] = useState(false);
	const [isAddNewCard, setIsAddNewCard] = useState(false);
	const [selectedCard, setSelectedCard] = useState({});

	function handleEditAvatarClick() {
		setIsEditAvatarPopupOpen(true);
	}

	function handleEditPersonalClick() {
		setIsEditPersonalPopupOpen(true);
	}

	function handleAddNewCardClick() {
		setIsAddNewCard(true);
	}

	function handleCardClick(card) {
		setSelectedCard(card);
	}

	function closeAllPopups() {
		setIsEditAvatarPopupOpen(false);
		setIsEditPersonalPopupOpen(false);
		setIsAddNewCard(false);
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
				name={'personal'}
				title={"Редактировать профиль"}
				buttonText={"Сохранить"}
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

			</PopupWithForm>
			<PopupWithForm
				name={'place'}
				title={"Новое место"}
				buttonText={"Создать"}
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
			</PopupWithForm>
			<PopupWithForm
				name={'avatar'}
				title={"Обновить аватар?"}
				buttonText={"Сохранить"}
				isOpen={isEditAvatarPopupOpen}
				onClose={closeAllPopups}
			>
				<div className="popup__input-container">
					<input type="url" id="avatar-image-input" placeholder="Ссылка на изображение"
						className="popup__input popup__input_data_avatar" name="link" required />
					<span className="avatar-image-input-error popup__input-error"></span>
				</div>
			</PopupWithForm>
			<PopupWithForm
				name={'delete-place'}
				title={"Вы уверены?"}
				buttonText={"Да"}
				onClose={closeAllPopups}
			>
			</PopupWithForm>
			<ImagePopup card={selectedCard} onClose={closeAllPopups} />
		</div>
	)
};

export default App;
