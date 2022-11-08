import FormBackground from "components/SysAdmin/FormBackground";
import NewManagerForm from "components/SysAdmin/NewManagerForm";
import TemporaryNavigation from "components/SysAdmin/TemporaryNavigation";
import { Form } from 'react-final-form';

const NewManager = () => {
    const onSubmit = (values) => {
        console.log('submit')
    }

    const validate = (values) => {
        let returnObject = {}
        if (!values.firstName) {
            returnObject.firstName = 'This field is required'
        }
        if (!values.lastName) {
            returnObject.lastName = 'This field is required'
        }
        if (!values.email) {
            returnObject.email = 'This field is required'
        }
        if (!values.object) {
            returnObject.object = 'This field is required'
        }
        if (!values.password) {
            returnObject.password = 'This field is required'
        }
        if (!values.confirmPassword) {
            returnObject.confirmPassword = 'This field is required'
        }
        if (!values.jmbg) {
            returnObject.jmbg = 'This field is required'
        }
        if (!values.gender) {
            returnObject.gender = 'This field is required'
        }
        if (!values.street) {
            returnObject.street = 'This field is required'
        }
        if (!values.buildingNumber) {
            returnObject.buildingNumber = 'This field is required'
        }
        if (!values.city) {
            returnObject.city = 'This field is required'
        }
        if (!values.postalNumber) {
            returnObject.postalNumber = 'This field is required'
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