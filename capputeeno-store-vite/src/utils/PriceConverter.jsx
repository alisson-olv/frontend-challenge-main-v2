const PriceConverter = (price) => {
  const reais = price / 100;
  const priceItem = reais.toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' });

  return priceItem;
};

export default PriceConverter;