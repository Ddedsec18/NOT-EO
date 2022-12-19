import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import './assets/admin/css/styles.css';
import './assets/admin/js/scripts';

import Header from './components/Dashboard/Header';
import Navbar from './components/Layouts/Navbar';

import HeaderStudent from './components/Student/HeaderStudent';
import AddStudent from "./components/Student/AddStudent";
import EditStudent from "./components/Student/EditStudent";
import DetailStudent from './components/Student/DetailStudent';

import ModuleHeader from './components/Module/ModuleHeader';
import DetailModule from './components/Module/DetailModule';
import AddModule from './components/Module/AddModule';
import EditModule from './components/Module/EditModule';

import ListTeacher from './components/Teacher/ListTeacher';
import AddTeacher from './components/Teacher/AddTeacher';
import EditTeacher from './components/Teacher/EditTeacher';

import Marks from './components/Mark/Marks';
// import MarksExcel from './components/Mark/MarksExcel';

export default function App() {
  return (
    
    <div>
      <Navbar/>
    <Router>
      <div>
        <Routes>
          {/* Route for students and marks*/}
            <Route path="/" element={<Header/>}/>
            <Route path='/student' element={<HeaderStudent/>} />
            <Route path="/addStudent" element={<AddStudent/>}/>      
            <Route path="/editStudent/:id" element={<EditStudent/>}/> 
            <Route path="/detailStudent/:id" element={<DetailStudent/>}/>    
            <Route path="/mark" element={<Marks/>}/>     
            {/* <Route path="/mark" element={<MarksExcel/>}/>     */}
                   
          {/* Route for  modules*/}
            <Route path='/module' element={<ModuleHeader/>} />
            <Route path='/detailModule/:id' element={<DetailModule/>} />
            <Route path="/addModule" element={<AddModule/>}/>      
            <Route path="/editModule/:id" element={<EditModule/>}/>        

          {/* Route for teachers */}
            <Route path='/teacher' element={<ListTeacher/>} />
            <Route path="/addTeacher" element={<AddTeacher/>}/>      
            <Route path="/editTeacher" element={<EditTeacher/>}/>        

        </Routes>
      </div>
    </Router>
    
    
        </div>
  );
}