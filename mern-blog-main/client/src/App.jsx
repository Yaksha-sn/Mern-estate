import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return <BrowserRouter >
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sign-in" element={<SignIn />} />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/about" element={<About />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/dashboard" element={<Dashboard/>} />
    <Route path="/projects" element={<Projects />} />



  </Routes>
  <Footer />
  
  </BrowserRouter>;
}
