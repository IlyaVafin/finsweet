import React from 'react'
import TestimonialsLeft from './TestimonialsLeft'
import './../style/Testimonials.scss'
import TestimonialsRight from './TestimonialsRight'
const Testimonials = () => {
	return (
		<>
			<div className='testimonials__wrapper'>
				<div className='testimonials__container'>
					<section className='testimonials__content'>
						<TestimonialsLeft />
						<div className='line'></div>
						<TestimonialsRight />
					</section>
				</div>
			</div>
		</>
	)
}

export default Testimonials
