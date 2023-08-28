import React from 'react'

const CardsProducts = () => {
  return (
    <div className='max-w-[256px]'>
      <img className='h-[300px] object-cover' src="https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg" alt="" />
      <div className='bg-off-white'>
        <h3>
          Caneca de cerâmica rústica
        </h3>
        <hr />
        <p>
          R$ 40,00
        </p>
      </div>
    </div>
  )
}

export default CardsProducts;