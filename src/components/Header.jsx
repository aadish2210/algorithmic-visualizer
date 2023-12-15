import { Link } from "react-router-dom"
import { motion } from "framer-motion"
const Header = () => {

  return (
    <div>
      <nav className="nav nav-pills nav-fill m-5 text-2xl font-semibold ">
      <Link className="nav-item nav-link hover:active" to="/bubbleSort"><motion.p  initial={{ opacity: 0.6 }} whileHover={{ scale: 1.2,transition: { duration: 0.25 },}} whileTap={{ scale: 0.9 }} whileInView={{ opacity: 1 }}>Bubble Sort</motion.p></Link>
      <Link className="nav-item nav-link hover:active" to="/insertionSort"><motion.p  initial={{ opacity: 0.6 }} whileHover={{ scale: 1.2,transition: { duration: 0.25 },}} whileTap={{ scale: 0.9 }} whileInView={{ opacity: 1 }}>Insertion Sort</motion.p></Link>
      <Link className="nav-item nav-link hover:active" to="/selectionSort"><motion.p  initial={{ opacity: 0.6 }} whileHover={{ scale: 1.2,transition: { duration: 0.25 },}} whileTap={{ scale: 0.9 }} whileInView={{ opacity: 1 }}>Selection Sort</motion.p></Link>
      </nav>
      <div className="flex h-[50vh] items-center justify-center ">
      <div>
      <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-[60px] text-transparent  bg-clip-text bg-gradient-to-r from-pink-500 to-black"> Algorithmic Visualizer
      </h1>
      </div>
      </div>
      </div>
  )
}

export default Header