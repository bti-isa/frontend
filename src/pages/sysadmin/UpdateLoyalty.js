import { Container } from "@mui/system";
import LoyaltyForm from "components/SysAdmin/LoyaltyForm";
import REGEX from "constants/regex";
import { Form } from "react-final-form";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button'
import FormBackground from "components/SysAdmin/FormBackground";
import CONSTANTS from "constants/constants";
import { toast } from "react-toastify";
import ROUTES from "config/routes";
import { axiosInstance } from "config/https";


const numberRegex = new RegExp(REGEX.NUMBER)

const LoyaltyComponent = () => {
    const navigate = useNavigate()

    const validate = (values) => {
        let returnObject = {}
        if (!numberRegex.test(values.silver)) {
            returnObject.silver = 'This field is required'
        }
        if (!numberRegex.test(values.gold) || parseInt(values.gold) < parseInt(values.silver)) {
            returnObject.gold = "Can't be less than for silver users!"
        }
        if (!numberRegex.test(values.platinum) || parseInt(values.platinum) < parseInt(values.gold)) {
            returnObject.platinum = "Can't be less than for gold users!"
        }
        if (!values.silver_locale) {
            returnObject.silver_locale = 'This field is required'
        }
        if (!values.gold_locale) {
            returnObject.gold_locale = 'This field is required'
        }
        if (!values.platinum_locale) {
            returnObject.platinum_locale = 'This field is required'
        }
        if (!values.silver_percentage) {
            returnObject.silver_percentage = 'This field is required'
        }
        if (!values.gold_percentage) {
            returnObject.gold_percentage = 'This field is required'
        }
        if (!values.platinum_percentage) {
            returnObject.platinum_percentage = 'This field is required'
        }
        if (!numberRegex.test(values.points) || values.points < 0) {
            returnObject.points = "Must be a positive number!"
        }


        return returnObject
    }
    const onSubmit = async (values) => {
        const dto = {
            silver : parseInt(values.silver),
            gold : parseInt(values.gold),
            platinum : parseInt(values.platinum),
            silverPercentage : values.silver_percentage,
            goldPercentage: values.gold_percentage,
            platinumPercentage: values.platinum_percentage,
            silverPartner: values.silver_locale,
            goldPartner: values.gold_locale,
            platinumPartner: values.platinum_locale,
            points: values.points
        }
        await axiosInstance.patch(`${CONSTANTS.API}Loyalty/update`, dto)
            .catch((error) => {
                toast('Updating loyalty rules unsuccessful! 😢💔')
                console.error(error)
            })
            .then((response) => {
                if (response === undefined) return null;
                toast('Updating loyalty rules successful! 😄')
                navigate(ROUTES.SYSADMIN_USERS)
            })
    }

    return (
        <>
            <FormBackground raised >
                <Form
                    onSubmit={onSubmit}
                    validate={validate}
                    render={({ handleSubmit, values }) => (
                        <form onSubmit={handleSubmit} noValidate>
                            <LoyaltyForm />
                            <Container sx={{ display: 'grid', placeItems: 'center' }}>
                                <Button variant="contained" color="primary" type="submit">
                                    Update
                                </Button>
                            </Container>
                        </form>)}
                >
                </Form>
            </FormBackground>
        </>
    );
}

export default LoyaltyComponent;