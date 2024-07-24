import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Categories from './components/UI/Categories';
import Sort from './components/UI/Sort';
import './scss/app.scss';
import DataPizza from './assets/JSON/pizza.json';

function App() {
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
              {DataPizza.map((itm) => (
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
