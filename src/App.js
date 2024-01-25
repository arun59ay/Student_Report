import React from 'react';
import Home from './page/home';
import { Route, Routes, Navigate } from 'react-router-dom';
import StudentInfo from './page/studentInfo';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace={true} />} />
      <Route path="/home" element={<Home/>} />
      <Route path="/student-info" element={<StudentInfo/>} />
    </Routes>
  )
}

export default App

