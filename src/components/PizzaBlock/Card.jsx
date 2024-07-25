import React from 'react';
import AddButton from '../UI/AddButton';

export default function Card({ pizza }) {
  const [activeSize, setActiveSize] = React.useState(0);
  const [activeType, setActiveType] = React.useState(0);

  const typesPizza = { 0: 'тонкое', 1: 'традиционное' };

  return (
    <li className='pizza-block' data-category-num={pizza.category}>
      <img className='pizza-block__image' src={pizza.imageUrl} alt='Pizza' />
      <h4 className='pizza-block__title'>{pizza.title}</h4>
      <div className='pizza-block__selector'>
        <ul>
          {pizza.types.map((type, i) => (
            <li
              key={type}
              className={i === activeType ? 'active' : ''}
              onClick={() => setActiveType(i)}>
              {typesPizza[type]}
            </li>
          ))}
        </ul>
        <ul>
          {pizza.sizes.map((size, i) => (
            <li
              key={size}
              className={i === activeSize ? 'active' : ''}
              onClick={() => setActiveSize(i)}>
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className='pizza-block__bottom'>
        <div className='pizza-block__price'>от {pizza.price} ₽</div>
        <AddButton>Добавить</AddButton>
      </div>
    </li>
  );
}
