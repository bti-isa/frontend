import { Divider, Grid, Typography } from "@mui/material";
import { TextField } from "mui-rff";

const AddCenterForm = () => {
    return (
        <Grid container spacing={1}>
            <Typography variant="subtitle1" color="secondary" sx={{ marginTop: '3rem' }}>
                General center information:
            </Typography>
            <Divider variant='fullWidth' sx={{ borderColor: 'white', width: '100%' }} />
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    required
                    margin="normal"
                    name="centerName"
                    label="Name of the center"
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
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    required
                    margin="normal"
                    name="centerDescription"
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
                Center location information:
            </Typography>
            <Divider variant='fullWidth' sx={{ borderColor: 'white', width: '100%' }} />
            <Grid item xs={12} sm={8}>
                <TextField
                    fullWidth
                    required
                    margin="normal"
                    name="centerStreet"
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
                    name="centerBuildingNumber"
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
                    name="centerCity"
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
                    name="centerPostalNumber"
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
                    name="centerCountry"
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
                    name="centerLongitude"
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
                    name="centerLatitude"
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
    );
}

export default AddCenterForm;