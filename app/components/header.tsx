'use client'

import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const [activePage, setActivePage] = useState('Home'); // Add this line

  const pages = ['Home', 'About', 'Products']; // Add this line

  return (
    <header className="fixed flex justify-between items-center px-7 py-2 top-0 bg-neutral-50 opacity-90 rounded-full w-3/4 m-auto mt-7 backdrop-filter backdrop-blur-md">
      <img src="/logo.png" alt="Logo" className="h-5 md:h-6 cursor-pointer" />
      <MenuIcon className="h-5 w-5 md:h-6 md:w-6 text-red-800 md:hidden" onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <div className="fixed inset-0 flex justify-end z-50">
          <div className="bg-white w-64 p-5 flex-shrink-0 font-mono text-neutral-700">
            <div className="flex justify-end"> {/* Use a div container for the button and apply justify-end */}
              <button onClick={() => setIsOpen(false)}>
                <XIcon className="h-6 w-6 text-red-800" /> 
              </button>
            </div>
            <ul className="pt-5 space-y-5">  {/* Add vertical space between li elements */}
            {pages.map(page => (
                <li
                  key={page}
                  className={page === activePage ? 'border-b-2 border-rose-200 pb-1 w-1/3' : ''}
                  onClick={() => setActivePage(page)}
                >
                  {page}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-black bg-opacity-50" onClick={() => setIsOpen(false)}></div>
        </div>
      )}
      <nav className="hidden md:block font-mono text-sm text-neutral-700 pr-5 cursor-pointer">
        <ul className="flex space-x-10">  {/* Increase space between li elements */}
          {pages.map(page => (
            <li
              key={page}
              className={page === activePage ? 'border-b-2 border-rose-200 pb-0.5' : ''}
              onClick={() => setActivePage(page)}
            >
              {page}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

