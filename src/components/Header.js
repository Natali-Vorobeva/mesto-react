import React from 'react';
import headerLogo from '../../src/images/logo.svg';

function Header() {
	// const [dataPersonal, setDataPersonal] = useState([])
	// const [cards, setCards] = useState([]);
	// useEffect(() => {	
	// 	Promise.all([api.getUserInfo(dataPersonal), api.getInitialCards(cards)])
	// 	.then(([me, cards]) => {
	// 		const newDataPersonal = ((me) => {	
			
	// 			return {
	// 				id: me._id,
	// 				name: me.name,
	// 				about: me.about,
	// 				avatar: me.avatar
	// 			}
	// 		})
	// 		setDataPersonal(newDataPersonal)
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

	// }, [setDataPersonal, setCards])





	return (
		<header className="header">
				<img src={headerLogo} className="header__logo" alt="Логотип" />
			</header>
	)
}
export default Header;