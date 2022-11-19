import { Box, Button, Paper, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { edit } from "../../redux/loginReducer";

function Loginn() {
    const [model, setModel] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let login = () => {
        console.log(model);

        dispatch(edit(model));
        navigate("/");
    };
    return (
        <>
            <Box
                sx={{
                    height: "50vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                className="bgLight"
            >
                <Paper sx={{ padding: 2 }}>
                    <h1>Login</h1>
                    <Box>
                        <Box sx={{ padding: 2 }}>
                            <TextField
                                type="email"
                                variant="standard"
                                placeholder="Email"
                                onChange={(e) => setModel({ ...model, email: e.target.value })}
                            />
                        </Box>
                        <Box sx={{ padding: 2 }}>
                            <TextField
                                variant="standard"
                                type="password"
                                placeholder="Password"
                                onChange={(e) => setModel({ ...model, password: e.target.value })}
                            />
                        </Box>
                        <Box sx={{ padding: 2 }}>
                            <Button onClick={login} variant="contained">Login</Button>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </>
    );
}

export default Loginn;
