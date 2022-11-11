import { Grid, MenuItem, Typography, Button } from '@mui/material';
import { TextField, Debug, Select } from 'mui-rff';

const NewManagerForm = ({ submit }) => {
    return (
        <>
            <Typography variant="h4" color="secondary">
                Manager Registration
            </Typography>
            <Debug />
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete='off'
                        fullWidth
                        required
                        margin="normal"
                        name="firstName"
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
                        name="lastName"
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
                <Grid item xs={12} sm={8}>
                    <TextField
                        fullWidth
                        required
                        margin="normal"
                        name="email"
                        type='email'
                        label="Email Address"
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
                <Grid item xs={12} sm={4} sx={{ marginTop: '1rem' }}>
                    <Select
                        formControlProps={{ margin: 'none' }}
                        name='object'
                        label='Object'
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
                        <MenuItem value="None" selected>-- Add later --</MenuItem>
                        <MenuItem value="Object 1" selected>Draculas bank</MenuItem>
                        <MenuItem value="Object 2">Madeleine Albrights bank</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        required
                        margin="normal"
                        name="password"
                        label="Password"
                        type='password'
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
                        name="confirmPassword"
                        label="Confirm password"
                        type='password'
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
                <Grid item xs={12} sm={6} sx={{ marginTop: '1rem' }}>
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
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                    </Select>
                </Grid>
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
                        name="buildingNumber"
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
                        name="postalNumber"
                        label="Postal number"
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
                <Grid item xs={12} sm={12}>
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
                <Grid item xs={12} sx={{ display: 'grid', placeItems: 'center' }}>
                    <Button variant="outlined" color="secondary" onClick={submit}>
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </>
    );
}

export default NewManagerForm;