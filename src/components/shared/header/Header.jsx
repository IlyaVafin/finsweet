import React from 'react'
import HeaderLogo from './../../img/HeaderImg/HeaderLogo.svg'
import './../../style/Header.scss'
import SubscribeBtn from './../../shared/SubsrcibeBtn'
import subStyle from './../../style/SubscribeBtn.module.scss'
import { Link } from 'react-router-dom'
const Header = () => {
	return (
		<>
			<header>
				<div className='container'>
					<section className='header__inner'>
						<div className='header__logo logo'>
							<img src={HeaderLogo} alt='' />
						</div>
						<nav className='nav'>
							<ul className='nav__list'>
								<li className='nav__item'>
									<Link to='/' className='nav__link' href=''>
										Home
									</Link>
								</li>
								<li className='nav__item'>
									<Link to='/blog' className='nav__link' href=''>
										Blog
									</Link>
								</li>
								<li className='nav__item'>
									<a className='nav__link' href=''>
										About Us
									</a>
								</li>
								<li className='nav__item'>
									<a className='nav__link' href=''>
										Contact us
									</a>
								</li>
								<SubscribeBtn styleClassBtn={subStyle.nav__btn} />
							</ul>
						</nav>
					</section>
				</div>
			</header>
		</>
	)
}

export default Header
