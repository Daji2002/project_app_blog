import Header from "./header/Header";
import Home from "./page/home/Home";
import Login from "./page/login/Login";
import Register from "./page/register/Register";
import Single from "./page/single/Single";
import Sitting from "./page/sittings/Sitting";
import Write from "./page/write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";

function App() {
  const user = false;
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/register" element={user?<Home/>:<Register/>}/>
        <Route path="/login" element={user?<Home/>:<Login/>}/>
        <Route path="/write" element={user?<Write/>:<Register/>}/>
        <Route path="/sittings" element={user?<Sitting/>:<Register/>}/>
        <Route path="/post/:postId" element={<Single/>}/>
        <Route path="/about" element={<Sidebar/>}/>
      </Routes>
    </Router>
  );
}

export default App;
