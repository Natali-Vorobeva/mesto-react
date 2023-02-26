import React from 'react';
import closeBtn from './../images/Close-Icon.svg';

function ImagePopup(props
	// onClose
	) {


	return (
	<div className={`popup popup_card_image" ${props.isOpen ? "popup_opened" : ""}`}>
		<div className="popup__container">
			<figure className="popup__card-body">
				<button className="popup__close" type="button" name="button13" aria-label="Закрыть">
					<img id="card-close" src={closeBtn} className="popup__image-close" alt="Закрыть окно" 
					// onClick={onClose}
					/>
				</button>
				<img className="popup__show-image" src={props.link} alt="#" />
				<figcaption>
					<h2 className="popup__description-name">{props.title}</h2>
				</figcaption>
			</figure>
		</div>
	</div>
	)
}

export default ImagePopup;