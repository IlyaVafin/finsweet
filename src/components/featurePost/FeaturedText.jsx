import React from 'react'
import MoreBtn from './../shared/MoreBtn'
const FeaturedText = () => {
	return (
		<>
			<div className='featured__text'>
				<p className='featured__author'>
					By <span>John Doe</span> | May 23, 2022
				</p>
				<h3 className='featured__title'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor.
				</h3>
				<p className='featured__description'>
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
					dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident.
				</p>
				<MoreBtn MarginWith={false} />
			</div>
		</>
	)
}

export default FeaturedText
