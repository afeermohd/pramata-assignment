import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import TimelinePage from "./pages/timeline/TimelinePage";

import "./app.css";

const App = () => {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar className="sidebarPage" />
        <TimelinePage />
      </div>
    </div>
  );
};

export default App;
