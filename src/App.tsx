import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  ErrorPage,
  Species,
  People,
  StarShip,
  PeopleDetails,
  SpeciesDetails,
  StarShipDetails,
} from "./pages";
import Sidebar from "./components/SideBar/SideBar";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/species" element={<Species />} />
          <Route path="/species/:id" element={<SpeciesDetails />} />
          <Route path="/people" element={<People />} />
          <Route path="/people/:id" element={<PeopleDetails />} />
          <Route path="/starships" element={<StarShip />} />
          <Route path="/starships/:id" element={<StarShipDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
