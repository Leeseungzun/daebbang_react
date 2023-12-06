import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import TopForm from './pages/commons/TopForm';
import Home from './pages/Home/Home';
import Board from './pages/Board/Board';
import Admin from './pages/Admin/Admin';
import EstateCreate from './pages/EstateManage/EstateCreate';
import Login from './pages/Login/Login';
import Enrollment from './pages/Enrollment/Enrollment';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <TopForm />
        <div className='body_form'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home/*" element={<Home />} />
          <Route path="/board/*" element={<Board />} />
          <Route path="/estateManage/*" element={<EstateCreate />} />
          <Route path="/login/*" element={<Login/>} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/enrollment/*" element={<Enrollment />} />
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
