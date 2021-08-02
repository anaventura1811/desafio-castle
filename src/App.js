import { Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import { ToastContainer, toast } from 'react-toastify';

toast.configure();

function App() {
  return (
    <Switch>
      <Route to="/" component={Home} />
      <Route to="/cart" component={ Cart } />
      <ToastContainer autoclose={3000} />
    </Switch>
  );
}

export default App;
