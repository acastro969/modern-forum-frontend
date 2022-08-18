import './App.scss';
import { Link, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import SignUp from './pages/LogIn/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Help from './pages/Help/Help';

function App() {
  return (
    <div className='app'>
      <header>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/sign-up'>Sign Up</Link>
            </li>
            <li>
              <Link to='/sign-in'>Sign In</Link>
            </li>
            <li>
              <Link to='/help'>Help</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' exact element={<Dashboard />} />
        <Route path='/sign-up' exact element={<SignUp />} />
        <Route path='/sign-in' exact element={<SignIn />} />
        <Route path='/help' exact element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;
