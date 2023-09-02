import React, { useContext } from 'react'
import useFetch from '../hooks/useFetch';
import { ListProductContext } from '../contexts/ListProductsContext';
import PriceConverter from '../utils/PriceConverter';
import FilterByType from './FilterByType';
import FilterBySort from './FilterBySort';
import { useNavigate } from 'react-router-dom';

const CardsProducts = () => {
  const navigate = useNavigate();

  const { query } = useContext(ListProductContext);

  const { data } = useFetch(query);

  const handleItemChosed = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <div className='flex flex-wrap justify-between items-center py-10'>
        <FilterByType />
        <FilterBySort />
      </div>

      <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {data &&
          data.data.allProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => handleItemChosed(product.id)}
              className='max-w-[256px] min-w-[256px] mx-auto shadow-lg shadow-slate-600/40 hover:shadow-slate-800/80 transition-all cursor-pointer'
            >
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
    </>
  )
};

export default CardsProducts;