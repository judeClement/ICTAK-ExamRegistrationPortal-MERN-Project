import './App.css';
import { Routes, Route } from 'react-router-dom';
import StudentLogin from './components/StudentLogin';
import SDash from './components/SDash';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/studentlog" element={<StudentLogin />} />
        <Route path="/sdash" element={<SDash />} />
      </Routes>
    </div>
  );
}

export default App;