import { Card } from "@mui/material"
import { styled } from "@mui/material/styles"


// totally useless done for demonstration purposes

const FormBackground = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    padding: '1.5rem',
    raised: true,
    width: '70%',
    margin: '1rem auto',
    color: theme.palette.secondary.main
}))

export default FormBackground