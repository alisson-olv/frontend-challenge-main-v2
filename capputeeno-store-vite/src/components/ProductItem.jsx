import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../contexts/ProductsContext'
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import PriceConverter from '../utils/PriceConverter';
import NameConverter from '../utils/NameConverter';
import BackButton from './BackButton';
import ShoppingBagIconWhite from '../icons/ShoppingBagIconWhite';

const ProductItem = () => {
  const { setProductId } = useContext(ProductContext);
  const { id } = useParams();

  useEffect(() => {
    const useId = () => {
      setProductId(id)
    }

    useId();
  }, []);

  const { query } = useContext(ProductContext);

  const { data } = useFetch(query);

  return (
    <>
      <div>
        <BackButton />
      </div>
      <div>
        {data &&
          data.data.allProducts.map((product, index) => (
            <div key={index} className='flex gap-5'>
              <img src={product.image_url} alt={product.name} />

              <div className='flex flex-col gap-5'>
                <p className='text-texto-dark'>{NameConverter(product.category)}</p>

                <div className='grid gap-16'>
                  <div className='grid gap-7'>
                    <div className='grid gap-1'>
                      <h3 className='text-texto-dark text-3xl'>{product.name}</h3>
                      <p className='text-[#09090A] text-2xl font-bold'>{PriceConverter(product.price_in_cents)}</p>
                    </div>

                    <p className='text-texto-dark text-sm'>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
                  </div>

                  <div className='grid gap-3'>
                    <p className='uppercase text-texto-dark font-bold'>Descrição</p>

                    <p className='text-texto-dark'>{product.description}</p>
                  </div>
                </div>

                <div className='select-none flex gap-3 items-center justify-center bg-[#115D8C] hover:bg-[#1576b2] transition-all py-2 cursor-pointer active:bg-[#1167a0] '>
                  <ShoppingBagIconWhite /> <span className='uppercase text-[#F5F5FA]'>Adicionar ao carrinho</span>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
};

export default ProductItem;