import ShowBBDetails from "components/BloodBank/ShowBBDetails";
import { useParams } from "react-router-dom";
import useFetchData from "customHooks/fetchData";
import Loading from "components/Loading";
const ShowBloodBank = () => {
  const params = useParams();
  const { data, loading } = useFetchData(`Appointment/bloodbank/${params.id}`);
  return <>{loading ? <Loading /> : <ShowBBDetails appointments={data} />}</>;
};

export default ShowBloodBank;
