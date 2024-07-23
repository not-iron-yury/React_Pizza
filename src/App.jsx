import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Categories from './components/UI/Categories';
import Sort from './components/UI/Sort';
import './scss/app.scss';

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
            <div className='content__items'>
              <PizzaBlock title='Сырная с колбасками' price={400} />
              <PizzaBlock title='Сырная с салями' price={420} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
