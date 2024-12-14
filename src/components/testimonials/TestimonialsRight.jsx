import React from 'react'
import profile from './../img/Testimonials/profile-photo.png'
import nextBtn from './../img/Testimonials/next-btn.png'
import prevBtn from './../img/Testimonials/prev-btn.png'
const TestimonialsRight = () => {
	return (
		<>
			<div className='testimonials-right__wrapper'>
				<h4 className='right__h4'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</h4>
				<div className='testimonials-right__bottom'>
					<section className='testimonials-right__profile'>
						<img width={48} height={48} src={profile} alt='' />
						<article className='profile__text'>
							<h4>Jonathan Vallem</h4>
							<p>New york, USA</p>
						</article>
					</section>
					<div className='testimonials__btns'>
						<img src={prevBtn} alt='' />
						<img style={{ marginLeft: '24px' }} src={nextBtn} alt='' />
					</div>
				</div>
			</div>
		</>
	)
}

export default TestimonialsRight
