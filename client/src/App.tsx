import { Route, Routes } from 'react-router';
import './App.scss';
import Footer from './components/Header/Footer/Footer';
import Header from './components/Header/Header';
import ToDoList from './components/ToDoList';
import { Login } from './components/pages/Auth/Login/Login';
import { Register } from './components/pages/Auth/Register/Register';
import { Home } from './components/pages/Home/Home';
import { Create } from './components/pages/Admin/Create/Create';
import { Edit } from './components/pages/Admin/Edit/Edit';
import { Details } from './components/pages/Details/Details';
import { AuthProvider } from './contexts/AuthContext';

function App() {
    return (
        <AuthProvider>
            <Header></Header>
            <main className='site-content'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/create' element={<Create />} />
                    <Route path='/edit/:id' element={<Edit />} />
                    <Route path='/details/:id' element={<Details />} />
                    <Route path='/todo' element={<ToDoList />} />
                    <Route path='/*' element={<Home />} />
                </Routes>
            </main>
            <Footer></Footer>
        </AuthProvider>
    );
}

export default App;