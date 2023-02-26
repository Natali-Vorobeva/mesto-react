import React, { useEffect, useState } from 'react';
import editButton from './../images/edit-button.png';
import editBtn from './../images/Edit-Button.svg';
import addBtn from './../images/add-button.svg';
// import closeBtn from './../images/Close-Icon.svg';
import { api } from '../utils/Api.js';
import Card from "./Card";
import loading from "./../images/loading-btn-main.gif"

function Main(props) {
	// const [dataPersonal, setDataPersonal] = useState({})
	// useEffect(() => {
	// 	api.getUserInfo(dataPersonal)
	// 	.then((values) => {
	// 		const newDataPersonal = ((values) => {	

	// 			return {
	// 				id: values._id,
	// 				name: values.name,
	// 				about: values.about,
	// 				avatar: values.avatar
	// 			}
	// 		})
	// 		setDataPersonal(newDataPersonal)
	// 	})
	// }, [])
	const [userId, setUserId] = useState([]);
	const [userName, setUserName] = useState('');
	const [userDescription, setUserDescription] = React.useState('');
	const [userAvatar, setUserAvatar] = React.useState('https://489609.selcdn.ru/public-pachca-prod-uploads/attaches/user/image/71489/ава.jpg');
	const [cards, setCards] = useState([]);
	const [loadingBoolean, setLoadingBoolean] = useState(false);
	// useEffect(() => {		
	// 	api.getInitialCards(cards)
	// 	.then((data) => {			
	// 		const newCards = data.map((card) => {				
	// 			return {
	// 				id: card._id,
	// 				link: card.link,
	// 				alt: card.name,
	// 				title: card.name
	// 			}
	// 		})
	// 		setCards(newCards)
	// 	})
	// }, [])	
	useEffect(() => {
		Promise.all([api.getUserInfo(), api.getInitialCards()])
			.then(([me, cards]) => {
				setUserId(me._id);
				setUserName(me.name);
				setUserDescription(me.about);
				setUserAvatar(me.avatar);
				setCards(cards);
				setLoadingBoolean(true);				
			})
			.catch((err) => {
				console.log(`Ошибка: ${err}`);
			})
			.finally(() => { });
	}, [])	

	return (
		<>
		{ loadingBoolean ?
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
			<div className='loading-data'>
				<img className='loading-data__img' src={loading} alt='Загрузка'/>
			</div>
		}
		</>
	)
}

export default Main;