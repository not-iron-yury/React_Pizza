import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Categories from './components/UI/Categories';
import Sort from './components/UI/Sort';
//import DataPizza from './assets/JSON/pizza.json';

function App() {
  const [pizzaList, setPizzaList] = React.useState([]);

  React.useEffect(() => {
    fetch('https://66a0dd137053166bcabd2744.mockapi.io/items')
      .then((result) => result.json())
      .then((data) => setPizzaList(data));
  }, [pizzaList]);

  return (
    <>
      <div className='wrapper'>
        <Header />
        <div className='content'>
          <div className='container'>
            <div className='content__top'>
              <Categories />
              <Sort />
            </div>
            <h2 className='content__title'>Все пиццы</h2>
            <ul className='content__items'>
              {pizzaList.map((itm) => (
                <PizzaBlock key={itm.id} pizza={itm} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
