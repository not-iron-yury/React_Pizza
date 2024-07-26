import React from 'react';
import Categories from '../components/UI/Categories';
import Sort from '../components/UI/Sort';
import Card from '../components/PizzaBlock/Card';
import LoaderCard from '../components/PizzaBlock/LoaderCard';
//import DataPizza from './assets/JSON/pizza.json';

export default function Home() {
  const [pizzaList, setPizzaList] = React.useState([]);
  const [pageIsLoaded, setPageIsLoaded] = React.useState(false);

  async function pizzasData() {
    await fetch('https://66a0dd137053166bcabd2744.mockapi.io/items')
      .then((res) => res.json())
      .then((response) => {
        setPizzaList(response);
        setPageIsLoaded(true);
      });
  }

  React.useEffect(() => {
    pizzasData();
  }, []);
  return (
    <>
      <div className='content__top'>
        <Categories />
        <Sort />
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
