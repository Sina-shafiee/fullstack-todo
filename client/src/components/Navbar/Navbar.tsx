import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='container py-5'>
      <ul className='flex items-center justify-between'>
        <li>
          <NavLink to='/' className='text-2xl uppercase font-bold'>
            Todo App
          </NavLink>
        </li>
        <li>
          <NavLink
            className='text-lg'
            to='/create-todo'
            style={({ isActive }) =>
              isActive ? { color: 'rgb(122, 122, 255)' } : undefined
            }
          >
            Create
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
