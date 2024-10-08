import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import { useEffect } from "react";
import { fetchAllQuestions } from "./actions/question";
import { useDispatch } from "react-redux";
import { fetchAllUsers } from "./actions/users";
import LeftSidebar from "./components/Navbar/LeftSidebar/LeftSidebar";
import { Leftbar } from "./components/Navbar/Leftbar/Leftbar";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <LeftSidebar /> */}
        {/* <Leftbar /> */}
        <AllRoutes />
      </Router>
    </div>
  );
}

export default App;
