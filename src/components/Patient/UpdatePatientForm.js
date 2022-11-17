import { Grid, MenuItem, Typography, Divider } from '@mui/material';
import { TextField, Select } from 'mui-rff';

const UpdatePatientForm = () => {
    return (
        <>
            <Typography variant="h4" color="secondary">
                Update user profile
            </Typography>
            <Grid container spacing={1}>
                <Typography variant="subtitle1" color="secondary" sx={{ marginTop: '3rem' }}>
                    Personal information:
                </Typography>
                <Divider variant='fullWidth' sx={{ borderColor: 'white', width: '100%' }} />
                <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete='off'
                        fullWidth
                        required
                        margin="normal"
                        name="firstname"
                        label="First Name"
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
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        required
                        margin="normal"
                        name="lastname"
                        label="Last Name"
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
                        name="jmbg"
                        label="Social security number"
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
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        required
                        margin="normal"
                        name="phoneNumber"
                        label="Telephone number"
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
                <Grid item xs={12} sm={2} sx={{ marginTop: '1rem' }}>
                    {/* set selected value */}
                    <Select
                        formControlProps={{ margin: 'none' }}
                        name='gender'
                        label='Gender'
                        required
                        fullWidth
                        SelectDisplayProps={{
                            style: {
                                borderColor: 'white',
                                color: 'white'
                            }
                        }}
                        inputLabelProps={{
                            style: {
                                color: 'white'
                            }
                        }}
                    >
                        <MenuItem value="MALE">Male</MenuItem>
                        <MenuItem value="FEMALE">Female</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete='off'
                        fullWidth
                        required
                        margin="normal"
                        name="education"
                        label="Education"
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
                <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete='off'
                        fullWidth
                        required
                        margin="normal"
                        name="occupation"
                        label="Occupation"
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

export default UpdatePatientForm;