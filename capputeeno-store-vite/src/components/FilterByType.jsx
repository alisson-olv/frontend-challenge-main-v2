import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductsContext';

const FilterByType = () => {
  const { typeOfProduct, setTypeOfProduct } = useContext(ProductContext);

  const handleTypeOfProduct = (item) => {
    setTypeOfProduct(item)
  };

  const menuList = [
    {
      name: 'Todos os Produtos',
      queryFilter: ''
    },
    {
      name: 'Camisetas',
      queryFilter: '(filter: {category: "t-shirts"})'
    },
    {
      name: 'Canecas',
      queryFilter: '(filter: {category: "mugs"})'
    }
  ];

  return (
    <div>
      <ul className='flex gap-10 uppercase'>
        {
          menuList.map((menu, index) => (
            <li
              key={index}
              onClick={() => handleTypeOfProduct(menu.queryFilter)}
              className={`${typeOfProduct === menu.queryFilter ? 'font-bold text-slate-950 border-[#FFA585]' : 'border-transparent'} cursor-pointer text-lg text-custom-md-gray border-b-4 select-none`}
            >
              {menu.name}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default FilterByType;