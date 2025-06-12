import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import BlogList from '../components/BlogList'
import NewSletter from '../components/NewSletter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <BlogList/>
      <NewSletter/>
      <Footer/>
    </div>
  )
}

export default Home
