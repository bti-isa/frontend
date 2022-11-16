import UserHome from "components/User/UserHome";
import useFetchData from "customHooks/fetchData";
import Loading from "components/Loading";
const User = () => {
  const { data, loading } = useFetchData(`BloodBank/all`);
  return <>{loading ? <Loading /> : <UserHome bloodBanks={data} />}</>;
};

export default User;
