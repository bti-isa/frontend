import UserHome from "components/User/UserHome";
import useFetchData from "customHooks/fetchData";
import Loading from "components/Loading";
import { Link } from "react-router-dom";
const User = () => {
  const { data, loading } = useFetchData(`BloodBank/all`);
  return <>
    <Link to={"/update-patient"}>
      UpdatePatient
    </Link>
    <Link to={"/poll"}>
      Poll
    </Link>
    {loading ? <Loading /> : <UserHome bloodBanks={data} />}
  </>;
};

export default User;
