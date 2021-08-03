import { Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import { ToastContainer, toast } from 'react-toastify';

toast.configure();

function App() {
  return (
    <>
    	<ToastContainer
				position='top-center'
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={ Cart } />
      </Switch>
    </>
  );
}

export default App;
