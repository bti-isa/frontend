import { AdminTable } from "components/Admin/AdminTable";
import Loading from "components/Loading";
import useFetchData from "customHooks/fetchData";

const Admin = () => {
   const {data,loading} = useFetchData(`Admin/all`)
   return <>{loading ? <Loading /> : <AdminTable admins={data} />}</>;
}
 
export default Admin;