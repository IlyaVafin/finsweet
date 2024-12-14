import React from 'react'
import { useState } from 'react'
const MoreBtn = ({ MarginWith, showWindow, MTop }) => {
	return (
		<>
			<button
				onClick={showWindow}
				style={{ marginBottom: MarginWith ? '250px' : 0, marginTop: MTop }}
				className='hero__btn'
			>
				Read More {'>'}
			</button>
		</>
	)
}

export default MoreBtn
