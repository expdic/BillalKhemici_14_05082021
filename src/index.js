import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/header'
import Footer from './components/footer'
import NewEmployeePage from './pages/newEmployee';
import { Provider } from "react-redux";
import storage from "./redux/storage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeesList from './pages/employeeList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Provider store={storage}>
      <Header />
      <Router>
        <Routes>
          <Route path='/' index element={<NewEmployeePage />}>
          </Route>
          <Route path='/employee-list' element={<EmployeesList />}>
          </Route>
         </Routes>
      </Router>
      <Footer />
      
    </Provider>

    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
