import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Home, Info, Search } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Book className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">3D Terms</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link to="/search" className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600">
              <Search className="h-5 w-5" />
              <span>Search</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600">
              <Info className="h-5 w-5" />
              <span>About</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}