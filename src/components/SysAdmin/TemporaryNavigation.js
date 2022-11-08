import { Toolbar, Button, Divider } from "@mui/material";
import ROUTES from "config/routes";
import { Link } from "react-router-dom";

const TemporaryNavigation = () => {
    return (
        <>
            <Toolbar sx={{ justifyContent: 'center', marginBottom: '1rem', minHeight: '1rem !important' }}>
                <Link to={ROUTES.SYSADMIN_USERS}>
                    <Button variant="text" color="primary">
                        Users list
                    </Button>
                </Link>
                <Divider orientation="vertical" flexItem />
                <Link to={ROUTES.SYSADMIN_NEW_CENTER}>
                    <Button variant="text" color="primary">
                        Add new center
                    </Button>
                </Link>
                <Divider orientation="vertical" flexItem />
                <Link to={ROUTES.SYSADMIN_NEW_MANAGER}>
                    <Button variant="text" color="primary">
                        Add new manager
                    </Button>
                </Link>
            </Toolbar>
        </>
    );
}

export default TemporaryNavigation;