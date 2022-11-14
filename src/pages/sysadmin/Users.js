import TemporaryNavigation from "components/SysAdmin/TemporaryNavigation";
import UserList from "components/UserList";
import Button from '@mui/material/Button'
import useFetchData from "customHooks/fetchData";
import Typography from '@mui/material/Typography'

const Users = () => {

    const { data, loading } = useFetchData(`User/all`)

    const handleTest = () => {
        console.log(data)
    }

    return (
        <>
            <Button variant="outlined" color="primary" onClick={handleTest}>
                Test
            </Button>
            <TemporaryNavigation />

            {loading ?
                <Typography variant="h6" color="initial">Loading..</Typography>
                :
                <UserList users={data} />
            }
        </>
    );
}

export default Users;