import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import CustomCursor from './components/CustomCursor';

const HomeEn = lazy(() => import('./pages/HomeEn'));
const HomeFa = lazy(() => import('./pages/HomeFa'));

function App() {
  return (
    <Router>
      <div className="bg-bg-darker text-text-light font-sans selection:bg-brand-blue/30 selection:text-white">
        <CustomCursor />
        <Suspense fallback={
          <div className="h-screen w-full bg-bg-darker flex flex-col items-center justify-center gap-4">
            <div className="w-12 h-12 border-4 border-brand-blue border-t-transparent rounded-full animate-spin shadow-[0_0_15px_rgba(0,240,255,0.5)]"></div>
            <p className="text-brand-blue font-medium tracking-widest text-sm animate-pulse drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]">LOADING...</p>
          </div>
        }>
          <Routes>
            <Route path="/" element={<HomeEn />} />
            <Route path="/fa" element={<HomeFa />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
