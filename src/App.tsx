import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Strategy from './pages/Strategy';
import Villagers from './pages/Villagers';
import Seasons from './pages/Seasons';
import Calendar from './pages/Calendar';
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex space-x-4 items-center">
                <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
                <Link to="/strategy" className="text-gray-700 hover:text-gray-900">Strategy</Link>
                <Link to="/villagers" className="text-gray-700 hover:text-gray-900">Villagers</Link>
                <Link to="/seasons" className="text-gray-700 hover:text-gray-900">Seasons</Link>
                <Link to="/calendar" className="text-gray-700 hover:text-gray-900">Calendar</Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/strategy" element={<Strategy />} />
            <Route path="/villagers" element={<Villagers />} />
            <Route path="/seasons" element={<Seasons />} />
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
