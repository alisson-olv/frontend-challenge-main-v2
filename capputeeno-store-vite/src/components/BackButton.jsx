import React from 'react'
import BackIcon from '../icons/BackIcon';
import { Link } from 'react-router-dom';

const BackButton = () => {

  return (
    <Link to='/' className='inline-flex gap-2 my-5'>
      <BackIcon />
      <span className='text-[#617480] font-semibold'>Voltar</span>
    </Link>
  )
};

export default BackButton;