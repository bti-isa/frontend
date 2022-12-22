import { Grid, Typography, Divider } from '@mui/material';
import { TextField} from 'mui-rff';

const UpdateBloodBankForm = () =>{
    return (
        <>
            <Typography variant="h4" color="secondary">
                Update Blood Bank
            </Typography>
            <Grid container spacing={1}>
                <Typography variant="subtitle1" color="secondary" sx={{ marginTop: '3rem' }}>
                    General information:
                </Typography>
                <Divider variant='fullWidth' sx={{ borderColor: 'white', width: '100%' }} />
                <Grid item xs={12} sm={8}>
                    <TextField
                        autoComplete='off'
                        fullWidth
                        required
                        margin="normal"
                        name="name"
                        label="Name"
                        InputLabelProps={{
                            style: {
                                color: 'white'
                            }
                        }
                        }
                        inputProps={{
                            style: {
                                borderColor: 'white',
                                color: 'white',
                            }
                        }}
                        FormHelperTextProps={{
                            style: {
                                backgroundColor: 'white',
                                borderRadius: '10px',
                                textAlign: 'center',
                                marginTop: '10px',
                            }
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        required
                        margin="normal"
                        name="rating"
                        label="Rating"
                        InputLabelProps={{
                            style: {
                                color: 'white'
                            }
                        }
                        }
                        inputProps={{
                            style: {
                                borderColor: 'white',
                                color: 'white'
                            }
                        }}
                        FormHelperTextProps={{
                            style: {
                                backgroundColor: 'white',
                                borderRadius: '10px',
                                textAlign: 'center',
                                marginTop: '10px',
                            }
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={0}>
                    <TextField
                        fullWidth
                        required
                        margin="normal"
                        name="description"
                        label="Description"
                        InputLabelProps={{
                            style: {
                                color: 'white'
                            }
                        }
                        }
                        inputProps={{
                            style: {
                                borderColor: 'white',
                                color: 'white'
                            }
                        }}
                        FormHelperTextProps={{
                            style: {
                                backgroundColor: 'white',
                                borderRadius: '10px',
                                textAlign: 'center',
                                marginTop: '10px',
                            }
                        }}
                    />
                </Grid>
                <Typography variant="subtitle1" color="secondary" sx={{ marginTop: '3rem' }}>
                    Address information:
                </Typography>
                <Divider variant='fullWidth' sx={{ borderColor: 'white', width: '100%' }} />
                <Grid item xs={12} sm={8}>
                    <TextField
                        fullWidth
                        required
                        margin="normal"
                        name="street"
                        label="Street name"
                        InputLabelProps={{
                            style: {
                                color: 'white'
                            }
                        }
                        }
                        inputProps={{
                            style: {
                                borderColor: 'white',
                                color: 'white'
                            }
                        }}
                        FormHelperTextProps={{
                            style: {
                                backgroundColor: 'white',
                                borderRadius: '10px',
                                textAlign: 'center',
                                marginTop: '10px',
                            }
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        required
                        margin="normal"
                        name="number"
                        label="Building number"
                        InputLabelProps={{
                            style: {
                                color: 'white'
                            }
                        }
                        }
                        inputProps={{
                            style: {
                                borderColor: 'white',
                                color: 'white'
                            }
                        }}
                        FormHelperTextProps={{
                            style: {
                                backgroundColor: 'white',
                                borderRadius: '10px',
                                textAlign: 'center',
                                marginTop: '10px',
                            }
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <TextField
                        fullWidth
                        required
                        margin="normal"
                        name="city"
                        label="City"
                        InputLabelProps={{
                            style: {
                                color: 'white'
                            }
                        }
                        }
                        inputProps={{
                            style: {
                                borderColor: 'white',
                                color: 'white'
                            }
                        }}
                        FormHelperTextProps={{
                            style: {
                                backgroundColor: 'white',
                                borderRadius: '10px',
                                textAlign: 'center',
                                marginTop: '10px',
                            }
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        required
                        margin="normal"
                        name="postalCode"
                        label="Postal code"
                        InputLabelProps={{
                            style: {
                                color: 'white'
                            }
                        }
                        }
                        inputProps={{
                            style: {
                                borderColor: 'white',
                                color: 'white'
                            }
                        }}
                        FormHelperTextProps={{
                            style: {
                                backgroundColor: 'white',
                                borderRadius: '10px',
                                textAlign: 'center',
                                marginTop: '10px',
                            }
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <TextField
                        fullWidth
                        required
                        margin="normal"
                        name="country"
                        label="Country"
                        InputLabelProps={{
                            style: {
                                color: 'white'
                            }
                        }
                        }
                        inputProps={{
                            style: {
                                borderColor: 'white',
                                color: 'white'
                            }
                        }}
                        FormHelperTextProps={{
                            style: {
                                backgroundColor: 'white',
                                borderRadius: '10px',
                                textAlign: 'center',
                                marginTop: '10px',
                            }
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={2}>
                    <TextField
                        fullWidth
                        required
                        margin="normal"
                        name="longitude"
                        label="Longitude"
                        InputLabelProps={{
                            style: {
                                color: 'white'
                            }
                        }
                        }
                        inputProps={{
                            style: {
                                borderColor: 'white',
                                color: 'white'
                            }
                        }}
                        FormHelperTextProps={{
                            style: {
                                backgroundColor: 'white',
                                borderRadius: '10px',
                                textAlign: 'center',
                                marginTop: '10px',
                            }
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={2}>
                    <TextField
                        fullWidth
                        required
                        margin="normal"
                        name="latitude"
                        label="Latitude"
                        InputLabelProps={{
                            style: {
                                color: 'white'
                            }
                        }
                        }
                        inputProps={{
                            style: {
                                borderColor: 'white',
                                color: 'white'
                            }
                        }}
                        FormHelperTextProps={{
                            style: {
                                backgroundColor: 'white',
                                borderRadius: '10px',
                                textAlign: 'center',
                                marginTop: '10px',
                            }
                        }}
                    />
                </Grid>
            </Grid>
        </>
    );
}


export default UpdateBloodBankForm;