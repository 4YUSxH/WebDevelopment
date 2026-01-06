import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Navbar from './components/Navbar';
import Kodr from './pages/Kodr';
import Kodex from './pages/Kodex';
import AllCourses from './pages/AllCourses';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
       
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>

        {/* Nested Route one more way */}
        {/* Iss way se nested routing karne se courses page to dikhega hi uske sath sath kodr ye kodex according to URL wala page bhi dikhega and use < Outlet /> in parentt(courses) for accessing childrens */}
        <Route path='/courses' element={<Courses />}>
          <Route path='/courses' element={<AllCourses />}/>
          <Route path='/courses/kodr' element={<Kodr />}/>
          <Route path='/courses/kodex' element={<Kodex />}/>
        </ Route>

      </Routes>

      <Footer />
    </div>
  )
}

export default App
