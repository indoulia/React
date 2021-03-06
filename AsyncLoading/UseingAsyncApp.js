import React, { Component } from 'react';

import { Switch, Route, NavLink } from "react-router-dom";
import asyncComponent from './hoc/asyncComponent'

// import Courses from './containers/Courses/Courses';
// import Course from './containers/Course/Course';
// import Users from './containers/Users/Users';

const AsyncCources = asyncComponent(() => {
  return import('./containers/Courses/Courses')
})
const AsyncCource = asyncComponent(() => {
  return import('./containers/Course/Course')
})
const AsyncUsers = asyncComponent(() => {
  return import('./containers/Users/Users')
})

class App extends Component {
  render () {
    return (
      
      <div className="App">
        <ol style={{textAlign: 'left'}}>
          <li>Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)</li>
          <li>Add a simple navigation with two links => One leading to "Users", one leading to "Courses"</li>
          <li>Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)</li>
          <li>Pass the course ID to the "Course" page and output it there</li>
          <li>Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)</li>
          <li>Load the "Course" component as a nested component of "Courses"</li>
          <li>Add a 404 error page and render it for any unknown routes</li>
          <li>Redirect requests to /all-courses to /courses (=> Your "Courses" page)</li>
        </ol>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Users">Users</NavLink>
          </li>
          <li>
            <NavLink to="/Courses">Courses</NavLink>
          </li>
        </ul>
        <Switch> 
          <Route exact path="/Courses/:courseId">   
            <AsyncCource />           
          </Route>          
          <Route exact path="/Users" >    
            <AsyncUsers />                      
          </Route>
          <Route exact path="/Courses" >  
            <AsyncCources />                      
          </Route>            
          <Route exact path="/"> 
                <h1>Home Page</h1>
          </Route>
        </Switch>    
      </div>
      
    );
  }
}

export default App;
