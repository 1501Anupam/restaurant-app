import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RestaurantList from "./components/RestaurantList/RestaurantList";
import RestaurantDetails from "./components/RestaurantDetails/RestaurantDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<RestaurantList />}></Route>
          <Route exact path="/:id" element={<RestaurantDetails />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
