import UserHome from "components/User/UserHome";
import useFetchData from "customHooks/fetchData";
import Loading from "components/Loading";
import { Link } from "react-router-dom";
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'

const User = () => {
  const { data, loading } = useFetchData(`BloodBank/all`);
  return <>
    <Container sx={{ display: 'flex', width: '100%', justifyContent: 'center', gap: '10px' }}>
      <Link to={"/update-patient"}>
        <Button variant="contained" color="primary">
          Update Patient
        </Button>
      </Link>
      <Link to={"/poll"}>
        <Button variant="contained" color="primary">
          Poll
        </Button>
      </Link>
    </Container>
    {loading ? <Loading /> : <UserHome bloodBanks={data} />}
  </>;
};

export default User;
