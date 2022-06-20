import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Home from './Components/Home';
import Signin from './Components/Signin';
import Movies from './Components/Movies';
import Notfound from './Components/Notfound';
import Moviesstate from './Context/Moviesstate';
import Test from './Components/Test';
import UserProfile from './Components/UserProfile';
import ProfileUpdate from './Components/ProfileUpdate';
import Signup from './Components/Signup';
import MovieDetails from './Components/MovieDetails';
import PRouterRenderAfterLogin from './protected_route/ProtectedRouter';
import ProtectedRouteNotRenderAfterLogin from './protected_route/ProtectedRouteNotLogin';
import Subscription from './Components/Subscription';


function App() {
  
  return (
    <Router>
      <Moviesstate>
        <div className="App">
         
          <Routes>
            <Route exact path='/' element={<ProtectedRouteNotRenderAfterLogin Component={Home} />} />
            <Route exact path='/login' element={<ProtectedRouteNotRenderAfterLogin  Component={Signin} />} />
            <Route exact path='/signup' element={<ProtectedRouteNotRenderAfterLogin Component={Signup} />} />
            <Route exact path='/movies' element={<PRouterRenderAfterLogin Component={Movies} /> } />
            <Route exact path='/movies_details/:name/:id' element={<PRouterRenderAfterLogin Component={MovieDetails} />} />
            <Route exact path='/profile' element={<PRouterRenderAfterLogin Component={UserProfile} />} />
            <Route exact path='/profile_update/:id' element={<PRouterRenderAfterLogin Component={ProfileUpdate} />} />
            <Route exact path='/user/subscription_plan' element={<PRouterRenderAfterLogin Component={Subscription} />} />

            <Route exact path='/test' element={<Test />} />
            <Route exact path='*' element={<Notfound />} />
          </Routes>
        </div>
      </Moviesstate>
    </Router>
  );
}

export default App;
