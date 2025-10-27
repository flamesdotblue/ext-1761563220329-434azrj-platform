import React from 'react';
import { Rocket } from 'lucide-react';

const NavBar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10">
            <Rocket className="h-5 w-5 text-orange-400" />
          </div>
          <span className="text-lg font-semibold tracking-tight">Hello Bot</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <a href="#features" className="transition hover:text-white">Features</a>
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </nav>
        <a
          href="#get-started"
          className="ml-4 rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-black transition hover:bg-orange-400"
        >
          Get Started
        </a>
      </div>
    </header>
  );
};

export default NavBar;
