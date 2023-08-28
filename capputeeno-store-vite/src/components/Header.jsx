import ShoppingBagIcon from '../icons/ShoppingBagIcon';
import SearchLoupe from '../icons/SearchLoupe';
import useFetch from '../hooks/useFetch';

const Header = () => {
  const { data } = useFetch();

  console.log(data);

  return (
    <header className='my-5'>
      <div className='flex items-center justify-between flex-wrap'>
        <div className='text-[40px] text-custom-md-grey'>
          <h1>
            capputeeno
          </h1>
        </div>

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
            <span className='text-center absolute left-3 top-4 bg-red-600 rounded-full w-6 text-white text-[10px] p-1'>
              2
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;