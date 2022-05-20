import { Link } from "react-router-dom";

const Navlist = ({navStyle}) => {

  return (
    <ul className={navStyle}>
      <li><Link to="/" >Home</Link></li>
      <li><Link to="/" >Channels</Link></li>
      <li> 
        <Link to="/" >       
          <span>Catgories<i className="fa fa-sort-down" /></span>  
        </Link>      
      </li>
      <li><Link to="/mystuff">My Stuff</Link></li>
    </ul>
  );
};

export default Navlist;
