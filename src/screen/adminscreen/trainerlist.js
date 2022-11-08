import { useEffect, useState } from "react";
import { getData } from "../../config/firebasemethods";


function Trainerlist() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData("trainerlist")
            .then((res) => {
                console.log(res);
                setData(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <>
            <h1>Trainers</h1>
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>CNIC</th>
                    <th>Qualification</th>
                    <th>Other Qualifications</th>
                    <th>Contact</th>
                    <th>Courses Allowed</th>
                </tr>
                <tbody>
                    {data && data.length > 0
                        ? data.map((x) => (
                            <tr>
                                <td>{x.firstName}</td>
                                <td>{x.lastName}</td>
                                <td>{x.cnic}</td>
                                <td>{x.qualification}</td>
                                <td>{x.otherQualifications}</td>
                                <td>{x.contact}</td>
                                <td>{x.coursesAllowed}</td>
                            </tr>
                        ))
                        : null}
                </tbody>
            </table>
        </>
    );
}
export default Trainerlist;