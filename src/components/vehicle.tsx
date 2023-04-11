import { useContext, useEffect, useState } from "react";
import { Avatar, Box, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { ContextState, GlobalContext } from "./root";
import ImageIcon from '@mui/icons-material/Image';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';


const VehiclePage: React.FC = () => {
    const [checkedMenu, setCheckedMenu] = useState(false)
    const navigate = useNavigate()
    
    const { GlobalContextData, setGlobalContextData }: ContextState = useContext(GlobalContext)
    let listOfVehicle = GlobalContextData.listOfVehicle
    useEffect(() => {
        setCheckedMenu(true)
        console.log("mount")
        return () => {
            console.log("unmount")
        }
    }, [])

    return (
        <div className={`menu ${checkedMenu ? 'open' : 'closed'}`}>
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
                        <List sx={{ width: '100%', maxWidth: 360, overflow: 'scroll', bgcolor: '#ffffff'}}>
                            {listOfVehicle.map((vehicle) => 
                                <Box sx={{
                                    display: 'block',
                                    borderRadius: '10px',
                                    margin: '10px 15px 10px 15px',
                                    "&:hover": {
                                        backgroundColor: '#b0d95d'
                                    }
                                }}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <ImageIcon/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={vehicle.name} secondary={vehicle.status} />
                                    </ListItem>
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
                        <IconButton onClick={() => navigate('/')}>
                            <ArrowBackIosNewIcon sx={{
                                width: '15px',
                                height: '15px',
                            }}/>
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
            {/* <Box sx={{
                position: 'absolute',
                left: '85px',
                width: 300,
                backgroundColor: '#ffffff',
                borderBottomRightRadius: '12px',
                borderBottomLeftRadius: '12px',
                boxShadow: '0.3em 0.3em 1em rgba(0, 0, 0, 0.3);',
            }}
            >
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
                <Box sx={{
                    display: 'block',
                    overflow: 'hidden',
                }}>
                <List sx={{ width: '100%', maxWidth: 360, overflow: 'scroll', bgcolor: '#ffffff'}}>
                    {listOfVehicle.map((vehicle) => 
                        <Box sx={{
                            display: 'block',
                            borderRadius: '10px',
                            margin: '8px 8px 8px 8px',
                            "&:hover": {
                                backgroundColor: '#b0d95d'
                            }
                        }}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <ImageIcon/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={vehicle.name} secondary={vehicle.status} />
                            </ListItem>
                        </Box>
                    )
                    }
                </List>
                </Box>
                <Box sx={{
                    display: 'block',
                    textAlign: 'center',
                    paddingBottom: '10px',
                }}>
                    <IconButton onClick={() => navigate('/')}>
                        <ArrowBackIosNewIcon sx={{
                            width: '15px',
                            height: '15px',
                        }}/>
                    </IconButton>
                </Box>
            </Box> */}
        </div>
    )
}

export default VehiclePage