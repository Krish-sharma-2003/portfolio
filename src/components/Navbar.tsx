// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Moon, Sun, Menu, X, User } from 'lucide-react';
// import { useTheme } from '../contexts/ThemeContext';

// const Navbar: React.FC = () => {
//   const { theme, toggleTheme } = useTheme();
//   const location = useLocation();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navigation = [
//     { name: 'Home', path: '/' },
//     { name: 'About', path: '/about' },
//     { name: 'Projects', path: '/projects' },
//     { name: 'Skills', path: '/skills' },
//     { name: 'Contact', path: '/contact' },
//     { name: 'Resume', path: '/resume' },
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   return (
//     <nav className="fixed top-0 w-full z-50 bg-black border-b border-zinc-800">
//       <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-2 text-white font-semibold">
//           <User className="w-7 h-7" />
//           Krish
//         </Link>

//         {/* Desktop */}
//         <div className="hidden md:flex items-center gap-8">
//           {navigation.map((item) => (
//             <Link
//               key={item.name}
//               to={item.path}
//               className={`text-sm transition ${
//                 isActive(item.path)
//                   ? 'text-white'
//                   : 'text-zinc-400 hover:text-white'
//               }`}
//             >
//               {item.name}
//             </Link>
//           ))}

//           <button
//             onClick={toggleTheme}
//             className="p-2 border border-zinc-700 rounded-md text-zinc-600 hover:text-white"
//           >
//             {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
//           </button>
//         </div>

//         {/* Mobile */}
//         <div className="md:hidden flex gap-3">
//           <button
//             onClick={toggleTheme}
//             className="p-2 border border-zinc-700 rounded-md text-zinc-600 hover:text-white"
//           >
//             {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
//           </button>
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="p-2 border border-zinc-700 rounded-md text-zinc-600 hover:text-white"
//           >
//             {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-black border-t border-zinc-800 px-4 py-4 space-y-3">
//           {navigation.map((item) => (
//             <Link
//               key={item.name}
//               to={item.path}
//               onClick={() => setIsMenuOpen(false)}
//               className={`block ${
//                 isActive(item.path)
//                   ? 'text-white'
//                   : 'text-zinc-400'
//               }`}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Moon, Sun, Menu, X, User } from 'lucide-react';
// import { useTheme } from '../contexts/ThemeContext';

// const Navbar: React.FC = () => {
//   const { theme, toggleTheme } = useTheme();
//   const location = useLocation();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navigation = [
//     { name: 'Home', path: '/' },
//     { name: 'About', path: '/about' },
//     { name: 'Projects', path: '/projects' },
//     { name: 'Skills', path: '/skills' },
//     { name: 'Contact', path: '/contact' },
//     { name: 'Resume', path: '/resume' },
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   return (
//     <nav className="fixed top-0 w-full z-50 bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-zinc-800/80">
//       <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
//         {/* Logo */}
//         <Link 
//           to="/" 
//           className="flex items-center gap-3 text-white font-semibold text-xl tracking-tighter group"
//         >
//           <div className="w-8 h-8 rounded-2xl bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
//             <User className="w-5 h-5 text-white" />
//           </div>
//           <span className="group-hover:text-purple-400 transition-colors duration-300">Krish</span>
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center gap-10">
//           {navigation.map((item) => (
//             <Link
//               key={item.name}
//               to={item.path}
//               className={`relative text-sm uppercase tracking-widest font-medium transition-all duration-300 
//                 ${isActive(item.path)
//                   ? 'text-white'
//                   : 'text-zinc-400 hover:text-white hover:scale-105'
//                 }`}
//             >
//               {item.name}
//               {isActive(item.path) && (
//                 <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-gradient-to-r from-purple-400 to-blue-400 rounded-full" />
//               )}
//             </Link>
//           ))}

//           {/* Theme Toggle */}
//           <button
//             onClick={toggleTheme}
//             className="p-3 rounded-2xl border border-zinc-700 hover:border-purple-500/50 text-zinc-400 hover:text-white hover:bg-zinc-900/50 transition-all duration-300"
//             aria-label="Toggle theme"
//           >
//             {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex items-center gap-3">
//           <button
//             onClick={toggleTheme}
//             className="p-3 rounded-2xl border border-zinc-700 hover:border-purple-500/50 text-zinc-400 hover:text-white transition-all"
//           >
//             {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
//           </button>

//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="p-3 rounded-2xl border border-zinc-700 hover:border-purple-500/50 text-zinc-400 hover:text-white transition-all"
//           >
//             {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-[#0a0a0f] border-t border-zinc-800 py-8 px-6 space-y-6 text-center">
//           {navigation.map((item) => (
//             <Link
//               key={item.name}
//               to={item.path}
//               onClick={() => setIsMenuOpen(false)}
//               className={`block text-lg font-medium transition-all ${
//                 isActive(item.path)
//                   ? 'text-white'
//                   : 'text-zinc-400 hover:text-white'
//               }`}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;






import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
    { name: 'Resume', path: '/resume' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-3 text-white font-semibold text-xl tracking-tighter group"
        >
          <div className="w-8 h-8 rounded-2xl bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <span className="group-hover:text-purple-400 transition-colors">Krish</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`relative text-sm uppercase tracking-widest font-medium transition-all duration-300 
                ${isActive(item.path)
                  ? 'text-white'
                  : 'text-zinc-400 hover:text-white'
                }`}
            >
              {item.name}
              {isActive(item.path) && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-3 text-zinc-400 hover:text-white transition-all"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0a0a0f] border-t border-zinc-800 py-8 px-6 space-y-6 text-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={`block text-lg font-medium transition-all ${
                isActive(item.path) ? 'text-white' : 'text-zinc-400'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;