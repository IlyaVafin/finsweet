import React from 'react'
import footerLogo from './../../img/HeaderImg/HeaderLogo.svg'
import { Link } from 'react-router-dom'
const FooterNav = () => {
	return (
		<>
			<div className='footer-nav__wrapper'>
				<nav className='footer__nav'>
					<div className='footer-nav__logo'>
						<img src={footerLogo} alt='' />
					</div>
					<ul className='footer__list'>
						<li className='footer__list--item'>
							<a href=''>Home</a>
						</li>
						<li className='footer__list--item'>
							<Link to='/blog' href=''>
								Blog
							</Link>
						</li>
						<li className='footer__list--item'>
							<a href=''>About us</a>
						</li>
						<li className='footer__list--item'>
							<a href=''>Contact us</a>
						</li>
						<li className='footer__list--item'>
							<a href=''>Privacy Policy</a>
						</li>
					</ul>
				</nav>
			</div>
		</>
	)
}

export default FooterNav
