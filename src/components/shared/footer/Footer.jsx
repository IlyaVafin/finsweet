import React from 'react'
import './../../style/Footer.scss'
import FooterNav from './FooterNav'
import FooterForm from './FooterForm'
import SocialFooter from './../SocialList.jsx'
import styleSvgModule from './../../style/Authorlist.module.scss'
const Footer = () => {
	return (
		<>
			<footer>
				<div className='footer__wrapper'>
					<div className='footer__container'>
						<FooterNav />
						<FooterForm />
						<div className='footer-bottom'>
							<article className='footer-bottom__text'>
								<p>Finstreet 118 2561 Fintown</p>
								<p>Hello@finsweet.com 020 7993 2905</p>
							</article>
							<article className='footer-bottom__socials'>
								<SocialFooter
									styleSvg={styleSvgModule.social__list__footer}
									colorSvg={'#6D6E76'}
								/>
							</article>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer
