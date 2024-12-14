import React from 'react'
import './../style/SpecialPost.scss'
import SpecialImg from './../img/SpecialPost/close-up-photography-of-man-wearing-sunglasses-1212984.jpg'
import SpecialCard from './SpecialCard'
const SpecialPost = () => {
	return (
		<>
			<div className='special-post__container'>
				<div className='special-post-wrapper'>
					<section className='special-post__content'>
						<article>
							<img src={SpecialImg} alt='' />
						</article>
						<article className='special-post__card'>
							<SpecialCard />
						</article>
					</section>
				</div>
			</div>
		</>
	)
}

export default SpecialPost
