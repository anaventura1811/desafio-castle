import { Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import { ToastContainer, toast } from 'react-toastify';
import CartContextProvider from './context/CartContextProvider';

toast.configure();

function App() {
  return (
    <Switch>
      <CartContextProvider>
        <Route to="/" component={Home} />
        <Route to="/cart" component={ Cart } />
        <ToastContainer autoclose={3000} />
      </CartContextProvider>
    </Switch>
  );
}

export default App;
