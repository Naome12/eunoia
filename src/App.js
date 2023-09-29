import './App.css';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact'
import Services from './components/Services'
import Page from './components/Page'
import Trust from './components/Trust';
function App() {
  return (
    <Router>
      <div>
        <Home/>
        <Trust/>
        <About/>
        <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path='/services' exact component={Services}/>
        <Route path="/contact" exact component={Contact} />
        <Route path='/page' exact component={Page}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
