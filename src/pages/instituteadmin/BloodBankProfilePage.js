import AdminBloodBankProfileComponent from "components/Admin/AdminBloodBankProfileComponent";
import Loading from "components/Loading";
import useFetchData from "customHooks/fetchData";
import jwtDecode from "jwt-decode";
import { useContext } from "react";
import AuthContext from "store/auth-context";
import classes from "./BloodBankProfilePage.module.css";

const BloodBankProfilePage = () => {
  const authCtx = useContext(AuthContext);
  const { data, loading } = useFetchData(
    `BloodBank/get-by-admin/${jwtDecode(authCtx.token).sub}`
  );
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
