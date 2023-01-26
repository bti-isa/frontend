import { Container } from '@mui/material';
import Button from '@mui/material/Button'
import { axiosInstance } from 'config/https';
import CONSTANTS from 'constants/constants';
import { useState } from 'react';


const Test = () => {
    let id;

    const test = () => {
        axiosInstance.get(`${CONSTANTS.API}BloodBank/${id}`)
        .then((res) => {
            console.log(res.data)
        })
    }

    const handleChange = (e) => {
        id = e.target.value
    }

    return (
        <Container sx={{ width: '100%', height: '800px', display: 'grid', placeItems: 'center' }}>
            <Container >
                <input type="text" onChange={handleChange}></input>
                <Button variant="text" color="primary" onClick={test}>
                    Test me
                </Button>
            </Container>
        </Container>
    );
}

export default Test;