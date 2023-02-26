import React from 'react';
// import { useState, useEffect } from 'react';
import garbageBtn from './../images/garbage.svg';
import likeBtn from './../images/favorite-black.svg';
import dislikeBtn from './../images/favorite-black.svg';
// import ImagePopup from './ImagePopup';

	function Card({card, onCardClick}){
		const handleClick = ()=>{
			onCardClick(card);
		}
	return (		
				<figure className="gallery__card-body">
					<img src={garbageBtn} className="gallery__delete" alt="Удалить"
					/>
					<img src={card.link} className="gallery__image gallery__image_source_card" alt={`Вид на ${card.alt}`}
					onClick={handleClick}
					
					/>
					<figcaption className="gallery__description">
						<h2 className="gallery__name">{card.name}</h2>
						<div className="gallery__likes">
							<button className="gallery__button-favourites" type="button" name="button">
								<img src={likeBtn} className="gallery__image-favourites-liked active" alt="Добавить в избранное"/>
								<img src={dislikeBtn} className="gallery__image-favourites" alt="Добавить в избранное" />
							</button>
							{
								card.likes.length !== 0 ? <p className="gallery__likes-counter">{card.likes.length}</p> :<p className="gallery__likes-counter">0</p>
							}
							{/* <p className="gallery__likes-counter">{card.likes.length}</p> */}
						</div>

					</figcaption>
				</figure>	
	)		
}

export default Card;