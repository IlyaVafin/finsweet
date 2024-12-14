import React from 'react'
import CatagoryCard from './CatagoryCard'
import CatagoryList from './CatagoryList'
import './../style/Catagory.scss'
const Catagory = () => {
	return (
		<>
			<div className='catagory__wrapper'>
				<div className='catagory__container'>
					<h2>Choose A Catagory</h2>
					<div className='catagory__cards-wrapper'>
						{CatagoryList.map((v, k) => {
							return (
								<CatagoryCard
									img={v.img}
									title={v.title}
									description={v.description}
								/>
							)
						})}
					</div>
				</div>
			</div>
		</>
	)
}

export default Catagory
