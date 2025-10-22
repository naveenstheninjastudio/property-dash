import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  RouterProvider,
  Router,
} from "react-router-dom";
import Landing from "../pages/landing.jsx";

function App() {
  return (
    <div className="mainContainer">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
