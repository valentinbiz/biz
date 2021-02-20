import './App.css';
import {  BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Homepage from './Pages/Homepage/Homepage';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import projectList from './Components/Lists/ProjectList';

function App() {
  return (
    <Router>
    <Header />
    <Footer />
    <div className="App">
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/about' component={About} />
        <Route exact path='/projects' render={props => projectList.map(proj => <Projects {...props} item={proj} />)} />
      </Switch>
    </div>
    
    </Router>
  );
}

export default App;
