import Admin from './Components/Admin';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/js/src/collapse";
import {  Routes, Route,  } from 'react-router-dom';
import Addpublisher from './Components/Addpublisher';
import Addauthor from './Components/Addauthor'
function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<Admin />} />
        <Route path="/addpublisher" element={<Addpublisher />} />
        <Route path='/addauthor' element={<Addauthor/>}/>
      </Routes>
    </div>
  );
}

export default App;
