import AdminBloodBankProfileComponent from "components/Admin/AdminBloodBankProfileComponent";
import AdminProfileComponent from "components/Admin/AdminProfileComponent";
import Loading from "components/Loading";
import useFetchData from "customHooks/fetchData";
import "./AdminProfilePage.css";

const AdminProfilePage = () => {
  const adminData = useFetchData(`Admin/2`).data;
  const { data, loading } = useFetchData(`BloodBank/get-by-admin/2`);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="admin-profile-page">
          <div className="admin-profile-page-left">
            <AdminProfileComponent data={adminData} />
          </div>
          <div className="admin-profile-page-right">
            <AdminBloodBankProfileComponent data={data} />
          </div>
        </div>
      )}
    </>
  );
};

export default AdminProfilePage;
