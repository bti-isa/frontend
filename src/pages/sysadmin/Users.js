import TemporaryNavigation from "components/SysAdmin/TemporaryNavigation";
import UserList from "components/UserList";
import useFetchData from "customHooks/fetchData";
import Loading from "components/Loading";

const Users = () => {
  const { data, loading } = useFetchData(`Patient/all`)  //custom hook for fetching any data, just add the part after api/ as param
  return (
    <>
      {loading ?
        <Loading />
        :
        <UserList users={data} />
      }
    </>
  );
}

export default Users;
