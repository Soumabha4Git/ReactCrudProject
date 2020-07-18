import React from 'react';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';



import '../node_modules/bootstrap/dist/css/bootstrap.css'


import Navbar from './component/Navbar';
import Create from './component/Create';
import Update from './component/Update';
import Delete from './component/Delete';
import List from './component/List';
import Confirm from './component/Confirm';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
            <Switch>
               <Route exact path = "/" component = {List} />
               <Route path = "/viewAllCourses" component = {List} />
               <Route path = "/addCourses" component = {Create} />
               <Route path = "/editCourses" component = {Update} />
               <Route path = "/removeCourses" component = {Delete} />
               <Route path = "/confirmCourses" component = {Confirm} />
            </Switch>
      </div>
    </Router>
  );
}

export default App;
