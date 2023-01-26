import AdminBloodBankProfileComponent from "components/Admin/AdminBloodBankProfileComponent";
import AdminProfileComponent from "components/Admin/AdminProfileComponent";
import Loading from "components/Loading";
import useFetchData from "customHooks/fetchData";
import "./AdminProfilePage.css";

const AdminProfilePage = () => {
  const { data, loading } = useFetchData(`Admin/2`);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="admin-profile-page">
          <AdminProfileComponent data={data} />
        </div>
      )}
    </>
  );
};

export default AdminProfilePage;
