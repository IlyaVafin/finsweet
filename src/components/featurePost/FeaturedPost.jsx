import React from 'react'
import './../style/FeaturedPost.scss'
import whiteBuild from './../img/FeaturedImg/whiteBuild.jpg'
import FeaturedText from './FeaturedText'
import FeaturedAll from './FeaturedAll'
const FeaturedPost = () => {
	return (
		<>
			<div className='featured__container'>
				<section className='featured__wrapper'>
					<section className='featured__content'>
						<article className='featured__post'>
							<h2>Featured Post</h2>
							<div className='featured-post__content'>
								<img src={whiteBuild} alt='' />
								<FeaturedText />
							</div>
						</article>
						<FeaturedAll />
					</section>
				</section>
			</div>
		</>
	)
}

export default FeaturedPost
