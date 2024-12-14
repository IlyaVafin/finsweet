import React from 'react'
import './../style/ListAuthors.scss'
import AuthorList from './AuthorsList'
import AuthorsCard from './AuthorsCard'
const ListAuthors = () => {
	return (
		<>
			<div className='catagory__container'>
				<div className='list-authors__wrapper'>
					<h1>List of Authors</h1>
					<section className='authors-cards__wrapper'>
						{AuthorList.map((item, index) => {
							return (
								<AuthorsCard
									key={index}
									img={item.img}
									title={item.title}
									email={item.email}
								/>
							)
						})}
					</section>
				</div>
			</div>
		</>
	)
}

export default ListAuthors
