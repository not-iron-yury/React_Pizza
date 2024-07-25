import ContentLoader from 'react-content-loader';

const LoaderCard = (props) => (
  <ContentLoader
    className='pizza-block'
    speed={2}
    width={280}
    height={379}
    viewBox='0 0 280 379'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}>
    <rect x='0' y='235' rx='0' ry='0' width='280' height='88' />
    <rect x='0' y='190' rx='0' ry='0' width='278' height='28' />
    <rect x='0' y='0' rx='0' ry='0' width='280' height='173' />
    <rect x='0' y='331' rx='0' ry='0' width='91' height='44' />
    <rect x='150' y='330' rx='0' ry='0' width='130' height='44' />
  </ContentLoader>
);

export default LoaderCard;
