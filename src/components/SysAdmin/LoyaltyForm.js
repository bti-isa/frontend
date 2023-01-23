import { Divider, FormControl, Grid, MenuItem, Typography} from "@mui/material";
import { Select, TextField } from "mui-rff";

const LoyaltyForm = () => {
    return (
        <>
            <Typography variant="h4" color="secondary">
                Loyalty programme
            </Typography>
            <Grid container spacing={1}>
                <Divider variant='fullWidth' sx={{ borderColor: 'white', width: '100%', marginTop: '15px' }} />
                <Grid item xs={12} sm={2} sx={{ display: 'grid', placeItems: 'center' }}>
                    <Typography variant="h6" color="secondary">
                        Silver users:
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <FormControl>
                        <TextField
                            autoComplete='off'
                            fullWidth
                            required
                            margin="normal"
                            name="silver"
                            label="Required Points"
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
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={1} sx={{ display: 'grid', placeItems: 'center' }}>
                    <Typography variant="h6" color="secondary">
                        for
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Select
                        sx={{ marginTop: '16px', color: 'white' }}
                        name="silver_percentage"
                        required
                        autoComplete="off"
                        label='Percentage'
                    >
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12} sm={1} sx={{ display: 'grid', placeItems: 'center' }}>
                    <Typography variant="h6" color="secondary">
                        % off at:
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Select
                        sx={{ marginTop: '16px', color: 'white' }}
                        name="silver_locale"
                        required
                        autoComplete="off"
                        label='Partner name'
                    >
                        <MenuItem value={'Ben & Jerries'}>Ben & Jerries</MenuItem>
                        <MenuItem value={'SUR Bife pod Vrbom'}>SUR Bife pod Vrbom</MenuItem>
                        <MenuItem value={'Idea supermarket'}>Idea supermarket</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12} sm={2} sx={{ display: 'grid', placeItems: 'center' }}>
                    <Typography variant="h6" color="secondary">
                        Gold users:
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <TextField
                        autoComplete='off'
                        fullWidth
                        required
                        margin="normal"
                        name="gold"
                        label="Required Points"
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
                <Grid item xs={12} sm={1} sx={{ display: 'grid', placeItems: 'center' }}>
                    <Typography variant="h6" color="secondary">
                        for
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Select
                        sx={{ marginTop: '16px', color: 'white' }}
                        name="gold_percentage"
                        required
                        autoComplete="off"
                        label='Percentage'
                    >
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12} sm={1} sx={{ display: 'grid', placeItems: 'center' }}>
                    <Typography variant="h6" color="secondary">
                        % off at:
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Select
                        sx={{ marginTop: '16px', color: 'white' }}
                        name="gold_locale"
                        required
                        autoComplete="off"
                        label='Partner name'
                    >
                        <MenuItem value={'Ben & Jerries'}>Ben & Jerries</MenuItem>
                        <MenuItem value={'SUR Bife pod Vrbom'}>SUR Bife pod Vrbom</MenuItem>
                        <MenuItem value={'Idea supermarket'}>Idea supermarket</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12} sm={2} sx={{ display: 'grid', placeItems: 'center' }}>
                    <Typography variant="h6" color="secondary">
                        Platinum users:
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <TextField
                        autoComplete='off'
                        fullWidth
                        required
                        margin="normal"
                        name="platinum"
                        label="Required Points"
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
                <Grid item xs={12} sm={1} sx={{ display: 'grid', placeItems: 'center' }}>
                    <Typography variant="h6" color="secondary">
                        for
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Select
                        sx={{ marginTop: '16px', color: 'white' }}
                        name="platinum_percentage"
                        required
                        autoComplete="off"
                        label='Percentage'
                    >
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12} sm={1} sx={{ display: 'grid', placeItems: 'center' }}>
                    <Typography variant="h6" color="secondary">
                        % off at:
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Select
                        sx={{ marginTop: '16px', color: 'white' }}
                        name="platinum_locale"
                        required
                        autoComplete="off"
                        label='Partner name'
                    >
                        <MenuItem value={'Ben & Jerries'}>Ben & Jerries</MenuItem>
                        <MenuItem value={'SUR Bife pod Vrbom'}>SUR Bife pod Vrbom</MenuItem>
                        <MenuItem value={'Idea supermarket'}>Idea supermarket</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12} sm={4} sx={{ display: 'grid', placeItems: 'center' }}>
                    <Typography variant="h6" color="secondary">
                        Number of points per donation:
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete='off'
                        fullWidth
                        required
                        margin="normal"
                        name="points"
                        label="Points per donation"
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
            </Grid>
        </>
    );
}

export default LoyaltyForm;