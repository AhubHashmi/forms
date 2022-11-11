import { Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box } from "@mui/system";
import SMInput from "../config/components/SMInput";
import SMSelect from "../config/components/SMSelect";
import { sendData } from "../config/firebasemethods";

function Form() {
    const [model, setModel] = useState({});

    const addFC = () => {
        console.log(model);
        sendData(model, `formcontrol/`)
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
            <h1>Form Control</h1>
            <Box sx={{ padding: 2 }}>
                <Grid spacing={2} container>
                    <Grid item md={4}>
                        <SMInput
                            required={true}
                            label="Is Form Open"
                            value={model.isFormOpen}
                            onChange={(e) => setModel({ ...model, isFormOpen: e.target.value })}
                        />
                    </Grid>
                    <Grid item md={4}>
                        <SMInput
                            required={true}
                            label="Open In Cities"
                            value={model.openInCities}
                            onChange={(e) => fillModel("openInCities", e.target.value)}
                        />
                    </Grid>
                    <Grid item md={4}>
                        <SMSelect
                            required={true}
                            label="Course"
                            onChange={(e) => fillModel("course", e.target.value)}
                            datasource={[
                                {
                                    id: "wm",
                                    fullName: "Web And Mobile",
                                },
                                {
                                    id: "gd",
                                    fullName: "Graphic Designing",
                                },
                            ]}
                        />
                    </Grid>
                    <Grid item md={4}>
                        <SMInput
                            label="Date Of Admission Start"
                            value={model.dateOfAdmissionStart}
                            onChange={(e) => fillModel("dateOfAdmissionStart", e.target.value)}
                        />
                    </Grid>
                    <Grid item md={4}>
                        <SMInput
                            required={true}
                            label="Date Of Admission End"
                            value={model.dateOfAdmissionEnd}
                            onChange={(e) => fillModel("dateOfAdmissionEnd", e.target.value)}
                        />
                    </Grid>
                </Grid>
            </Box>

            <Button variant="contained" onClick={addFC}>
                Submit
            </Button>
        </>
    );
}
export default Form;
