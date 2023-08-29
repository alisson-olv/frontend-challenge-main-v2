import React from 'react'
import useFetch from '../hooks/useFetch';
import PriceConverter from '../utils/PriceConverter';

const CardsProducts = () => {
  const urlApi = 'http://localhost:3333/';
  const query = `query {
    allProducts {
      id,
      name,
      price_in_cents,
      image_url,
      description,
      category,
    }
  }`

  const { data } = useFetch(urlApi, query);

  // console.log(data);

  return (
    <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {data &&
        data.data.allProducts.map((product) => (
          <div className='max-w-[256px] mx-auto' key={product.id}>
            <img className='h-[300px] object-cover rounded-t-md' src={product.image_url} alt={product.name} />
            <div className='bg-off-white px-4 py-5 rounded-b-md'>
              <h3 className='text-texto-dark text-lg'>
                {product.name}
              </h3>
              <hr className='my-2' />
              <p className='font-bold'>
                {PriceConverter(product.price_in_cents)}
              </p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default CardsProducts;