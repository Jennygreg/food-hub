import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import {Home} from './components/Home.js';




function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route exact path="/home" element={<Home/>} />
    <Route exact path="/signin" element={<Home/>}/>
    <Route exact path ="/menu" element={<Home/>}/>
    </Routes> 
    
    </div>
  );
}
export default App;
