import { useState } from "react";

const NameConverter = (name) => {
  let nameConverted = ''

  if (name === 't-shirts') {
    nameConverted = 'Camiseta'

  } else if (name === 'mugs') {
    nameConverted = 'Caneca'
  }

  return nameConverted;
};

export default NameConverter;