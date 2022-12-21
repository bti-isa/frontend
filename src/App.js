import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import Layout from "components/Layout/Layout";
import NoRegistration from "pages/NoRegistration";
import Admin from "pages/Admin";
import Users from "pages/sysadmin/Users";
import User from "pages/User";
import Poll from "components/Poll/Poll";
import theme from "theme";
import NewManager from "pages/sysadmin/NewManager";
import UpdatePatient from "pages/patient/UpdatePatient";
import WelcomePage from "pages/welcome/Welcome";
import 'react-toastify/dist/ReactToastify.css';
import WithoutNav from "components/Layout/WithoutNav";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
          <Routes>
            <Route element={<WithoutNav />}>
              <Route path="/" element={<WelcomePage />} />
            </Route>
            <Route element={<Layout />}>
              <Route path="/home" element={<NoRegistration />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/sysadmin/users" element={<Users />} />
              <Route path="/sysadmin/new/manager" element={<NewManager />} />
              <Route path="/user" element={<User />} />
              <Route path="/update-patient" element={<UpdatePatient />} />
              <Route path="/poll" element={<Poll />} />  
            </Route>
          </Routes>
      </Router>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
