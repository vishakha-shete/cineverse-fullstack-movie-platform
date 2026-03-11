import { Route, Routes } from "react-router";
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Moviepage from "./pages/Moviepage";
import SignIn from "./pages/SingIn";
import SignUp from "./pages/SignUp";
import {Toaster} from "react-hot-toast"

const App = () => {
  return (
    <div className='bg-[#1b1b1b]'>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"/movie/:id"} element={<Moviepage />} />
        <Route path={"/signin"} element={<SignIn />} />
        <Route path={"/signup"} element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App
