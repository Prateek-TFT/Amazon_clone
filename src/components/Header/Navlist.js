import { NavLink } from "react-router-dom";
import styles from "../../styles/NavList.module.css";
const Navlist = ({ navStyle }) => {
  return (
    <ul className={navStyle}>
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
    </ul>
  );
};

export default Navlist;
