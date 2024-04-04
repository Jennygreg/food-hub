import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Routes, Route} from 'react-router-dom';




function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route exact path="/home" element={<Home/>} />
    <Route exact path="/signin" element={<Signin/>}/>
    <Route exact path ="/menu" element={<Menu/>}/>
    </Routes> 
    
    </div>
  );
}
export default App;
