import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import MovieWatcht from './pages/MovieWatcht';
import privacy from './pages/Privacy';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/privacy' component={privacy} />
          <Route path='/moviewatcht' component={MovieWatcht} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
