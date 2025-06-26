import { Link } from 'react-router-dom';

const defaultLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/tasks', label: 'Tasks' },
  { to: '/api', label: 'API Data' },
];

function Footer({ links = defaultLinks, className = '' }) {
  return (
    <footer className={`py-4 px-4 sm:px-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gray-800 dark:to-gray-900 text-white dark:text-gray-100 rounded-b-xl shadow flex flex-col md:flex-row items-center justify-between mt-8 ${className}`}>
      <div className="flex gap-3 sm:gap-4 mb-2 md:mb-0 flex-wrap">
        {links.map(link => (
          <Link key={link.to} to={link.to} className="hover:underline transition-colors px-1 py-0.5 rounded hover:bg-white/20 dark:hover:bg-gray-700">
            {link.label}
          </Link>
        ))}
      </div>
      <div className="text-sm text-center md:text-right">&copy; {new Date().getFullYear()} UniqueApp. All rights reserved.</div>
    </footer>
  );
}

export default Footer; 