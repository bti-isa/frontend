import { AppBar, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import ROUTES from "config/routes";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "store/auth-context";

const Navbar = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const navigate = useNavigate();

  const handleLogout = () =>{
    authCtx.logout()
    navigate('/')
  }

  return (
    <AppBar>
      <Stack direction='row' sx={{ padding: '0.5rem' }}>
        <Link to={ROUTES.HOME_PAGE}>
          <Button variant="contained" color="secondary" sx={{ marginLeft: '1rem' }}>
            No reg
          </Button>
        </Link>
        <Link to={ROUTES.USER_PAGE}>
          <Button variant="contained" color="secondary" sx={{ marginLeft: '1rem' }}>
            User
          </Button>
        </Link>
        <Link to={ROUTES.ADMIN_PAGE}>
          <Button variant="contained" color="secondary" sx={{ marginLeft: '1rem' }}>
            Admin
          </Button>
        </Link>
        <Link to={ROUTES.SYSADMIN_USERS}>
          <Button variant="contained" color="secondary" sx={{ marginLeft: '1rem' }}>
            Sys admin
          </Button>
        </Link>
       {isLoggedIn && <Link to="/" onClick={handleLogout}>
          <Button variant="contained" color="secondary" sx={{ marginLeft: '1rem' }}>
            Logout
          </Button>
        </Link>}
      </Stack>
    </AppBar>
  );
};

export default Navbar;
