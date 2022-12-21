import axios from "axios";
import ComplaintComponent from "components/SysAdmin/Complaint";
import { useEffect } from "react";
import Button from '@mui/material/Button'
import { useState } from "react";
import CONSTANTS from "constants/constants";
import Container from '@mui/material/Container'
import { Toolbar, Typography } from "@mui/material";
import TemporaryNavigation from "components/SysAdmin/TemporaryNavigation";

const Complaints = () => {
    const [pending, setPending] = useState([])
    const [showPending, setShowPending] = useState(true);
    const [refresh, setRefresh] = useState(0)

    useEffect(() => {
        getData('pending')
    }, [])

    const getData = (type) => {
        axios.get(`${CONSTANTS.API}Complaint/${type}`).then((response) => {
            setPending(response.data)
            //setRefresh((value) => value+1)
        })
    }

    const changeView = () => {
        (showPending === true) ? getData('answered') : getData('pending')
        setShowPending(!showPending)
    }

    const getPending = () => {
        getData('pending')
    }

    return (
        <>
            <TemporaryNavigation />
            <Toolbar sx={{ justifyContent: 'center', marginBottom: '1rem', minHeight: '1rem !important' }}>
                <Typography variant="h6" color="initial">
                    These are
                    <Button variant="contained" color="primary" sx={{margin : '0rem 0.5rem'}} onClick={changeView}>
                        {showPending ? "Pending" : "Answered"}
                    </Button>
                    complaints
                </Typography>
            </Toolbar>
            <Container sx={{ display: 'flex', flexDirection: 'column' }}>
                {pending && pending.map((complaint) =>
                    (<ComplaintComponent setRefresh={setRefresh} getData={getPending} complaint={complaint} key={complaint.id} />))}
            </Container>
        </>
    );
}

export default Complaints;