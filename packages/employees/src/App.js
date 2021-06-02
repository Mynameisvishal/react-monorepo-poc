// import './App.css';
// import {Button} from "@poc/func-component"
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Employees from './pages/Employees';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    
    <Router>
        <Layout>
        <Switch>
          <Route path="/" exact component={ Home }/>
          <Route path="/employees" exact > <Employees />  </Route>
          <Route path="/about" exact component={ About } />
          <Route path="/contact" exact component={ Contact } />
          <Route path="*" exact component={ PageNotFound } />
          </Switch>
    </Layout>
      </Router>
      
  );
}

export default App;
