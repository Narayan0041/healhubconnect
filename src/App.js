import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import GetReport from './Component/GetReportSection/GetReport';
import GetMedicine from './Component/Container.js/GetMedicine/GetMedicine';
import OneOnOne from './Component/OneonOneContainer/OneOnOne';

function App() {
  return (
    <>
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/getReport' element={<GetReport/> }/>
<Route path='/oneonone' element={<OneOnOne/> }/>
<Route path='/getMedicine' element={<GetMedicine/> }/>
    </Routes>
    </>
  );
}

export default App;
