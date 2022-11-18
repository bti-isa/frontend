import useFetchData from "customHooks/fetchData";
import Loading from "components/Loading";
import AdminTable from "components/Admin/AdminTable";

const Admin = () => {
   const {data,loading} = useFetchData(`Admin/all`)
   return <>{loading ? <Loading /> : <AdminTable admins={data} />}</>;
}
 
export default Admin;