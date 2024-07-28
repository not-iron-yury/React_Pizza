import React from 'react';
import Categories from '../components/UI/Categories';
import Sort from '../components/UI/Sort';
import Card from '../components/PizzaBlock/Card';
import LoaderCard from '../components/PizzaBlock/LoaderCard';
//import DataPizza from './assets/JSON/pizza.json';

export default function Home() {
  const [pizzaList, setPizzaList] = React.useState([]);
  const [pageIsLoaded, setPageIsLoaded] = React.useState(false);
  const [sortId, setSortId] = React.useState(0);
  const [activeCategory, setActiveCategory] = React.useState(0);

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
    const sortPizzaList = `sortBy=${sortType[sortId]}`;
    const filterPizzaList = activeCategory !== 0 ? `category=${activeCategory}` : '';
    const queryParams = '?' + sortPizzaList + '&' + filterPizzaList;
    const url = 'https://66a0dd137053166bcabd2744.mockapi.io/items' + queryParams;

    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        setPizzaList(response);
        setPageIsLoaded(true);
      });
  }, [sortId, activeCategory]);

  return (
    <>
      <div className='content__top'>
        <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <Sort activeSelect={sortId} setActiveSelect={setSortId} />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <ul className='content__items'>
        {pageIsLoaded
          ? pizzaList.map((itm) => <Card key={itm.id} pizza={itm} />)
          : [...Array(8)].map((_, i) => <LoaderCard key={i} />)}
      </ul>
    </>
  );
}
