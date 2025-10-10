import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Portal from './pages/Portal';
import Flashcards from './pages/Flashcards';
import LocalSEO from './pages/LocalSEO';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/flashcards/:category" element={<Flashcards />} />
        <Route path="/local-seo" element={<LocalSEO />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
