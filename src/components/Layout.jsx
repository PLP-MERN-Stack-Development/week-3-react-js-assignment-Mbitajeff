import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { ThemeProvider, useTheme } from '../utils/ThemeContext';

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/tasks', label: 'Tasks' },
  { to: '/api', label: 'API Data' },
  { to: '/contact', label: 'Contact' }, // Example custom link
];

function LayoutInner() {
  const { theme } = useTheme();
  return (
    <div className={
      `min-h-screen flex flex-col bg-gradient-to-br from-blue-100 to-purple-200 dark:from-gray-900 dark:to-gray-800 transition-colors`
    }>
      <Navbar links={navLinks} />
      <main className="flex-1 p-4 md:p-8">
        <Outlet />
      </main>
      <Footer links={navLinks} />
    </div>
  );
}

function Layout() {
  return (
    <ThemeProvider>
      <LayoutInner />
    </ThemeProvider>
  );
}

export default Layout; 