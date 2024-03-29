import HomePage from './views/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
