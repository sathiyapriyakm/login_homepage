import {Route, Routes,Navigate } from 'react-router-dom';
import './App.css';
import { Login } from './Login';
import { NotFound } from './NotFound';
import { DropDownComponent } from './DropDownComponent';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/DropDownComponent" element={<DropDownComponent/>}/>
      <Route path="/" element={<Navigate replace to="/Login"/>}/>
      <Route path="/404-Page" element={<NotFound/>}/>
      <Route path="*" element={<Navigate replace to="/404-Page"/>}/>
      </Routes>
      
    </div>
  );
}

export default App;


