import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home';
import DefaultLayout from './components/DefaultLayout';
import SimpleLayout from './components/SimpleLayout';
import Login from './pages/login/Login';

function App() {
  return (
    <>
      {/* <Header/> */}
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<DefaultLayout><Home /></DefaultLayout>} />
          <Route path='/login' element={<SimpleLayout><Login /></SimpleLayout>} />

        </Routes>
      </BrowserRouter>
      {/* <Footer/> */}
    </>
  );
}

export default App;