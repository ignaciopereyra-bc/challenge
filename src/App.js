import './App.css'
import { 
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Details from './components/Details'

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/Home" element={<Home />} />
            <Route path="/" element={<NotFound />} />
            <Route exact path="/Details" element={<Details />} />
          </Routes>
      </div>
    </Router>
  );
} 

export default App;
