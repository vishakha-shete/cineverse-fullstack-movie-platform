import { Route, Routes } from "react-router";
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Moviepage from "./pages/Moviepage";

const App = () => {
  return (
    <div className='bg-[#2c2c2c]'>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"/movie/:id"} element={<Moviepage />} />
      </Routes>
    </div>
  )
}

export default App
