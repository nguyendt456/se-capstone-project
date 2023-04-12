import { useContext, useEffect, useState } from "react";
import { Avatar, Box, Button, Card, Collapse, Fade, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, ThemeProvider, createTheme } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { ContextState, GlobalContext } from "./root";
import ImageIcon from '@mui/icons-material/Image';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Vehicle } from "../models/model";

const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: '#000000'
      },
    },
    typography: {
        button: {
          textTransform: 'none'
        },
    },
});

const VehiclePage: React.FC = () => {
    const { GlobalContextData, setGlobalContextData, setVehiclePanel, setVehicleFocus, vehicleMainMenu, setVehicleMainMenu}: ContextState = useContext(GlobalContext)
    let listOfVehicle = GlobalContextData.listOfVehicle
    useEffect(() => {
        setVehicleMainMenu(true)
    }, [])

    const handleClick = (vehicle :Vehicle) => {
        setVehiclePanel(true)
        setVehicleFocus(vehicle)
    }

    return (
        <div className={`menu ${vehicleMainMenu ? 'open' : 'closed'}`}>
            <Fade in={vehicleMainMenu}>
                <Grid
                    container
                    direction="column"
                    sx={{
                        backgroundColor: '#ffffff',
                        borderBottomRightRadius: '12px',
                        borderBottomLeftRadius: '12px',
                        boxShadow: '0.3em 0.3em 1em rgba(0, 0, 0, 0.3);',
                    }}
                >
                    <Grid item xs={12}>
                        <Box sx={{
                            display: 'block',
                            padding: '10px 0 10px 15px',
                            borderBottom: '1px solid hsla(210,18%,87%,1)',
                            fontFamily: 'Roboto',
                            fontWeight: 'bold',
                            fontSize: '20px',
                            color: '#0b210c',
                        }}>
                            <LocalShippingIcon sx={{display: 'inline', width: '20px', height: '20px'}}/>
                            <h1 style={{display: 'inline'}}> Vehicles</h1>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box sx={{
                            display: 'block',
                        }}>
                            <List sx={{ width: '100%', maxWidth: 360, maxHeight: '80vh', overflowY: 'auto', bgcolor: '#ffffff'}}>
                                {listOfVehicle.map((vehicle :Vehicle) => 
                                    <Box sx={{
                                        display: 'block',
                                        borderRadius: '10px',
                                        margin: '10px 15px 10px 15px',
                                        "&:hover": {
                                            backgroundColor: '#b0d95d'
                                        }
                                    }}>
                                        <ThemeProvider theme={theme}>
                                        <Button onClick={() => handleClick(vehicle)}>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <ImageIcon/>
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary={vehicle.name} secondary={vehicle.status} />
                                        </ListItem>
                                        </Button>
                                        </ThemeProvider>
                                    </Box>
                                )
                                }
                            </List>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box sx={{
                            display: 'block',
                            textAlign: 'center',
                            paddingBottom: '10px',
                        }}>
                            <IconButton onClick={() => setVehicleMainMenu(false)}>
                                <ArrowBackIosNewIcon sx={{
                                    width: '15px',
                                    height: '15px',
                                }}/>
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
            </Fade>
        </div>
    )
}

export default VehiclePage