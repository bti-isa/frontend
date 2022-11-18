import CONSTANTS from "constants/constants";
import { Button } from "@mui/material";
import { Container } from "@mui/system";
import { Form } from 'react-final-form';
import { useState, useEffect } from "react";
import REGEX from "constants/regex";
import axios from "axios";
import FormBackground from "components/SysAdmin/FormBackground";
import UpdateAdminForm from "./UpdateAdminForm";
import { useParams } from "react-router-dom";

const useFetchData = (path) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [address, setAddress] = useState({});
    const [location, setLocation] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(`${CONSTANTS.API}${path}`);
                setData(response);
                setAddress(response.address);
                setLocation(response.address.location);
            } catch (error) {
                console.error(error)
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    return {
        data,
        address,
        location,
        loading,
    };
};


const UpdateAdmin = () =>{
    const numberRegex = new RegExp(REGEX.NUMBER);
    const params = useParams()
    const { data, address, location, loading } = useFetchData("Admin/" + params.adminId);
    console.log(data, address, location, loading)

    const validate = (values) => {
    let returnObject = {}
        if (!values.firstname) {
            returnObject.firstname = 'This field is required!'
        }
        if (!values.lastname) {
            returnObject.lastname = 'This field is required!'
        }
        if (!numberRegex.test(values.jmbg)) {
            returnObject.jmbg = 'Numerical characters only!'
        }
        if (!values.gender) {
            returnObject.gender = 'This field is required'
        }
        if (!values.street) {
            returnObject.street = 'This field is required'
        }
        if (!numberRegex.test(values.number)) {
            returnObject.number = 'Numerical characters only!'
        }
        if (!values.city) {
            returnObject.city = 'This field is required'
        }
        if (!numberRegex.test(values.postalCode)) {
            returnObject.postalCode = 'Numerical characters only!'
        }
        if (!values.country) {
            returnObject.country = 'This field is required'
        }
        if (!values.phoneNumber) {
            returnObject.phoneNumber = 'This field is required'
        }

        return returnObject
    }
    
    const onSubmit = async (values) =>{
        const updateAdminDTO = {
            id: data.id,
            deleted : false,
            accountActivated: true,
            firstname: values.firstname,
            lastname: values.lastname,
            email: values.email,
            phoneNumber: values.phoneNumber,
            jmbg: values.jmbg,
            gender: values.gender,
            bloodBankId : 1,
            address: {
                id: address.id,
                city: values.city,
                street: values.street,
                country: values.country,
                number: values.number,
                postalCode: values.postalCode,
                locationId: location.id,
                longitude: values.longitude,
                latitude: values.latitude
            }
        }
    
         const update = async () => {
            try {
                const { } = await axios.put(`${CONSTANTS.API}Admin/update`, updateAdminDTO);
                console.info("User successfully updated.");
            } catch (error) {
                console.error(error);
            }
        };

        update();
    }

    return(
         <>
            <FormBackground raised>
                <Form
                    initialValues={{ ...data, ...address, ...location }}
                    onSubmit={onSubmit}
                    validate={validate}
                    render={({ handleSubmit, values }) => (
                        <form onSubmit={handleSubmit} noValidate>
                            <UpdateAdminForm />
                            <Container sx={{ display: 'grid', placeItems: 'center' }}>
                                <Button variant="outlined" color="secondary" type="submit">
                                    Submit
                                </Button>
                            </Container>
                        </form>)}
                >
                </Form>
            </FormBackground>
        </>
    )
}

export default UpdateAdmin;