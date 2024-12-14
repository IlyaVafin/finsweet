import React, { useRef, useState } from 'react'
import SubscribeBtn from './../SubsrcibeBtn'
import subStyle from './../../style/SubscribeBtn.module.scss'
const FooterForm = () => {
	const [email, setEmail] = useState('')
	const [emailDirty, setEmailDirty] = useState(false)
	const [emailError, setEmailError] = useState('Email не может быть пустым!')

	const blurHandler = e => {
		switch (e.target.name) {
			case 'email':
				setEmailDirty(true)
				break
		}
	}
	const EmailHandler = e => {
		setEmail(e.target.value)
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		if (!re.test(String(e.target.value).toLowerCase())) {
			setEmailError('Неккоректный email!')
		} else {
			setEmailError('')
		}
	}
	return (
		<>
			<div className='footer-form__wrapper'>
				<h2>Subscribe to our news letter to get latest updates and news</h2>
				{emailDirty && emailError && (
					<div style={{ color: 'red' }}>{emailError}</div>
				)}
				<form className='footer__form' action=''>
					<input
						onChange={e => EmailHandler(e)}
						value={email}
						onBlur={e => blurHandler(e)}
						name='email'
						placeholder='Enter Your Email'
						type='email'
					/>
					<SubscribeBtn styleClassBtn={subStyle.nav__btn_footer} />
				</form>
			</div>
		</>
	)
}

export default FooterForm
