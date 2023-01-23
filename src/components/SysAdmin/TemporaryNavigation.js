import { Toolbar, Button, Divider } from "@mui/material";
import ROUTES from "config/routes";
import { Link } from "react-router-dom";

const TemporaryNavigation = ({handleLogout}) => {
    return (
        <>
            <Toolbar sx={{ justifyContent: 'center', margin: '0.5rem 0', minHeight: '1rem !important' }}>
                <Link to={ROUTES.SYSADMIN_USERS}>
                    <Button variant="text" color="secondary">
                        Users list
                    </Button>
                </Link>
                <Divider orientation="vertical" flexItem />
                <Link to={ROUTES.SYSADMIN_NEW_MANAGER}>
                    <Button variant="text" color="secondary">
                        Add new manager/center
                    </Button>
                </Link>
                <Divider orientation="vertical" flexItem />
                <Link to={ROUTES.SYSADMIN_COMPLAINTS}>
                    <Button variant="text" color="secondary">
                        Complaints
                    </Button>
                </Link>
                <Divider orientation="vertical" flexItem />
                <Link to={ROUTES.SYSADMIN_NEW_SYSTEM_ADMIN}>
                    <Button variant="text" color="secondary">
                        Add new system admin
                    </Button>
                </Link>
                <Divider orientation="vertical" flexItem />
                    <Button variant="text" color="secondary" onClick={handleLogout}>
                        Logout
                    </Button>
            </Toolbar>
        </>
    );
}

export default TemporaryNavigation;