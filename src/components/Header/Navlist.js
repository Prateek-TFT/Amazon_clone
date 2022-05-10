import { Link } from "react-router-dom";

const Navlist = ({navStyle}) => {

  return (
    <ul className={navStyle}>
      <li><Link to="/" >Home</Link></li>
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
