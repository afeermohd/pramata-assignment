import { Eco, Home, Search } from "@material-ui/icons";

import "./sidebar.css";
import SidebarExt from "./SidebarExt";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <div className="sidebar__menu">
          {/* <h3 className="sidebar__title">Title</h3> */}
          <ul className="sidebar__list">
            <li className="sidebar__listItem">
              <Search className="sidebar__icon" />
            </li>
            <li className="sidebar__listItem">
              <Home className="sidebar__icon" />
            </li>
            <li className="sidebar__listItem active">
              <Eco className="sidebar__icon" />
            </li>
          </ul>
        </div>
      </div>
      <SidebarExt />
    </div>
  );
};

export default Sidebar;
