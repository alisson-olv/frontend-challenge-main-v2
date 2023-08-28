import React from 'react'
import Header from '../components/Header'
import CardsProducts from '../components/CardsProducts';

const Home = () => {
  return (
    <>
      <div className="container px-4 mx-auto">
        <Header />
      </div>
      <div className='bg-slate-300'>
        <div className="container px-4 mx-auto h-screen">
          <CardsProducts />
        </div>
      </div>
    </>
  )
}

export default Home;