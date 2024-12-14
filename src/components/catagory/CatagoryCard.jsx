import React from 'react'

const CatagoryCard = ({ img, title, description }) => {
	return (
		<>
			<div className='catagory__card'>
				<div className='img__bg'>
					<img src={img} alt='' />
				</div>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</>
	)
}

export default CatagoryCard
