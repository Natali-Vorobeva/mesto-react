import React from 'react';
import editButton from './../images/edit-button.png';
import editBtn from './../images/Edit-Button.svg';
import addBtn from './../images/add-button.svg';
import closeBtn from './../images/Close-Icon.svg';
// import PopupWithForm from "./PopupWithForm";

function Main(props) {

	// function handleEditAvatarClick(popup) {
	// 	if(popup) {
	// 		const popup = document.querySelector('.popup');
	// 		console.log(document);
	// 		popup.classList.add('popup_opened');
			// document.addEventListener('keydown', this._escapeClose);
			
	// 	}
	// 	return;
	// }
	return (
<>
		<main className="main">
		<section className="personal-page">
			<div className="personal-page__title">
				<div className="personal-page__avatar-container">
					<div className="personal-page__avatar-container-overlay overlay-hover">
						<img src={editButton} className="personal-page__edit-overlay"
							alt="Редактировать аватарку" />
					</div>
					<div className="personal-page__avatar-container-avatar">
						<img src="#" className="personal-page__avatar" alt="Здесь должна быть аватарка"
						onClick={props.onEditAvatar} />
					</div>							
				</div>
				<div className="personal-page__data">
					<div className="personal-page__account">
						<h1 className="personal-page__username">Жа</h1>
						<button className="personal-page__edit popup-open" type="button" name="button1">
							<img src={editBtn} 
							onClick={props.onEditPersonalData}
							className="personal-page__open"
								alt="Редактировать профиль" />
								
						</button>
					</div>
					<p className="personal-page__about">Исследователь планеты</p>
				</div>
			</div>
			<button className="personal-page__button popup-open" type="button" name="button2">
				<img src={addBtn} className="personal-page__image-button" alt="Добавить"
					onClick={props.onAddNewCard}
				/>						
			</button>
		</section>
		<section className="gallery">
		</section>
	</main>
	<div className="popup popup_form_avatar">
	<div className="popup__container">
		<form action="#" name="avatar" className="form popup__content popup__content_form_avatar">
			<button className="popup__close" type="button" name="button14" aria-label="Закрыть">
				<img src={closeBtn} className="popup__image-close" alt="Закрыть окно" />
			</button>
			<h3 className="popup__title">Обновить аватар</h3>
			<div className="popup__input-container">
				<input type="url" id="avatar-image-input" placeholder="Ссылка на изображение"
					className="popup__input popup__input_data_avatar" name="avatar"required />
				<span className="avatar-image-input-error popup__input-error"></span>
			</div>
			<button id="avatar-save" type="submit" className="popup__save" name="button15">Сохранить</button>
		</form>
	</div>
</div>
</>
	)
}

export default Main;