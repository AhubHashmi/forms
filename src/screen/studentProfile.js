import { Box, Button, Container, Divider, Grid, Paper, Typography } from "@mui/material";
import IMAGE from '../assets/ahub.jpg';
import Avatar from '@mui/material/Avatar';
import { useEffect, useState } from "react";
import { getData } from "../config/firebasemethods";


function StudentProfile() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData("students")
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
            <div
                style={{
                    width: "100%",
                    minHeight: "100vh",
                    height: "100%",
                    magin: 0,
                }}
                className="bgLight"
            >
                <Container>
                    <Grid container>
                        <Grid sx={{ padding: 1 }} md={3} item>
                            {data && data.length > 0
                                ? data.map((x) => (
                                    <Paper sx={{ padding: 2, textAlign: "center" }}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Avatar
                                                alt="Remy Sharp"
                                                src={IMAGE}
                                                sx={{ width: 100, height: 100 }}
                                            />
                                        </Box>
                                        <Box>
                                            <Typography variant="h5">Muhammad Ahub Hashmi</Typography>
                                            <Box sx={{ padding: 2 }}>
                                                <Typography sx={{ fontWeight: "bold" }}>
                                                    Course:
                                                </Typography>
                                                {x.course}
                                            </Box>
                                            <Divider />
                                        </Box>
                                        <Box sx={{ padding: 2 }}>
                                            <Typography sx={{ fontWeight: "bold" }}>
                                                Father Name:
                                            </Typography>
                                            {x.fatherName}
                                        </Box>
                                        <Divider />
                                        <Box sx={{ padding: 2 }}>
                                            <Typography sx={{ fontWeight: "bold" }}>
                                                CNIC:
                                            </Typography>
                                            {x.cnic}
                                        </Box>

                                        <Divider />
                                        <Box sx={{ padding: 2 }}>
                                            <Typography sx={{ fontWeight: "bold" }}>
                                                Contact:
                                            </Typography>
                                            {x.contactName}
                                        </Box>
                                        <Divider />
                                        <Box sx={{ padding: 4 }}>
                                            <Button variant="contained">Logout</Button>
                                        </Box>
                                    </Paper>)) : null}
                        </Grid>
                        <Grid sx={{ padding: 1 }} md={9} item>
                            <Paper sx={{ padding: 2 }}>
                                <Typography>Result</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}
export default StudentProfile;