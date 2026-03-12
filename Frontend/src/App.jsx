import { Route, Routes } from "react-router";
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Moviepage from "./pages/Moviepage";
import SignIn from "./pages/SingIn";
import SignUp from "./pages/SignUp";
import { Toaster } from "react-hot-toast"
import { useEffect } from "react";
import { useAuthStore } from "./store/authStore";
import AIRecommendations from "./pages/AIRecommendations";

const App = () => {
  const {fetchUser, fetchingUser} = useAuthStore();

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  if (fetchingUser) {
    return <p className="text-[#e50914]">Loading...</p>
  }


  return (
    <div className='bg-[#1b1b1b]'>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"/movie/:id"} element={<Moviepage />} />
        <Route path={"/signin"} element={<SignIn />} />
        <Route path={"/signup"} element={<SignUp />} />
        <Route path={"/ai-recommendations"} element={<AIRecommendations />} />      
      </Routes>
    </div>
  )
}

export default App
