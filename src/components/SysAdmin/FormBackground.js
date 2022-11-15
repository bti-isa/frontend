import { Card } from "@mui/material"
import { styled } from "@mui/material/styles"

// this is an example of a styled component, basically pre defined css for component!
// can be used as <FormBackground>
const FormBackground = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    padding: '1.5rem',
    raised: true,
    width: '70%',
    margin: '1rem auto',
    color: theme.palette.secondary.main
}))

export default FormBackground