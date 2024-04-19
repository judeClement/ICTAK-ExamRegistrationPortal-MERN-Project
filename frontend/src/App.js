
import './App.css';
<<<<<<< HEAD
import SDash from './components/SDash'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    < div className="App">
     
      <Routes>
      <Route path={'/sdash'} element={<SDash/>} />
=======
import {Routes,Route} from 'react-router-dom';
import StudentLogin from './components/StudentLogin';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/studentlog' element={<StudentLogin/>}/>
>>>>>>> 7dc9dc16692c715ff168e3c81e2f65bb8690c602
      </Routes>
    </div>
  );
}

export default App;
