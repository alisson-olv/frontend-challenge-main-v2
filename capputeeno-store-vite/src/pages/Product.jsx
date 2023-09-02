import Header from '../components/Header'
import ProductItem from '../components/ProductItem';

const Product = () => {

  return (
    <>
      <div className="mx-auto max-w-[1120px] px-3">
        <Header />
      </div>
      <div className='bg-custom-light-gray'>
        <div className="mx-auto max-w-[1120px] px-3">
          <ProductItem />
        </div>
      </div>
    </>
  )
};

export default Product;