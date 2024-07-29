import styles from './search.module.scss';

export default function Search({ searchValue, setSearchValue }) {
  return (
    <div className={styles.root}>
      <input
        className={styles.search}
        placeholder='Найти пиццу...'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {searchValue && (
        <span className={styles.clear} onClick={() => setSearchValue('')}>
          X
        </span>
      )}
    </div>
  );
}
