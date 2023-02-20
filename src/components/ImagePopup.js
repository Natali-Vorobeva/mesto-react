import React from 'react';
import closeBtn from './../images/Close-Icon.svg';

function ImagePopup() {


	return (
	<div className="popup popup_card_image">
		<div className="popup__container">
			<figure className="popup__card-body">
				<button className="popup__close" type="button" name="button13" aria-label="Закрыть">
					<img id="card-close" src={closeBtn} className="popup__image-close" alt="Закрыть окно" />
				</button>
				<img className="popup__show-image" src="#" alt="#" />
				<figcaption>
					<h2 className="popup__description-name"></h2>
				</figcaption>
			</figure>
		</div>
	</div>
	)
}

export default ImagePopup;