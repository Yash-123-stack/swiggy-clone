import React from 'react'
import Header from '../components/Header'
import Category from '../components/Category'
import TopRest from '../components/TopRest'

const Landing = () => {
  return (
    <div className='flex flex-col gap-2'>
    <Header/>
    <Category/>
    <TopRest/>
    </div>
  )
}

export default Landing