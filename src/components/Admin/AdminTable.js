import { useState } from "react"
import { Link } from "react-router-dom"
import './AdminTable.css'

export const AdminTable = (props) =>{
    const [data, setData] = useState(props.admins)

    return(
        <div className="container">
        <h1>Admin Accounts</h1>
            <table className="table">
                <thead>
                    <tr className="tr">
                        <th className="th">First Name</th>
                        <th className="th">Last Name</th>
                        <th className="th">Email</th>
                        <th className="th">Update</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((admin)=>(
                        <tr className="tr" key={admin.id}>
                            <td className="td">{admin.firstname}</td>
                            <td className="td">{admin.lastname}</td>
                            <td className="td">{admin.email}</td>
                            <td className="td"><Link to={`/update-admin/${admin.id}`}>Update</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminTable