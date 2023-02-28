import React, { useEffect, useState } from 'react';
import closeBtn from './../images/Close-Icon.svg';
import imgLoading from './../images/loading-btn.gif';

function PopupWithForm({ title, name, isOpen, onClose, children, buttonText, isSubmitDisabled }) {
	useEffect(() => {
		if (isOpen) {
			document.addEventListener('keydown', handleEscClose)
		}
		return () => {
			document.removeEventListener('keydown', handleEscClose)
		}
	}, [isOpen]);

	function handleEscClose(evt) {
		if (evt.key === 'Escape') {
			onClose();
		};
	};

	function mouseDownClose(evt) {
		if (evt.target.classList.contains('popup__container')) {
			onClose();
		};
	}

	const [buttonLoading, setButtonLoading] = useState(false);

	return (
		<div className={`popup popup_form_${name} ${isOpen ? "popup_opened" : ""}`}

			onMouseDown={mouseDownClose}>
			<div className="popup__container">

				<form action="#" name={name} className="form popup__content popup__content_form_avatar">
					<h3 className="popup__title">{title}</h3>
					{
						children
					}
					{
					buttonLoading
					?
					<div className='loading-btn'>
						<img className='loading-btn__img' src={imgLoading} alt='Загрузка' />
					</div>
					:
					<button
						id="avatar-save"
						type="submit"
						disabled={isSubmitDisabled}
						className={isSubmitDisabled ? "popup__save popup__save_disabled" : "popup__save"}
						name="button2">
					{buttonText}
					</button>
					}
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
	)
}

export default PopupWithForm;