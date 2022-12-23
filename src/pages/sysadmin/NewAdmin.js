import { Button } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import FormBackground from "components/SysAdmin/FormBackground";
import NewAdminForm from "components/SysAdmin/NewAdminForm";
import TemporaryNavigation from "components/SysAdmin/TemporaryNavigation";
import ROUTES from "config/routes";
import CONSTANTS from "constants/constants";
import REGEX from "constants/regex";
import { Form } from 'react-final-form';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {axiosInstance} from "../../config/https.js"

const emailRegex = new RegExp(REGEX.EMAIL)
const numberRegex = new RegExp(REGEX.NUMBER)

const NewAdmin = () => {
    const navigate = useNavigate()

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
        if (!values.phoneNumber) {
            returnObject.phoneNumber = 'This field is required'
        }

        return returnObject
    }
    const onSubmit = async (values) => {
        console.log(values)
        let NewSysAdminDTO = {
            firstname: values.firstName,
            lastname: values.lastName,
            email: values.email,
            password: values.password,
            phoneNumber: values.phoneNumber,
            jmbg: values.jmbg,
            gender: values.gender,
            role: "SYSTEM_ADMIN",
        }
        await axiosInstance.post(`${CONSTANTS.API}SysAdmin/add`, NewSysAdminDTO)
            .catch((error) => {
                toast('Admin registration unsuccessful 😢💔')
                console.error(error)
            })
            .then((response) => {
                if (response === undefined) return null;
                toast('Admin successfully registered! 😊')
                navigate(ROUTES.SYSADMIN_USERS)
            })
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
                            <NewAdminForm />
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

export default NewAdmin;