import { useEffect, useState } from "react";
import { getData } from "../config/firebasemethods";

function Courses() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData("courses")
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
            <h1>Courses</h1>
            <table>
                <tr>
                    <th>Course Name</th>
                    <th>Course Duration</th>
                    {/* <th>Assistant Trainers</th> */}
                    <th>Lead Trainer Id</th>
                </tr>
                <tbody>
                    {data && data.length > 0 ? data.map((x) => <tr>
                        <td>{x.courseName}</td>
                        <td>{x.courseDuration}</td>
                        {/* <td>{x.assistantTrainers}</td> */}
                        <td>{x.leadTrainerId}</td>
                    </tr>) : null}
                </tbody>
            </table>
            <h1>Results Update</h1>
            <table>
                <tr>
                    <th>Course Name</th>
                    
                </tr>
                <tbody>
                    {data && data.length > 0 ? data.map((x) => <tr>
                        <td>{x.courseName}</td>
                        
                    </tr>) : null}
                </tbody>
            </table>
        </>
    );
}
export default Courses;