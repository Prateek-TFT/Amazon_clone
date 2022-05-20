import { Link } from "react-router-dom";

const Navlist = ({navStyle}) => {

  return (
    <ul className={navStyle}>
      <li><Link to="/" >Home</Link></li>
      <li><Link to="/" >Channels</Link></li>
      <li> 
        <a>       
          <span>Catgories<i className="fa fa-sort-down" /></span>  
        </a>      
      </li>
      <li><Link to="/">My Stuff</Link></li>
    </ul>
  );
};

export default Navlist;
