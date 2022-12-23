import { Button, Container, TextField, Typography } from "@mui/material";
import axios from "axios";
import CONSTANTS from "constants/constants";
import { useState } from "react";
import theme from "theme";
import { axiosInstance } from "config/https";

const ComplaintComponent = ({ complaint, getData, setRefresh }) => {
    const [input, setInput] = useState("")

    const styles = {
        background: {
            backgroundColor: theme.palette.primary.main,
            marginBottom: '1rem',
            display: 'flex',
            padding: '0.4rem',
            borderRadius: '5px'
        }
    }

    const updateValue = (e) => {
        setInput(e.target.value)
    }

    const answer = () => {
        const dto = {
            answer: input,
            id: complaint.id
        }
        axiosInstance.patch(`${CONSTANTS.API}Complaint/answer`, dto)
        getData()
        window.location.reload()
    }

    return (
        <Container sx={styles.background}>
            <Container >
                <Container >
                    <Typography variant="h6" color="secondary">
                        {complaint.fullName} says:
                    </Typography>
                </Container>
                <Container >
                    <Typography variant="body1" color="secondary">
                        {complaint.text}
                    </Typography>
                </Container>
            </Container>

            {
                complaint.answer &&
                (
                    <Container>
                        <Container >
                            <Typography variant="h6" color="secondary">
                                Administrators answer:
                            </Typography>
                        </Container>
                        <Container >
                            {complaint.answer}
                        </Container>
                    </Container>)
            }
            {
                !complaint.answer &&
                (
                    <Container>
                        <Container >
                            <Typography variant="h6" color="secondary">
                                Administrators answer:
                            </Typography>
                        </Container>
                        <Container>
                            <TextField fullWidth multiline={true} minRows={10} onChange={updateValue}></TextField>
                        </Container>
                        <Container>
                            <Button variant="outlined" color="secondary" onClick={answer}>
                                Respond
                            </Button>
                        </Container>
                    </Container>
                )
            }
        </Container>
    );
}

export default ComplaintComponent;