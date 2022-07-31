import {
  BrowserRouter as Router, Route, Link, Switch
} from 'react-router-dom';
import Routes from './routes';

function App() {

  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to='/'> Home Page </Link>
          </li>
          <li>
            <Link to='/dashboard'>DashBoard Page</Link>
          </li>
        </ul>
      </div>
      <Switch>
        {Routes.map((route, index) => {
          return(
            <Route key={index} exact={route.exact} path={route.path}  component={route.main}/>
          )
        })}
      </Switch>
    </Router>
  );
}

export default App;
