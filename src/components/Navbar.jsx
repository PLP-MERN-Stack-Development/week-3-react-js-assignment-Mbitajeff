import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../utils/ThemeContext';

const defaultLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/tasks', label: 'Tasks' },
  { to: '/api', label: 'API Data' },
];

function Navbar({ links = defaultLinks, className = '' }) {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className={`flex flex-col sm:flex-row items-center justify-between py-4 px-4 sm:px-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gray-800 dark:to-gray-900 shadow text-white dark:text-gray-100 rounded-t-xl ${className}`}>
      <Link to="/" className="text-2xl font-bold tracking-tight mb-2 sm:mb-0 transition-colors dark:text-purple-200">UniqueApp</Link>
      <div className="flex gap-4 sm:gap-6 items-center flex-wrap">
        {links.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) =>
              `transition-colors duration-200 px-1 py-0.5 rounded ${isActive ? 'underline font-semibold' : 'hover:bg-white/20 dark:hover:bg-gray-700'}`
            }
          >
            {link.label}
          </NavLink>
        ))}
        <button
          onClick={toggleTheme}
          className="ml-2 px-3 py-1 rounded bg-white/20 hover:bg-white/30 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors text-sm font-semibold border border-white/30 dark:border-gray-600"
          title="Toggle theme"
        >
          {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar; 