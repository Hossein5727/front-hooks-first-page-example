import Home from './pages/home/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Watch from './pages/watch/Watch';
import Register from './pages/register/Register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/login/Login';


//
const LOVE = "npm i @testing-library/jest-dom"
//


function App() {
  return (
    <div >
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/watch" component={Watch} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
