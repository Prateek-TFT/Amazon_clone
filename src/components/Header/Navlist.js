import styles from "../../styles/Navbar.module.css";

const Navlist = ({navStyle}) => {
  return (
    <ul className={navStyle}>
      <li>Home</li>
      <li>Store</li>
      <li>Channels</li>
      <li>
        <span>Catgories</span>
        <i className="fa fa-sort-down" />
      </li>
      <li>My Stuff</li>
    </ul>
  );
};

export default Navlist;
