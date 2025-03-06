import { Route, Routes } from 'react-router';
import './App.scss';
import Footer from './components/Header/Footer/Footer';
import Header from './components/Header/Header';
import ToDoList from './components/ToDoList';
import { Login } from './components/pages/Login/Login';
import { Register } from './components/pages/Register/Register';
import { Home } from './components/pages/Home/Home';

function App() {
    return (
        <>
            <Header></Header>
            <main className='site-content'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/todo' element={<ToDoList />} />
                    <Route path='/*' element={<Home />} />
                </Routes>
            </main>
            <Footer></Footer>
        </>
    );
}

export default App;