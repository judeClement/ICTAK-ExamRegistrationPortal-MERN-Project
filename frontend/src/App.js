
import './App.css';
import SDash from './components/SDash'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    < div className="App">
     
      <Routes>
      <Route path={'/sdash'} element={<SDash/>} />
      </Routes>
    </div>
  );
}

export default App;
