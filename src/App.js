import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "components/Layout/Layout";
import NoRegistration from "pages/NoRegistration";
import Admin from "pages/Admin";
import Users from "pages/sysadmin/Users";
import User from "pages/User";
import { ThemeProvider } from "@mui/material";
import theme from "theme";
import NewManager from "pages/sysadmin/NewManager";
import UpdatePatient from "pages/patient/UpdatePatient";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<NoRegistration />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/sysadmin/users" element={<Users />} />
            <Route path="/sysadmin/new/manager" element={<NewManager />} />
            <Route path="/user" element={<User />} />
            <Route path="/update-patient" element={<UpdatePatient />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
