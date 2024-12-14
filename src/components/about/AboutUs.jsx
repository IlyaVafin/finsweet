import React from 'react'
import './../style/About.scss'
import AboutUsText from './AboutUsText'
import OurMission from './OurMission'
const AboutUs = () => {
	return (
		<>
			<div className='container'>
				<div className='lines'>
					<div className='yellow-line'></div>
					<div className='purple-line'></div>
				</div>
				<section className='about-us__wrapper'>
					<article className='about-us__content'>
						<AboutUsText />
						<OurMission />
					</article>
				</section>
			</div>
		</>
	)
}

export default AboutUs
