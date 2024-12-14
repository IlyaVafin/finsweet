import React from 'react'
import SocialList from './../shared/SocialList'
import styleSvgModule from './../style/Authorlist.module.scss'
const AuthorsCard = ({ img, title, email }) => {
	return (
		<div className='authors__card'>
			<img className='author__img' src={img} alt='' />
			<h3>{title}</h3>
			<p>{email}</p>
			<SocialList styleSvg={styleSvgModule.social__list} colorSvg={''} />
		</div>
	)
}

export default AuthorsCard
