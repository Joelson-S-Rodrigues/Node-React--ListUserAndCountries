import React, {Fragment} from 'react';
import {  BrowserRouter as Router,
    Routes,
    Route,
    Link } from 'react-router-dom';
import DefaultButton from './components/defaultButton';
import Header from './components/Header/index';
import CountriesPage from './pages/Countries';
import Home from './pages/Home';


export default function RoutesPage() {
    
      
      function About() {
        return <h2>About</h2>;
      }
      
      function Users() {
        return <h2>Users</h2>;
      }
  return (
    <Router>
    <Fragment>
    <Header/> 
      <Routes>
        <Route exact path='/' element={<Home/>}>
        </Route>
        <Route exact path='/countries' element={<CountriesPage/>}/>
        {/* <Route exact path='/about' element={<About/>}/> */}

      </Routes>
    </Fragment>
  </Router>
  )

}