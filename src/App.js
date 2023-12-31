import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Home from "./components/Dashboard/Home";
import ProtectedRoute from "./libs/ProtectedRoute";
import Register from "./components/Auth/Register";
import ProjectManagement from "./components/Dashboard/ProjectManagement";
import { useContext } from "react";
import { User } from "./libs/context/UserContext";
import Loader from "./components/Loader";

function App() {
  const { loading } = useContext(User);
  return (
    <BrowserRouter>
      <Loader />
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route element={<Home />} path={"/"} exact />
          <Route
            element={<ProjectManagement />}
            path={"/projectManagement"}
            exact
          />
        </Route>
        <Route element={<Login />} path={"/login"} exact />
        <Route element={<Register />} path={"/register"} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
