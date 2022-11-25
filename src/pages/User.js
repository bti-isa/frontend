import UserHome from "components/User/UserHome";
import useFetchData from "customHooks/fetchData";
import Loading from "components/Loading";
import { Link } from "react-router-dom";
const User = () => {
  return (
    <>
      <Link to={"/update-patient"}>UpdatePatient</Link>
      <Link to={"/poll"}>Poll</Link>
      <UserHome />
    </>
  );
};

export default User;
