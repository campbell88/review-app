import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ReviewBox from './components/ReviewBox';


function App() {
  return (
  <>
  <Router>
    <ReviewBox/>
      <Switch>
        <Route path='/' exact/>
      </Switch>
      </Router>
  </>
  );
}

export default App;
