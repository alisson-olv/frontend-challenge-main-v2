import React, { useContext, useState } from 'react';
import { ListProductContext } from '../contexts/ListProductsContext';
import ArrowIcon from '../icons/ArrowIcon';

const FilterBySort = () => {
  const { setTypeOfSort } = useContext(ListProductContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpenOverlay = () => {
    setIsOpen(false);
  };

  const handleTypeOfSort = (query) => {
    setTypeOfSort(query);
    setIsOpen(false);
  };

  const sortList = [
    {
      name: 'Novidades',
      queryFilter: 'sortField: "created_at", sortOrder: "DESC"'
    },
    {
      name: 'Preço: Maior - menor',
      queryFilter: 'sortField: "price_in_cents", sortOrder: "DESC"'
    },
    {
      name: 'Preço: Menor - maior',
      queryFilter: 'sortField: "price_in_cents", sortOrder: "ASC"'
    },
    {
      name: 'Mais vendidos',
      queryFilter: 'sortField: "sales", sortOrder: "DESC"'
    }
  ];

  return (
    <>
      <div className='relative'>
        <p
          className='cursor-pointer flex items-center gap-2 py-2 z-10 relative text-texto-dark select-none'
          onClick={() => setIsOpen(!isOpen)}>
          Organizar por <ArrowIcon className={`${isOpen ? 'rotate-180 transition-all' : 'transition-all'}`} />
        </p>
        {isOpen &&
          <>
            <ul className='absolute z-10 bg-slate-100 p-5 grid gap-2 right-0 w-[200px]'>
              {sortList.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleTypeOfSort(item.queryFilter)}
                  className='cursor-pointer text-texto-dark hover:translate-x-1 hover:text-slate-800 transition-all'
                >
                  {item.name}
                </li>
              ))}
            </ul>
            <div onClick={handleIsOpenOverlay} className='fixed top-0 right-0 left-0 bottom-0'></div>
          </>
        }
      </div>
    </>
  )
};

export default FilterBySort;