import { useState } from 'react';
import styles from '../../styles/Navbar.module.css';
import logo from '../../assets/logo/logo.png';
import search from '../../assets/search.png';
import globe from '../../assets/globe.png';
import user from '../../assets/user.png';
import useWindowDimensions from '../../hooks/dimesion';
import UserList from './UserList';
import Navlist from './Navlist';

const Navbar = () => {

    const [showUser , setShowUser] = useState(false);
    const [showNav , setShowNav] = useState(false);
    const {width} = useWindowDimensions();

    const handleShowUserList = () => setShowUser(!showUser)
    const handleShowNavList = () => {
        if(width <= 1040) {
            setShowNav(!showNav)
        }
    }

    return (
        <header className={`${styles['navbar']} ${styles['sticky']}`}>
            <div className={styles['nav-container']}>
                <a className={styles['nav-logo']}>
                    <img src={logo} alt='amazon-logo'/>
                </a>
                <div className={styles['nav-components']}>
                    <div className={styles['nav-primary']}>
                        <span className={styles['browse']} onClick={handleShowNavList}>Browse <i className="fa fa-sort-down" /></span>
                        { showNav && <Navlist  navStyle={styles['nav-responsive-list']}/> }
                        { width > 1040 && <Navlist  navStyle={styles['nav-list']} /> }
                    </div>
                    <div className={styles['nav-secondary']}>
                        <div className={styles['btn']}><button>Try for free</button></div>
                        <div className={styles['search']}><img src={search} alt="search-icon" /></div>
                        <div className={styles['language']}>
                            <img src={globe} alt="globe-icon" />
                            <span>EN</span>
                            <i className="fa fa-sort-down" />
                        </div>
                        <div className={styles['user']}>
                            <div  onClick={handleShowUserList} >
                                <img src={user} alt="user-icon"/>
                                <i className={showUser ? "fa fa-sort-up" : "fa fa-sort-down"}/>
                            </div>
                            {   showUser && <UserList onClickOutside = {handleShowUserList} /> }
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar;
