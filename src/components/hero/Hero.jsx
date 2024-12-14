import React, { useState } from 'react'
import HeroText from './HeroText'
import './../style/Hero.scss'
const Hero = () => {
	const [window, setWindow] = useState(false)
	const handleClick = () => {
		setWindow(!window)
	}
	const closeWindow = () => {
		setWindow(false)
	}
	return (
		<>
			<div
				style={{ display: window ? 'block' : 'none' }}
				className='overlay'
			></div>
			<div
				style={{ display: window ? 'block' : 'none' }}
				className='hero__window'
			>
				<p>Кнопка ещё не готова!</p>
				<button onClick={closeWindow}>Закрыть</button>
			</div>
			<div className='overlay'></div>
			<div className='wrapper__hero'>
				<div className='container'>
					<HeroText onBtnClick={handleClick} />
				</div>
			</div>
		</>
	)
}

export default Hero
