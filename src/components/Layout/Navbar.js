import { AppBar, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import ROUTES from "config/routes";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <AppBar>
      <Stack direction='row' sx={{padding: '0.5rem'}}>
        <Link to={ROUTES.HOME_PAGE}>
          <Button variant="contained" color="secondary" sx={{marginLeft: '1rem'}}>
            No reg
          </Button>
        </Link>
        <Link to={ROUTES.USER_PAGE}>
          <Button variant="contained" color="secondary" sx={{marginLeft: '1rem'}}>
            User
          </Button>
        </Link>
        <Link to={ROUTES.ADMIN_PAGE}>
          <Button variant="contained" color="secondary" sx={{marginLeft: '1rem'}}>
            Admin
          </Button>
        </Link>
        <Link to={ROUTES.SYSADMIN_PAGE}>
          <Button variant="contained" color="secondary" sx={{marginLeft: '1rem'}}>
            Sys admin
          </Button>
        </Link>
      </Stack>
    </AppBar>
  );
};

export default Navbar;
