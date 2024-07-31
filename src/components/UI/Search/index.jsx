import React from 'react';
import styles from './search.module.scss';
import { SearchContext } from '../../../App'; // !

export default function Search() {
  const { searchValue, setSearchValue } = React.useContext(SearchContext); // !

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
