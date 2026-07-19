import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeEn from './pages/HomeEn';
import HomeFa from './pages/HomeFa';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <Router>
      <div className="bg-bg-darker text-text-light font-sans selection:bg-brand-blue/30 selection:text-white">
        <CustomCursor />
        <Routes>
          <Route path="/" element={<HomeEn />} />
          <Route path="/fa" element={<HomeFa />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
