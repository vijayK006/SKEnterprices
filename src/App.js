import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import WhyChoose from './Pages/WhyChoose';
import Industries from './Pages/Industries';
import Our_Products from './Pages/Our_Products';
import End_to_End_Solution from './Pages/End_to_End_Solution';
import DesignDevelop from './Pages/DesignDevelop';
import Turnkey_Project from './Pages/Turnkey_Project';
import SupplyOfEquipments from './Pages/SupplyOfEquipments';
import Installation_And_Commissioning from './Pages/Installation_And_Commissioning';


function App() {
  return (
    <BrowserRouter>
<Routes>
<Route exact path='/' element={<Home />} />
<Route exact path='/WhyChoose' element={<WhyChoose />} />
<Route exact path='/Industries' element={<Industries />} />
<Route exact path='/Our_Products' element={<Our_Products />} />
<Route exact path='/End_to_End_Solution' element={<End_to_End_Solution />} />
<Route exact path='/DesignDevelop' element={<DesignDevelop />} />
<Route exact path='/Turnkey_Project' element={<Turnkey_Project />} />
<Route exact path='/SupplyOfEquipments' element={<SupplyOfEquipments />} />
<Route exact path='/Installation_And_Commissioning' element={<Installation_And_Commissioning />} />




</Routes>
    </BrowserRouter>
  );
}

export default App;
