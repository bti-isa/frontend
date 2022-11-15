import { Container } from "@mui/system";
import Typography from '@mui/material/Typography'

const Loading = () => {
    return (
        <Container sx={{ width: '100%', display: 'block', textAlign: 'center' }}>
            <Typography variant="h6" color="tertiary" sx={{ margin: '3rem auto' }}>
                Loading...
            </Typography>
        </Container>
    );
}

export default Loading;
