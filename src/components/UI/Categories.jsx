import { useState } from 'react';

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(0);
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  function changeCategory(i) {
    setActiveCategory(i);
  }

  return (
    <div className='categories'>
      <ul>
        {categories.map((itm, i) => (
          <li
            key={itm}
            className={i === activeCategory ? 'active' : null}
            onClick={() => changeCategory(i)}>
            {itm}
          </li>
        ))}
      </ul>
    </div>
  );
}
