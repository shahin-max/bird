import "./sidebar.css";
import {
  PermIdentity,
  ArrowDropDown,
  Edit,
  BarChartOutlined,
  ContactSupport,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        
        <div className="sidebarMenu">
         
          <ul className="sidebarList">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Profile
              </li>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Edit className="sidebarIcon" />
                Projects<ArrowDropDown/>
              </li>
            </Link>
            <li className="sidebarListItem">
              <BarChartOutlined className="sidebarIcon" />
              Finance<ArrowDropDown/>
            </li>
            <li className="sidebarListItem">
              <ContactSupport className="sidebarIcon" />
              Support<ArrowDropDown/>
            </li>
          </ul>
        </div>
      
      </div>
    </div>
  );
}
