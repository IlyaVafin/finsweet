import React from 'react'
import App from '../App'
import Header from '../components/shared/header/Header'
import '../components/style/reset.scss'
import Hero from '../components/hero/Hero'
import FeaturedPost from '../components/featurePost/FeaturedPost'
import AboutUs from '../components/about/AboutUs'
import Catagory from '../components/catagory/Catagory'
import SpecialPost from '../components/specialPost/SpecialPost'
import ListAuthors from '../components/listAuthors/ListAuthors'
import Companies from '../components/companies/Companies'
import Testimonials from '../components/testimonials/Testimonials'
import JoinNow from '../components/JoinNow'
import Footer from '../components/shared/footer/Footer'
const Home = () => {
	return (
		<>
			<Header />
			<Hero />
			<FeaturedPost />
			<AboutUs />
			<Catagory />
			<SpecialPost />
			<ListAuthors />
			<Companies />
			<Testimonials />
			<JoinNow />
			<Footer />
		</>
	)
}

export default Home
