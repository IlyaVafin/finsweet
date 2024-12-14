import React from 'react'
import AllCard from './AllCard'

const FeaturedAll = () => {
	return (
		<>
			<div className='featured__all-posts'>
				<div className='all-post__header'>
					<h2>All Posts</h2>
					<a href='#'>View All</a>
				</div>
				<div className='all-posts__cards'>
					<AllCard />
					<AllCard />
					<AllCard />
					<AllCard />
				</div>
			</div>
		</>
	)
}

export default FeaturedAll
