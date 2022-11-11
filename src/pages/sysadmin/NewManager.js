import FormBackground from "components/SysAdmin/FormBackground";
import NewManagerForm from "components/SysAdmin/NewManagerForm";
import TemporaryNavigation from "components/SysAdmin/TemporaryNavigation";
import REGEX from "constants/regex";
import { Form } from 'react-final-form';

const emailRegex = new RegExp(REGEX.EMAIL)
const numberRegex = new RegExp(REGEX.NUMBER)

const NewManager = () => {
    const onSubmit = (values) => {
        console.log('submit')
    }

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


        return returnObject
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
                            <NewManagerForm submit={onSubmit} />
                        </form>)}
                >
                </Form>
            </FormBackground>
        </>
    );
}

export default NewManager;  