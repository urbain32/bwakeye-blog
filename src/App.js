import './App.css';
import Home from './Home';
import Create from './Create';
import NavBar from './NavBar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import BlogDetails from './BlogDetails';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <Router>
      <div className='container'>
        <NavBar />
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
            <Route path='/blogs/:id'>
              <BlogDetails />
            </Route>
            <Route path='*'>
              <PageNotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
