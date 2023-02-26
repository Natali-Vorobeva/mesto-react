import React from 'react';
import closeBtn from './../images/Close-Icon.svg';

function PopupWithForm( 
	{title, name, isOpen, onClose, children}	
	)
{
		// const [isOpen, setIsOpen] = React.useState(false);

  // function handleClick() {
	// 	setIsOpen(true);
	// }
	

	if(isOpen){
    // document.addEventListener('keydown', handleEscClose);
  }

	return(
		<div className={`popup popup_form_${name} ${isOpen ? "popup_opened" : ""}`}>
			<div className="popup__container">
				
					<form action="#" 
									name={name} 
									className="form popup__content popup__content_form_avatar"   
									
									// onSubmit={handleOnSubmit}
									>					
									
					<h3 className="popup__title">{title}</h3>
					{
            children
          }
					{/* <div className="popup__input-container">
						<input type="url" id="avatar-image-input" placeholder="Ссылка на изображение"
							className="popup__input popup__input_data_avatar" name={`${name}`} required />
						<span className="avatar-image-input-error popup__input-error"></span>
					</div> */}
					{/* <button id="avatar-save" type="submit" className="popup__save" name="button2">{btnText}</button> */}
				
				<button className="popup__close" type="button" name="button1" aria-label="Закрыть">
						<img 
						src={closeBtn} 
						className="popup__image-close" 
						alt="Закрыть окно"
						onClick={onClose}
						/>
					</button>	
				
				</form>
				
			</div>
		</div>

		/* <div className="popup popup-delete-place">
			<div className="popup__container">
				<form action="#" name="delete-place" className="form popup__content popup__content_form_avatar">
					<button className="popup__close" type="button" name="button16" aria-label="Закрыть">
						<img src={closeBtn} className="popup__image-close" alt="Закрыть окно" />							
					</button>
					<h3 className="popup__title popup__title_size-margin_small">Вы уверены?</h3>
					<button id="delete-place" type="submit" className="popup__save" name="button17">Да</button>
				</form>
			</div>
		</div> */

			/* <div className="popup popup_form_avatar">
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
			<div className="popup popup_form_personal">
				<div className="popup__container">
					<form action="#" name="account" className="form popup__content popup__content_form_account">
						<button className="popup__close" type="button" name="button9" aria-label="Закрыть">
							<img src={closeBtn} className="popup__image-close" alt="Закрыть окно" />
						</button>
						<h3 className="popup__title">Редактировать профиль</h3>
						<div className="popup__input-container">
							<input type="text" id="username-input" placeholder="Имя" className="popup__input popup__input_data_name"
								name="name" required />
							<span className="username-input-error popup__input-error"></span>
							<input type="text" id="about-input" placeholder="Вид деятельности"
								className="popup__input popup__input_data_about" name="about" required/>
								<span className="about-input-error popup__input-error"></span>
						</div>
						<button id="personal-save" type="submit" className="popup__save" name="button10">Сохранить</button>
					</form>
				</div>
			</div>
			<div className="popup popup_form_place">
				<div className="popup__container">
					<form action="#" name="place" className="form popup__content popup__content_form_cards">
						<button className="popup__close" type="button" name="button11" aria-label="Закрыть">
							<img id="place-close" src={closeBtn} className="popup__image-close"
								alt="Закрыть окно" />
						</button>
						<h3 className="popup__title">Новое место</h3>
						<div className="popup__input-container">
							<input type="text" id="name-card-input" placeholder="Название" className="popup__input popup__input_name_card"
								name="name" required/>
							<span className="name-card-input-error popup__input-error"></span>
							<input type="url" id="link-image-input" placeholder="Ссылка на картинку"
								className="popup__input popup__input_address_image" name="link" required />
							<span className="link-image-input-error popup__input-error"></span>
						</div>
						<button id="place-save" type="submit" className="popup__save" name="button12">Создать</button>
					</form>
				</div>
			</div> */			
	)
}

export default PopupWithForm;