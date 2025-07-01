import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-8">
      <nav className="mb-8 flex gap-4">
        <Link to="/" className="text-blue-700 font-bold hover:underline">Home</Link>
        <Link to="/about" className="text-blue-700 font-bold hover:underline">About</Link>
      </nav>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <Outlet />
      </div>
    </div>
  );
}

export default App;