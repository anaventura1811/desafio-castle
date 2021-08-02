import { Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';

function App() {
  return (
    <Switch>
      <Route to="/" component={Home} />
      <Route to="/cart" component={ Cart } />
    </Switch>
  );
}

export default App;
