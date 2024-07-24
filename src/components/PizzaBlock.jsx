import AddButton from './UI/AddButton';

export default function PizzaBlock({ pizza }) {
  return (
    <li className='pizza-block'>
      <img className='pizza-block__image' src={pizza.imageUrl} alt='Pizza' />
      <h4 className='pizza-block__title'>{pizza.title}</h4>
      <div className='pizza-block__selector'>
        <ul>
          <li className='active'>тонкое</li>
          <li>традиционное</li>
        </ul>
        <ul>
          <li className='active'>26 см.</li>
          <li>30 см.</li>
          <li>40 см.</li>
        </ul>
      </div>
      <div className='pizza-block__bottom'>
        <div className='pizza-block__price'>от {pizza.price} ₽</div>
        <AddButton>Добавить</AddButton>
      </div>
    </li>
  );
}
