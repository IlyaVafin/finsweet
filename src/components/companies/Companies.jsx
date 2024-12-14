import React from 'react'
import firstLogo from './../img/companiesImg/logofirst.svg'
import secondLogo from './../img/companiesImg/logosecond.svg'
import thirdLogo from './../img/companiesImg/logothird.svg'
import fourthLogo from './../img/companiesImg/logofourth.svg'
import fifthLogo from './../img/companiesImg/logofifth.svg'
import './../style/Companies.scss'
const Companies = () => {
	return (
		<>
			<div className='companies__wrapper'>
				<div className='companies__container'>
					<section className='comapnies__content'>
						<article className='companies__text'>
							<p>We are</p>
							<h4>Featured in</h4>
						</article>
						<ul className='companies__logos-wrapper'>
							<li style={{ marginLeft: '83px' }}>
								<img src={firstLogo} alt='' />
							</li>
							<li style={{ marginLeft: '75px' }}>
								<img src={secondLogo} alt='' />
							</li>
							<li style={{ marginLeft: '73px' }}>
								<img src={thirdLogo} alt='' />
							</li>
							<li style={{ marginLeft: '73px' }}>
								<img src={fourthLogo} alt='' />
							</li>
							<li style={{ marginLeft: '74px' }}>
								<img src={fifthLogo} alt='' />
							</li>
						</ul>
					</section>
				</div>
			</div>
		</>
	)
}

export default Companies
