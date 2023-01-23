import UserHome from "components/User/UserHome";
import useFetchData from "customHooks/fetchData";
import Loading from "components/Loading";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const User = () => {
  return (
    <>
      {/* <Container
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          gap: "10px",
        }}
      >
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
        <Link to={"/schedule-appointment"}>
          <Button variant="contained" color="primary">
            Schedule appointment
          </Button>
        </Link>
        <Link to={"/show-appointment"}>
          <Button variant="contained" color="primary">
            Appointment
          </Button>
        </Link>
      </Container> */}
      <UserHome />
    </>
  );
};

export default User;
