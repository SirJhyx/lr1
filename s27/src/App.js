import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import './App.css';

/*components*/
import AppNavBar from './Components/AppNavBar'

/*Pages*/
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Courses from './Pages/Courses'

export default function App() {
  return (
    <Router>
      <AppNavBar />
      <Routes>
        <Route path="/home" element ={<Home />}/>
        <Route path="/login" element ={<Login />}/>
        <Route path="/register" element = {<Register />} />
        <Route path="/courses" element = {<Courses />} />
      </Routes>
    </Router>
  );
}
