import React from 'react';
// import { useState, useEffect } from 'react';
import garbageBtn from './../images/garbage.svg';
import likeBtn from './../images/favorite-black.svg';
import dislikeBtn from './../images/favorite-black.svg';
// import ImagePopup from './ImagePopup';

	function Card(props){
		const handleClick = ()=>{
			props.onCardClick(props.card);
		}
	return (		
				<figure className="gallery__card-body">
					<img src={garbageBtn} className="gallery__delete" alt="Удалить"
					/>
					<img src={props.card.link} className="gallery__image gallery__image_source_card" alt={`Вид на ${props.card.alt}`}
					onClick={props.handleClick}
					
					/>
					<figcaption className="gallery__description">
						<h2 className="gallery__name">{props.card.title}</h2>
						<div className="gallery__likes">
							<button className="gallery__button-favourites" type="button" name="button">
								<img src={likeBtn} className="gallery__image-favourites-liked active" alt="Добавить в избранное"/>
								<img src={dislikeBtn} className="gallery__image-favourites" alt="Добавить в избранное" />
							</button>
							<p className="gallery__likes-counter">{props.card.likes.length}</p>
						</div>

					</figcaption>
				</figure>	
	)		
}

export default Card;