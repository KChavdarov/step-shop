import './App.scss';
import Footer from './components/Header/Footer/Footer';
import Header from './components/Header/Header';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <>
      <Header></Header>
      <main className='site-content'>
        <div>Hello World</div>
        <ToDoList></ToDoList>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;