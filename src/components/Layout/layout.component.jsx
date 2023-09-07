import "./layout.styles.scss";
import Sidebar from "../Sidebar/sidebar.component";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="App">
        <Sidebar />
        <div className="page">
          <span className="tags top-tags">&lt;body&gt;</span>
          <Outlet />
          <span className="tags bottom-tags">
            &lt;/body&gt;
            <br />
            <span className="bottom-tag-html">&lt;/httml&gt;</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Layout;
