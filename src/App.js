import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import MainPaige from "./Pages/MainPaige";
import EmployeesPage from "./Pages/EmployeesPage";
import PricePage from "./Pages/PricePage";
import ContactPage from "./Pages/ContactPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" exact element={<MainPaige/>}/>
        <Route path="/masters" exact element={<EmployeesPage/>}/>
        <Route path="/pricelist" exact element={<PricePage/>}/>
        <Route path="/contacts" exact element={<ContactPage/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
