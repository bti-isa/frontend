import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
import UpdateAdmin from "components/Admin/UpdateAdmin";
import UpdateBloodBank from "components/BloodBank/UpdateBloodBank";
import WithoutNav from "components/Layout/WithoutNav";
import "react-toastify/dist/ReactToastify.css";
import Complaints from "pages/sysadmin/Complaints";
import CalendarPage from "pages/instituteadmin/CalendarPage";
import NewAdmin from "pages/sysadmin/NewAdmin";
import "react-toastify/dist/ReactToastify.css";
import AuthPage from "pages/auth/AuthPage";
import { useContext } from "react";
import AuthContext from "store/auth-context";
import NotFound from "pages/error/NotFound";
import ShowBloodBank from "pages/show-bloodbank/ShowBloodBank";
import ScheduleAppointment from "pages/patient/ScheduleAppointment";
import ShowAppointment from "components/Patient/ShowAppointment";
import CreateComplaints from "pages/patient/CreateComplaints";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          {!authCtx.isLoggedIn && (
            <Route element={<WithoutNav />}>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/registration" element={<NoRegistration />} />
              <Route path="/auth" element={<AuthPage />} />
            </Route>
          )}
          {authCtx.isLoggedIn && (
            <Route element={<Layout />}>
              <Route path="/admin" element={<Admin />} />
              <Route path="/show-bloodbank/:id" element={<ShowBloodBank />} />
              <Route path="/show-appointment" element={<ShowAppointment />} />
              <Route path="/sysadmin/users" element={<Users />} />
              <Route path="/sysadmin/new/manager" element={<NewManager />} />
              <Route path="/user" element={<User />} />
              <Route path="/update-patient" element={<UpdatePatient />} />
              <Route
                path="/update-bloodbank/:bloodBankId"
                element={<UpdateBloodBank />}
              />
              <Route path="/update-admin/:adminId" element={<UpdateAdmin />} />
              <Route path="/poll" element={<Poll />} />
              <Route
                path="/schedule-appointment"
                element={<ScheduleAppointment />}
              />
              <Route path="/sysadmin/complaints" element={<Complaints />} />
              <Route path="/admin/calendar" element={<CalendarPage />} />
              <Route path="/sysadmin/new/admin" element={<NewAdmin />} />
              <Route path="/complaints" element={<CreateComplaints />} />
            </Route>
          )}

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
