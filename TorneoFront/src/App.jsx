import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing"
import Panel from "./components/Admin/Panel"
import Login from "./components/Admin/Login/Login"
import GroupManagement from "./components/Admin/GroupManagment";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      {/* Ruta protegida: solo los administradores pueden ver el Panel */}
      <Route
        path="/admin"
        element={
          // <ProtectedRoutes>
          <Login />
          // </ProtectedRoutes>
        }
      />

      <Route
        path="/panel/"
        element={
          // <ProtectedRoutes>
          <Panel />
          // </ProtectedRoutes>
        }
      />
      <Route
        path="/panel/grupos"
        element={
          // <ProtectedRoutes>
          <GroupManagement />
          // </ProtectedRoutes>
        }
      />
    </Routes>
  );
}

export default App;

