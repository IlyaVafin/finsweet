import React from 'react'
import MoreBtn from './../shared/MoreBtn'

const HeroText = ({ onBtnClick }) => {
	return (
		<>
			<section className='hero__text'>
				<p className='hero__posted'>
					Posted on <b>startup</b>
				</p>
				<h2>Step-by-step guide to choosing great font pairs</h2>
				<p className='hero__author'>
					By <span className='author'>James West</span> | May 23, 2022
				</p>
				<p className='hero__description'>
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
					dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident.
				</p>
				<MoreBtn MTop='48' showWindow={onBtnClick} MarginWith={true} />
			</section>
		</>
	)
}

export default HeroText
