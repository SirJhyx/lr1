import {useState, useEffect} from 'react';
import {Container} from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import { UserProvider } from './UserContext';

/*components*/
import AppNavBar from './Components/AppNavBar'

/*Pages*/
import Home from './Pages/Home'
import Login from './Pages/Login'
import Logout from './Pages/Logout'  
import Register from './Pages/Register'
import ErrorPage from './Pages/Error'
import Courses from './Pages/Courses'
import CourseView from './Pages/CourseView'

export default function App() {

  /*

    Remember: 
    React Context is nothing but a global state to the app.
    It is a way to make a particular data available to all components no matter how they are nested. Context helps broadcast the data and changes happening to that data to all components.
  
  */

  let token = localStorage.getItem("token")

  //global state
  const [user, setUser] = useState({
    id:null,
    isAdmin:null
  })

  //function for clearing localStorage on logout 
  const unsetUser = () => {
    localStorage.clear();

    setUser({
      id:null,
      isAdmin:null
    })
  }


  useEffect( () => {

    fetch('http://localhost:4000/api/users/details', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    }).catch (err => {
      console.log(err)
    })
    .then (data => {
      try {
        if (typeof data._id !== "undefined"){
          setUser({
            id: data._id,
            isAdmin: data.isAdmin
          })
        }
      }
      catch (e) {
        console.log('Something went wrong', e)
      }
    })
  }, [])


  return (
      <UserProvider value={{user, setUser,unsetUser}}>

        <BrowserRouter>

          <AppNavBar />
          <Container fluid className = "m-3">
            <Routes>
              <Route exact path = "/" component ={Home}/>
              <Route exact path = "/courses" component ={Courses}/>
              <Route exact path = "/courses/:courseId" component ={CourseView}/>
              <Route exact path = "/register" component ={Register}/>
              <Route exact path = "/login" component ={Login}/>
              <Route exact path = "/logout" component ={Logout}/>
              <Route component ={ErrorPage}/>
            </Routes>
          </Container>
        
        </BrowserRouter>

      </UserProvider>
      
  );
}
