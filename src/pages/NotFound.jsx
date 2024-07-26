import Header from '../components/Header';

export default function NotFound() {
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <div className='container'>
          <h1 style={{ textAlign: 'center' }}>Страница не найдена</h1>
        </div>
      </div>
    </div>
  );
}
