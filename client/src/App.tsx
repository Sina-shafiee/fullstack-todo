import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import CreateTodo from './pages/CreateTodo';
import EditTodo from './pages/EditTodo';
import Home from './pages/Home';

const App = () => {
  return (
    <div className='bg-gray-800 font-sans min-h-screen text-[#fefefe]'>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create-todo' element={<CreateTodo />} />
        <Route path='/:id/edit' element={<EditTodo />} />
      </Routes>
    </div>
  );
};

export default App;
