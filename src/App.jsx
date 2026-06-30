// function app() : normal js function
// function App() : function treated as react component
// react draws everything inside return( " mix of js and html" )
// <> </> is react fragment, acts as an invisible box
//<Navbar/> is a way of calling Navbar component



import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import ProtectedRoute from "./routes/ProtectedRoute";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
              </ProtectedRoute>
            }/>

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;