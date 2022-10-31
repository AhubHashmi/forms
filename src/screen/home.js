import { Button, Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SMInput from "../config/components/SMInput";
import SMSelect from "../config/components/SMSelect";
import { sendData } from "../config/firebasemethods";

function Home() {
  const params = useParams();
  const [txt, setTxt] = useState("");
  const [model, setModel] = useState({});
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();


  // useEffect(() => {
  //   checkUser()
  //     .then((res) => {
  //       console.log(res);
  //       if (params.id == res) {
  //         setUserId(res);
  //         // sendData(
  //         //   {
  //         //     txt: txt,
  //         //     time: new Date(),
  //         //     userId: res,
  //         //   },
  //         //   `todos/${res}`
  //         // ).then((res) => {
  //         //   console.log(res)
  //         // }).catch((res) => {
  //         //   console.log(res)
  //         // })
  //       } else {
  //         navigate("/login");
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const addStudent = () => {
    sendData(model, `students/`)
      .then((success) => {
        console.log(success);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let fillModel = (key, val) => {
    model[key] = val;
    setModel({ ...model });

    console.log(model);
  };

  return (
    <>
      <h1>Registration Form</h1>
      <Box sx={{ padding: 2 }}>
        <Grid spacing={2} container>
          <Grid item md={4}>
            <SMInput required={true} label='First Name' value={model.firstName} onChange={(e) => fillModel('firstName', e.target.value)} />
          </Grid>
          <Grid item md={4}>
            <SMInput label='Last Name' value={model.lastName} onChange={(e) => fillModel('lastName', e.target.value)} />
          </Grid>
          <Grid item md={4}>
            <SMSelect
              required={true}
              label="Course"
              onChange={(e) => fillModel('course', e.target.value)}
              datasource={[
                {
                  id: "wm",
                  fullName: "Web And Mobile",
                },
              ]}
            />
          </Grid>
          <Grid item md={4}>
            <SMSelect
              required={true}
              label="Section"
              onChange={(e) => fillModel('sec', e.target.value)}
              datasource={[
                {
                  id: "a",
                  fullName: "A",
                },
                {
                  id: "b",
                  fullName: "B",
                },
              ]}
            />
          </Grid>
          <Grid item md={4}>
            <SMInput required={true} label='Contact' value={model.contactName} onChange={(e) => fillModel('contactName', e.target.value)} />
          </Grid>
          <Grid item md={4}>
            <SMInput required={true} label='CNIC' value={model.cnicName} onChange={(e) => fillModel('cnicName', e.target.value)} />
          </Grid>
          <Grid item md={4}>
            <SMInput required={true} label='Father Name' value={model.fatherName} onChange={(e) => fillModel('fatherName', e.target.value)} />
          </Grid>
          <Grid item md={4}>
            <SMInput label='Father CNIC' value={model.fatherCnic} onChange={(e) => fillModel('fatherCnic', e.target.value)} />
          </Grid>
          <Grid item md={4}>
            <SMInput required={true} label='Father Contact' value={model.fatherContact} onChange={(e) => fillModel('fatherContact', e.target.value)} />
          </Grid>
          <Grid item md={4}>
            <SMInput required={true} label='Emergency Contact' value={model.emergencyContact} onChange={(e) => fillModel('emergencyContact', e.target.value)} />
          </Grid>
        </Grid>

      </Box>

      <Button variant="contained" onClick={addStudent}>Submit</Button>
    </>
  );
}
export default Home;
