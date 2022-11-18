import { useState } from "react"
import { Link } from "react-router-dom"

export const AdminTable = (props) =>{
    console.log(props.admins)
    const [data,setData] = useState(props.admins)
    console.log(data)

    const handleUpdate=(id)=>{
        console.log(id)
    }

    return(
        <div className={"admin-table"}>
        <h1>Admin Accounts</h1>
            <table className={"admin-table-container"}>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((admin)=>(
                        <tr key={admin.id}>
                            <td>{admin.firstname}</td>
                            <td>{admin.lastname}</td>
                            <td>{admin.email}</td>
                            <td><Link className="btn" to={`/admin-detail/${admin.id}`}>Details</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}