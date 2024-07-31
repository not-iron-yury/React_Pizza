import React from 'react';
import Categories from '../components/UI/Categories';
import Sort from '../components/UI/Sort';
import Card from '../components/PizzaBlock/Card';
import LoaderCard from '../components/PizzaBlock/LoaderCard';
//import DataPizza from './assets/JSON/pizza.json';
//import Search from '../components/UI/Search';

export default function Home({ searchValue }) {
  const [pizzaList, setPizzaList] = React.useState([]);
  const [pageIsLoaded, setPageIsLoaded] = React.useState(false);
  const [sortId, setSortId] = React.useState(0);
  const [sortOrder, setSortOrder] = React.useState('asc');
  const [activeCategory, setActiveCategory] = React.useState(0);
  // const [searchValue, setSearchValue] = React.useState('');

  // React.useEffect(() => {
  //   fetch('https://66a0dd137053166bcabd2744.mockapi.io/items?sortBy=rating')
  //     .then((res) => res.json())
  //     .then((response) => {
  //       setPizzaList(response);
  //       setPageIsLoaded(true);
  //     });
  //   window.scrollTo(0, 0);
  // }, []);

  React.useEffect(() => {
    const sortType = { 0: 'rating', 1: 'price', 2: 'title' };
    const sortPizzaList = `?sortBy=${sortType[sortId]}`;
    const filterPizzaList = activeCategory !== 0 ? `&category=${activeCategory}` : '';
    const queryParams = sortPizzaList + filterPizzaList + `&order=${sortOrder}`;
    const url = 'https://66a0dd137053166bcabd2744.mockapi.io/items' + queryParams;

    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        setPizzaList(response);
        setPageIsLoaded(true);
      });
  }, [sortId, activeCategory, sortOrder]);

  // ==================== search ==================== //

  const preloaderCard = [...Array(8)].map((_, i) => <LoaderCard key={i} />);
  const sortedPizzas = pizzaList.filter((itm) =>
    itm.title.toLowerCase().includes(searchValue.toLowerCase()),
  );
  const pizzas = sortedPizzas.map((itm) => <Card key={itm.id} pizza={itm} />);

  // ==================== /search =================== //
  return (
    <>
      <div className='content__top'>
        <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <Sort
          activeSelect={sortId}
          setActiveSelect={setSortId}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}>
        <h2 className='content__title'>Все пиццы</h2>
        {/* <Search searchValue={searchValue} setSearchValue={setSearchValue} /> */}
      </div>
      <ul className='content__items'>{pageIsLoaded ? pizzas : preloaderCard}</ul>
    </>
  );
}
