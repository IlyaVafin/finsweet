import React from 'react'
import HeroMan from '../ImgBlog/man-in-white-Hero.png'
import MoreBtn from './../../components/shared/MoreBtn'
import '../styleBlog/HeroBlog.scss'
const HeroBlog = () => {
	return (
		<>
			<div className='blog-hero__wrapper'>
				<div className='blog-hero__container'>
					<section className='blog-hero__content'>
						<article className='blog-hero__text'>
							<p className='featured--post'>FEATURED POST</p>
							<h2>Step-by-step guide to choosing great font pairs</h2>
							<p className='authors__blog'>
								By <span>John Doe</span> | May 23, 2022
							</p>
							<p className='desc__blog'>
								Duis aute irure dolor in reprehenderit in voluptate velit esse
								cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
								cupidatat non proident.
							</p>
							<MoreBtn MTop={32} />
						</article>
						<img src={HeroMan} alt='' />
					</section>
				</div>
			</div>
		</>
	)
}

export default HeroBlog
