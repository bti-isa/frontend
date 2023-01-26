import jwt from "jwt-decode";
import useFetchData from "customHooks/fetchData";
import Loading from "components/Loading";
import AdminProfileComponent from "components/Admin/AdminProfileComponent";
import PatientProfile from "components/Patient/PatientProfile";

const ProfilePage = () => {
  const { data, loading } = useFetchData(
    `Patient/username1/${
      jwt(JSON.stringify(localStorage.getItem("token"))).sub
    }`
  );
  console.log(data);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="admin-profile-page">
          <PatientProfile data={data}></PatientProfile>
          <div>{data.penalties}</div>
        </div>
      )}
    </>
  );
};

export default ProfilePage;
