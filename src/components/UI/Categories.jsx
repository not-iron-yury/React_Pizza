export default function Categories({ activeCategory, setActiveCategory }) {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className='categories'>
      <ul>
        {categories.map((category, i) => (
          <li
            key={i}
            className={i === activeCategory ? 'active' : null}
            onClick={() => setActiveCategory(i)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
