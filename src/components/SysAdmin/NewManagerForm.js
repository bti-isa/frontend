import { Grid, MenuItem, Typography, Divider, Button } from '@mui/material';
import useFetchData from 'customHooks/fetchData';
import { TextField, Select } from 'mui-rff';

const NewManagerForm = () => {
    const { data, loading } = useFetchData('BloodBank/simple')

    const data1 = [1, 2, 3]

    return (
        <>
            <Typography variant="h4" color="secondary">
                Manager Registration
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
                        <MenuItem value="New" selected>-- New Center --</MenuItem>
                        {!loading && data.map((bank) => (
                            <MenuItem key={bank.id} value={bank.id}>{bank.name}</MenuItem>
                        ))}
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
                <Typography variant="subtitle1" color="secondary" sx={{ marginTop: '3rem' }}>
                    Location information:
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

export default NewManagerForm;