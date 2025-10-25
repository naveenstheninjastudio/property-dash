import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  RouterProvider,
  Router,
} from "react-router-dom";
import Landing from "../pages/landing.jsx";
import Properties from "../pages/properties";
import Tenants from "../pages/tenants";
import Payments from "../pages/payments";
import Settings from "../pages/settings";
import Homepage from "../pages/home.jsx";

function App() {
  return (
    <div className="flex h-screen w-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}>
            <Route index element={<Homepage />} />
            <Route path="properties" element={<Properties />} />
            <Route path="tenants" element={<Tenants />} />
            <Route path="payments" element={<Payments />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
