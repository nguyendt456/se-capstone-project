import React, { useContext, useEffect } from 'react'
import { ContextDataType, GlobalContext } from './root'
import { Avatar, Box, Button, Fade, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, ThemeProvider, createTheme } from '@mui/material'
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { Janitor } from '../models/model';
import ImageIcon from '@mui/icons-material/Image';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

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

const TaskAssign: React.FC = () => {
    const { globalContextHook, janitorMainMenuHook, vehiclePanelHook, janitorPanelHook, janitorFocusHook }: ContextDataType = useContext(GlobalContext)
    let listOfJanitor = globalContextHook.dataHook.listOfJanitor
    
    useEffect(() => {
        vehiclePanelHook.setDataHook(false)
        janitorMainMenuHook.setDataHook(true)
        console.log(janitorMainMenuHook.dataHook)
    }, [])

    const handleClick = (janitor: Janitor) => {
        janitorPanelHook.setDataHook(true)
        janitorFocusHook.setDataHook(janitor)
    }

    return (
        <Grid
                    container
                    direction="column"
                    sx={{
                        width: 'auto',
                    }}
                >
                <Fade in={janitorMainMenuHook.dataHook} unmountOnExit={true}>
                    <Box sx={{
                        width: 'auto',
                        backgroundColor: '#ffffff',
                        borderBottomRightRadius: '12px',
                        borderBottomLeftRadius: '12px',
                        boxShadow: '0.3em 0.3em 1em rgba(0, 0, 0, 0.3);',
                    }}>
                    <Grid item xs={12}>
                        <Box sx={{
                            padding: '10px 10px 10px 15px',
                            borderBottom: '1px solid hsla(210,18%,87%,1)',
                            fontFamily: 'Roboto',
                            fontWeight: 'bold',
                            fontSize: '20px',
                            color: '#0b210c',
                        }}>
                            <GroupAddIcon sx={{display: 'inline', width: '20px', height: '20px'}}/>
                            <h1 style={{display: 'inline'}}> Janitors </h1>
                        </Box>
                    </Grid>
                    <Grid item>
                        <List sx={{ width: '100%', maxHeight: '80vh', overflowY: 'auto', bgcolor: '#ffffff'}}>
                            {listOfJanitor.map((janitor: Janitor) => 
                                <Box sx={{
                                    display: 'block',
                                    borderRadius: '10px',
                                    margin: '10px 15px 10px 15px',
                                    "&:hover": {
                                        backgroundColor: '#b0d95d'
                                    },
                                }}>
                                    <ThemeProvider theme={theme}>
                                    <Button sx={{ width: '100%', borderRadius: '10px' }} onClick={() => handleClick(janitor)}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <ImageIcon/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={janitor.name} secondary={janitor.birthday} />
                                    </ListItem>
                                    </Button>
                                    </ThemeProvider>
                                </Box>
                            )
                            }
                        </List>
                    </Grid>
                    <Grid item>
                        <Box sx={{
                            display: 'block',
                            textAlign: 'center',
                            paddingBottom: '10px',
                        }}>
                            <IconButton onClick={() => janitorMainMenuHook.setDataHook(false)}>
                                <ArrowBackIosNewIcon sx={{
                                    width: '15px',
                                    height: '15px',
                                }}/>
                            </IconButton>
                        </Box>
                    </Grid>
                    </Box>
                </Fade>
            </Grid>
    )
}

export default TaskAssign