import AdminBloodBankProfileComponent from "components/Admin/AdminBloodBankProfileComponent";
import Loading from "components/Loading";
import useFetchData from "customHooks/fetchData";
import classes from "./BloodBankProfilePage.module.css";

const BloodBankProfilePage = () => {
  const { data, loading } = useFetchData(`BloodBank/get-by-admin/2`);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={classes["bank-profile-page"]}>
          <AdminBloodBankProfileComponent data={data} />
        </div>
      )}
    </>
  );
};

export default BloodBankProfilePage;
