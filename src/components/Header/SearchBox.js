import styles from '../../styles/Navbar.module.css';

const SearchBox = () => {
  return (
    <div className={styles['search-box']}>
      <form >
          <input type="text" placeholder="Search" />
      </form>
    </div>
  )
}

export default SearchBox;
