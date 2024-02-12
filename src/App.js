import Dashboard from "./Dashboard";
import Homepage from "./Homepage";
import Signin from "./Signin";
import Signup from "./Signup";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Homepage />} />
                    <Route exact path="/signup" element={<Signup />} />
                    <Route exact path="/signin" element={<Signin />} />
                    <Route exact path='/dashboard' element={<Dashboard />} />
                </Routes>

            </BrowserRouter>
        </>
    )
}


