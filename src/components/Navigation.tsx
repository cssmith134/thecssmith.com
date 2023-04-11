import navItems from "../data/navitems";
import ReorderIcon from '@material-ui/icons/Reorder';

type NavItem = {
  name: string;
  url: string;
};

const navItemFormatter = (navitem: NavItem) => {
  return (
    
    <li className="mx-2 hover:text-blue-500" key={navitem.name}>
      <a href={navitem.url}>{navitem.name}</a>
    </li>
  );
};

const Navigation = () => {
  return (
    <div>
        
      <ul className="flex flex-col md:flex-row">
        {navItems.map(navItemFormatter)}
      </ul>
      
    </div>
  );
};

export default Navigation;
