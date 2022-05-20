import { NavLink } from "react-router-dom";
import styles from "../../styles/NavList.module.css";
const Navlist = ({ navStyle }) => {
  return (
    <ul className={navStyle}>
<<<<<<< HEAD
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? styles.active : "")}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>Channels</li>
      <li>
        <span>Catgories</span>
        <i className="fa fa-sort-down" />
      </li>
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? styles.active : "")}
          to="/mystaff"
        >
          My Stuff
        </NavLink>
      </li>
=======
      <li><Link to="/" >Home</Link></li>
      <li><Link to="/" >Channels</Link></li>
      <li> 
        <Link to="/" >       
          <span>Catgories<i className="fa fa-sort-down" /></span>  
        </Link>      
      </li>
      <li><Link to="/mystuff">My Stuff</Link></li>
>>>>>>> 35bfc5cb6478a44cb54a19d3a984b6dc66957b97
    </ul>
  );
};

export default Navlist;
