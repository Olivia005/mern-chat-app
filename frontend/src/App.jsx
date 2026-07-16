import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
	const { authUser } = useAuthContext();
	return (
		<div className='h-screen bg-[#030305] overflow-hidden'>
			<Routes>
				<Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
			</Routes>
			<Toaster
				toastOptions={{
					style: {
						background: "#0f0f0a",
						color: "#fff",
						border: "1px solid rgba(251,191,36,0.2)",
						fontFamily: "Inter, system-ui, sans-serif",
						fontSize: "13px",
					},
				}}
			/>
		</div>
	);
}

export default App;
