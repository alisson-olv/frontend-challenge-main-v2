import ShoppingBagIcon from '../icons/ShoppingBagIcon';
import SearchLoupe from '../icons/SearchLoupe';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  return (
    <header className='my-5'>
      <div className='flex items-center justify-between flex-wrap'>
        <h1
          className='select-none text-[40px] text-custom-md-gray cursor-pointer'
        >
          <Link to='/'>capputeeno</Link>
        </h1>

        <div className='flex items-center flex-wrap justify-between gap-4'>
          <div className='relative grid items-center'>
            <input
              className='w-[350px] max-w-full rounded-md outline-none py-2 px-3 bg-gray-200 text-texto-dark'
              type="text"
              placeholder='Procurando por algo específico?'
            />

            <div className="absolute right-4 cursor-pointer">
              <SearchLoupe />
            </div>
          </div>

          <div className='relative cursor-pointer'>
            <ShoppingBagIcon />
            <span className='select-none text-center absolute left-3 top-4 bg-red-600 rounded-full w-6 text-white text-[10px] p-1'>
              2
            </span>
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;