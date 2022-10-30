import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "components/Layout/Layout";
import NoRegistration from "pages/NoRegistration";
import Admin from "pages/Admin";
import SysAdmin from "pages/SysAdmin";
import User from "pages/User";
import { ThemeProvider } from "@mui/material";
import theme from "theme";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<NoRegistration />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/sysadmin" element={<SysAdmin />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
