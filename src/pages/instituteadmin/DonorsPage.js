import BloodBankDonors from "components/BloodBank/BloodBankDonors";
import Loading from "components/Loading";
import useFetchData from "customHooks/fetchData";
import jwtDecode from "jwt-decode";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "store/auth-context";
import "./DonorsPage.css";

const DonorsPage = () => {
  const params = useParams();
  const authCtx = useContext(AuthContext);
  const { data, loading } = useFetchData(
    `BloodBank/registered-donors/${jwtDecode(authCtx.token).sub}`
  );
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="page">
          <BloodBankDonors donors={data} />
        </div>
      )}
    </>
  );
};

export default DonorsPage;
