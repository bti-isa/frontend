import { AppBar, Divider, Stack, Toolbar } from "@mui/material";
import Button from "@mui/material/Button";
import TemporaryNavigation from "components/SysAdmin/TemporaryNavigation";
import ROUTES from "config/routes";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "store/auth-context";

const Navbar = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const navigate = useNavigate();
  const [isPatient, setIsPatient] = useState(false);
  const [isInstituteAdmin, setIsInstituteAdmin] = useState(false);
  const [isSystemAdmin, setIsSystemAdmin] = useState(false);

  useEffect(() => {
    setIsPatient(authCtx.isPatient);
    setIsInstituteAdmin(authCtx.isInstituteAdmin);
    setIsSystemAdmin(authCtx.isSystemAdmin);
  }, []);

  const handleLogout = () => {
    authCtx.logout();
    navigate("/");
  };

  return (
    <AppBar>
      <Stack
        direction="row"
        sx={{ padding: "0.5rem", justifyContent: "center" }}
      >
        {isInstituteAdmin && (
          <Toolbar
            sx={{
              justifyContent: "center",
              margin: "0.5rem 0",
              minHeight: "1rem !important",
            }}
          >
            <Link to={ROUTES.INSTITUTE_ADMIN_CALENDAR}>
              <Button variant="text" color="secondary">
                Work Calendar
              </Button>
            </Link>
            <Divider orientation="vertical" flexItem />
            <Button variant="text" color="secondary" onClick={handleLogout}>
              Logout
            </Button>
          </Toolbar>
        )}
        {isPatient && (
          <Toolbar
            sx={{
              justifyContent: "center",
              margin: "0.5rem 0",
              minHeight: "1rem !important",
            }}
          >
            <Link to={ROUTES.USER_PAGE}>
              <Button variant="text" color="secondary">
                Home
              </Button>
            </Link>
            <Divider orientation="vertical" flexItem />
            <Link to={ROUTES.USER_UPDATE_PATIENT}>
              <Button variant="text" color="secondary">
                Update Patient
              </Button>
            </Link>
            <Divider orientation="vertical" flexItem />
            <Link to={ROUTES.USER_POLL}>
              <Button variant="text" color="secondary">
                Poll
              </Button>
            </Link>
            <Divider orientation="vertical" flexItem />
            <Link to={ROUTES.USER_SCHEDULE_APPOINTMENT}>
              <Button variant="text" color="secondary">
                Schedule appointment
              </Button>
            </Link>
            <Divider orientation="vertical" flexItem />
            <Link to={ROUTES.USER_SHOW_APPOINTMENT}>
              <Button variant="text" color="secondary">
                Appointment
              </Button>
            </Link>
            <Divider orientation="vertical" flexItem />
            <Link to={ROUTES.COMPLAINTS}>
              <Button variant="text" color="secondary">
                Complaint
              </Button>
            </Link>
            <Divider orientation="vertical" flexItem />
            <Button variant="text" color="secondary" onClick={handleLogout}>
              Logout
            </Button>
          </Toolbar>
        )}
        {isSystemAdmin && <TemporaryNavigation handleLogout={handleLogout} />}
      </Stack>
    </AppBar>
  );
};

export default Navbar;
