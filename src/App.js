import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "components/Layout/Layout";
import NoRegistration from "pages/NoRegistration";
import Admin from "pages/Admin";
import Users from "pages/sysadmin/Users";
import User from "pages/User";
import { ThemeProvider } from "@mui/material";
import theme from "theme";
import NewCenter from "pages/sysadmin/NewCenter";
import NewManager from "pages/sysadmin/NewManager";

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
            <Route path="/sysadmin/new/center" element={<NewCenter />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
