import { AppBar, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import ROUTES from "config/routes";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "store/auth-context";

const Navbar = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const navigate = useNavigate();
  const [isPatient, setIsPatient] = useState(false);

  useEffect(()=>{
    setIsPatient(authCtx.isPatient)
  },[])

  const handleLogout = () =>{
    authCtx.logout()
    navigate('/')
  }

  return (
    <AppBar>
      <Stack direction='row' sx={{ padding: '0.5rem' }}>
        <Link to={ROUTES.USER_PAGE}>
          <Button variant="contained" color="secondary" sx={{ marginLeft: '1rem' }}>
            User
          </Button>
        </Link>
        {!isPatient && <Link to={ROUTES.ADMIN_PAGE}>
          <Button variant="contained" color="secondary" sx={{ marginLeft: '1rem' }}>
            Admin
          </Button>
        </Link>}
        {!isPatient && <Link to={ROUTES.SYSADMIN_USERS}>
          <Button variant="contained" color="secondary" sx={{ marginLeft: '1rem' }}>
            Sys admin
          </Button>
        </Link>}
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
