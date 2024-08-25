import { Link } from "react-router-dom"


const Navbar = () => {
  return (
   <>
         <nav className="w-full text-white p-4 flex flex-row justify-between items-center bg-purple-300">
        <img src="/" alt="logo" className="h-5" />
        <div>
          <ul className="flex flex-row gap-10">
            <Link to="/"><li className="hover:text-gray-300 cursor-pointer transition-colors">Home</li></Link>
            <Link to="/about"><li className="hover:text-gray-300 cursor-pointer transition-colors">About</li></Link>
            <Link to="/contact"><li className="hover:text-gray-300 cursor-pointer transition-colors">Contact</li></Link>
          </ul>
        </div>
        <Link to="/signup"> <button className="relative inline-flex items-center px-6 py-3 text-white font-semibold bg-cyan-500 border-2 border-cyan-500 rounded-full overflow-hidden group ripple transition-all duration-300 ease-in-out hover:bg-cyan-400">
          Signup/Login 
        </button> </Link>
      </nav>
   </>
  )
}

export default Navbar
