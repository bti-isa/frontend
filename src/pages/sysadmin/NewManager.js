import { Button } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import AddCenterForm from "components/SysAdmin/AddCenterForm";
import FormBackground from "components/SysAdmin/FormBackground";
import NewManagerForm from "components/SysAdmin/NewManagerForm";
import TemporaryNavigation from "components/SysAdmin/TemporaryNavigation";
import ROUTES from "config/routes";
import CONSTANTS from "constants/constants";
import REGEX from "constants/regex";
import { useState } from "react";
import { Form } from 'react-final-form';
import { Router, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const emailRegex = new RegExp(REGEX.EMAIL)
const numberRegex = new RegExp(REGEX.NUMBER)

const NewManager = () => {
    const navigate = useNavigate()
    const [showCreateCenterForm, setShowCreateCenterForm] = useState(false)
    const validate = (values) => {
        let returnObject = {}
        if (!values.firstName) {
            returnObject.firstName = 'This field is required!'
        }
        if (!values.lastName) {
            returnObject.lastName = 'This field is required!'
        }
        if (!emailRegex.test(values.email)) {
            returnObject.email = 'This is not a valid email address!'
        }
        if (!values.object) {
            returnObject.object = 'This field is required'
        }
        if (!values.password || values.password.length < 6) {
            returnObject.password = 'Password must be at least 6 characters long'
        }
        if (!values.confirmPassword || values.password.length < 6) {
            returnObject.confirmPassword = 'Password must be at least 6 characters long'
        }
        if (values.password !== values.confirmPassword) {
            returnObject.password = 'Passwords must match!'
            returnObject.confirmPassword = 'Passwords must match!'
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
        if (!numberRegex.test(values.buildingNumber)) {
            returnObject.buildingNumber = 'Numerical characters only!'
        }
        if (!values.city) {
            returnObject.city = 'This field is required'
        }
        if (!numberRegex.test(values.postalNumber)) {
            returnObject.postalNumber = 'Numerical characters only!'
        }
        if (!values.country) {
            returnObject.country = 'This field is required'
        }
        if (!numberRegex.test(values.latitude)) {
            returnObject.latitude = 'Numerical characters only!'
        }
        if (!numberRegex.test(values.longitude)) {
            returnObject.longitude = 'Numerical characters only!'
        }
        if (!values.phoneNumber) {
            returnObject.phoneNumber = 'This field is required'
        }

        //there is probably a more elegant way
        if (values.object === 'New') {
            setShowCreateCenterForm(true)
        } else { setShowCreateCenterForm(false) }

        if (values.object === 'New' && !values.centerStreet) {
            returnObject.centerStreet = 'This field is required'
        }
        if (values.object === 'New' && !numberRegex.test(values.centerBuildingNumber)) {
            returnObject.centerBuildingNumber = 'Numerical characters only!'
        }
        if (values.object === 'New' && !values.centerCity) {
            returnObject.centerCity = 'This field is required'
        }
        if (values.object === 'New' && !numberRegex.test(values.centerPostalNumber)) {
            returnObject.centerPostalNumber = 'Numerical characters only!'
        }
        if (values.object === 'New' && !values.centerCountry) {
            returnObject.centerCountry = 'This field is required'
        }
        if (values.object === 'New' && !numberRegex.test(values.centerLatitude)) {
            returnObject.centerLatitude = 'Numerical characters only!'
        }
        if (values.object === 'New' && !numberRegex.test(values.centerLongitude)) {
            returnObject.centerLongitude = 'Numerical characters only!'
        }
        if (values.object === 'New' && !values.centerName) {
            returnObject.centerName = 'This field is required'
        }
        if (values.object === 'New' && !values.centerDescription) {
            returnObject.centerDescription = 'This field is required'
        }
        return returnObject
    }
    const onSubmit = async (values) => {
        let NewCenterDTO = {
            name: values.centerName,
            description: values.centerDescription,
            address: {
                city: values.centerCity,
                street: values.centerStreet,
                country: values.centerCountry,
                postalCode: values.centerPostalNumber,
                number: values.centerBuildingNumber,
                longitude: values.centerLongitude,
                latitude: values.centerLatitude
            }
        }
        if (showCreateCenterForm) {
            await axios.post(`${CONSTANTS.API}BloodBank/add`, NewCenterDTO)
                .catch((error) => toast('Bank registration unsuccessful 😢💔'))
                .then((response) => {
                    if (response === undefined) return null;
                    let NewManagerDTO = {
                        firstname: values.firstName,
                        lastname: values.lastName,
                        email: values.email,
                        password: values.password,
                        phoneNumber: values.phoneNumber,
                        jmbg: values.jmbg,
                        gender: values.gender,
                        role: "INSTITUTE_ADMIN",
                        bloodBankId: response.data.id,
                        address: {
                            city: values.city,
                            street: values.street,
                            country: values.country,
                            postalCode: values.postalNumber,
                            number: values.buildingNumber,
                            longitude: values.longitude,
                            latitude: values.latitude
                        }
                    }
                    axios.post(`${CONSTANTS.API}Admin/add`, NewManagerDTO)
                        .catch((error) => {
                            toast('Admin registration unsuccessful 😢💔')
                        })
                        .then((response) => {
                            if (response === undefined) return null;
                            toast('Manager and Blood Bank successfully registered! 😊')
                            navigate(ROUTES.SYSADMIN_USERS)
                        })
                })
        } else {
            let NewManagerDTO = {
                firstname: values.firstName,
                lastname: values.lastName,
                email: values.email,
                password: values.password,
                phoneNumber: values.phoneNumber,
                jmbg: values.jmbg,
                gender: values.gender,
                role: "INSTITUTE_ADMIN",
                bloodBankId: values.object,
                address: {
                    city: values.city,
                    street: values.street,
                    country: values.country,
                    postalCode: values.postalNumber,
                    number: values.buildingNumber,
                    longitude: values.longitude,
                    latitude: values.latitude
                }
            }
            axios.post(`${CONSTANTS.API}Admin/add`, NewManagerDTO)
                .catch((error) => {
                    toast('Registration unsuccessful 😢💔')
                })
                .then((response) => {
                    if (response === undefined) return null;
                    toast('Manager successfully registered! 😊')
                    navigate(ROUTES.SYSADMIN_USERS)
                })
        }
    }

    return (
        <>
            <TemporaryNavigation />
            <FormBackground raised>
                <Form
                    onSubmit={onSubmit}
                    validate={validate}
                    render={({ handleSubmit, values }) => (
                        <form onSubmit={handleSubmit} noValidate>
                            <NewManagerForm />
                            {showCreateCenterForm && (<AddCenterForm />)}
                            <Container sx={{ display: 'grid', placeItems: 'center' }}>
                                <Button variant="outlined" color="secondary" type='submit'>
                                    Submit
                                </Button>
                            </Container>
                        </form>)}
                >
                </Form>
            </FormBackground>
        </>
    );
}

export default NewManager;  