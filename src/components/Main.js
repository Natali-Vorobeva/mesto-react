import React, { useEffect, useState } from 'react';
import editButton from './../images/edit-button.png';
import editBtn from './../images/Edit-Button.svg';
import addBtn from './../images/add-button.svg';
import { api } from '../utils/Api.js';
import Card from "./Card";

import loading from "./../images/loading-main.gif";

function Main(props) {
	
	const [userId, setUserId] = useState([]);
	const [userName, setUserName] = useState('');
	const [userDescription, setUserDescription] = useState('');
	const [userAvatar, setUserAvatar] = useState('https://avatars.mds.yandex.net/i?id=f8bc5b5b48bb9be581ffadc82779061be133213f-7564382-images-thumbs&n=13');
	const [cards, setCards] = useState([]);
	const [loadingForMain, setLoadingForMain] = useState(false);	
	const [isHovered, setIsHovered] = useState(false);

	const toggleHover = () => setIsHovered(!isHovered);

	useEffect(() => {
		Promise.all([api.getUserInfo(), api.getInitialCards()])
			.then(([me, cards]) => {
				setUserId(me._id);
				setUserName(me.name);
				setUserDescription(me.about);
				setUserAvatar(me.avatar);
				setCards(cards);
				setLoadingForMain(true);				
			})
			.catch((err) => {
				console.log(`Ошибка: ${err}`);
			})
			.finally(() => { });
	}, [])	

	return (
		<>
		{ loadingForMain ?
			<main className="main">
				<section className="personal-page">
					<div className="personal-page__title">
						<div className="personal-page__avatar-container" 
						onMouseEnter={toggleHover}
						onMouseLeave={toggleHover}>
						<div className={`personal-page__avatar-container-overlay  ${isHovered ? "" : "overlay-hover" } `}>		
								<img src={editButton} className="personal-page__edit-overlay"
									alt="Редактировать аватарку" />
							</div>
							<div className="personal-page__avatar-container-avatar">
								<img src={userAvatar} className="personal-page__avatar" alt="Здесь должна быть аватарка"
									onClick={props.onEditAvatar} />
							</div>
						</div>
						<div className="personal-page__data">
							<div className="personal-page__account">
								<h1 className="personal-page__username">{userName}</h1>
								<button className="personal-page__edit popup-open" type="button" name="button1">
									<img src={editBtn}
										onClick={props.onEditPersonalData}
										className="personal-page__open"
										alt="Редактировать профиль" />

								</button>
							</div>
							<p className="personal-page__about">{userDescription}</p>
						</div>
					</div>
					<button className="personal-page__button popup-open" type="button" name="button2" onClick={props.onAddNewCard}>
						<img src={addBtn} className="personal-page__image-button" alt="Добавить" />
					</button>
				</section>
				<section className="gallery">
					{
						cards.map((card) => {
							return <Card card={card} onCardClick={props.onCardClick} key={card._id} />
						})
					}
				</section>
			</main>
			:
			<div className='loading'>
				<img className='loading__img' src={loading} alt='Загрузка'/>
			</div>
		}
		</>
	)
}

export default Main;