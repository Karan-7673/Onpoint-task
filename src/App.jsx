import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Users from './Pages/Users';
import Posts from './Pages/Posts';
import Dashboard from './Pages/Dashboard';
import SidebarWithNavbar from './Components/Sidebar';


function App() {
  return (
    <Router>
      <div className="">

        <Routes>
          <Route path="/" element={<SidebarWithNavbar />}>
            <Route index element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/posts" element={<Posts />} />
          </Route>
        </Routes>
      </div>
    </Router >
  );
}

export default App;
