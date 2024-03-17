import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import LandingPage from "./Pages/LandingPage/LandingPage";
import Registration from "./Pages/Registration/Registration";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import CategoryDetails from "./Pages/CategoryDetails/CategoryDetails";
import Feedback from "./Pages/Feedback/Feedback";
import AdminDashboard from "./Admin/AdminDashboard/AdminDashboard";
import Venue from "./Admin/Venue/Venue";
import Decors from "./Admin/Decors/Decors";
import Caterers from "./Admin/Caterers/Caterers";
import AddVenue from "./Admin/Venue/AddVenue";
import UpdateVenue from "./Admin/Venue/UpdateVenue";
import AddCaterers from "./Admin/Caterers/AddCaterers";
import UpdateCaterers from "./Admin/Caterers/UpdateCaterers";
import AddDecorer from "./Admin/Decors/AddDecorer";
import UpdateDecorer from "./Admin/Decors/UpdateDecorer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/CategoryDetails" element={<CategoryDetails/>}/>
          <Route path="/Feedback" element={<Feedback/>}/>
          <Route path="/AdminDashboard" element={<AdminDashboard/>}/>
          <Route path="/managevenues" element={<Venue/>}/>
          <Route path="/managedecors" element={<Decors/>}/>
          <Route path="/managecaterers" element={<Caterers/>}/>
          <Route path="/AddVenue" element={<AddVenue/>}/>
          <Route path="/UpdateVenue/:id" element={<UpdateVenue/>}/>
          <Route path="/AddCaterers" element={<AddCaterers/>}/>
          <Route path="/UpdateCaterer/:id" element={<UpdateCaterers/>}/>
          <Route path="/AddDecorer" element={<AddDecorer/>}/>
          <Route path="/UpdateDecorer/:id" element={<UpdateDecorer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;