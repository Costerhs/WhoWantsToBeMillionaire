import './App.css';
import { Route, Routes } from 'react-router-dom';
import Start from './components/Start';
import Game from './components/Game';
import Total from './components/Total';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/start" element={<Start />} />
        <Route path="/game" element={<Game />} />
        <Route path="/end" element={<Total />} />
      </Routes>
    </div>
  );
}

export default App;
