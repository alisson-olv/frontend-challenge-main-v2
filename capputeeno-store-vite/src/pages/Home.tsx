import React from 'react'
import Header from '../components/Header'
import CardsProducts from '../components/CardsProducts';

const Home = () => {
  return (
    <>
      <div className="mx-auto max-w-[1120px] px-3">
        <Header />
      </div>
      <div className='bg-custom-light-gray'>
        <div className="mx-auto max-w-[1120px] px-3">
          <CardsProducts />
        </div>
      </div>
    </>
  )
};

export default Home;