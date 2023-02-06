import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import  Login  from './auth/Login';
import Register from './auth/Register';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/' element={<Navigate to="/dashboard" replace/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
