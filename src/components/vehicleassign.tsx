import React, { useContext, useState } from 'react'
import { ContextState, GlobalContext } from './root'
import { Avatar, Box, Button, Card, CardHeader, CardMedia, Collapse, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import { Collector, Vehicle } from '../models/model';

const VehicleAssign = () => {
    const { GlobalContextData, setGlobalContextData, setVehiclePanel, setVehicleFocus, vehicleMainMenu, setVehicleMainMenu, vehiclePanel, vehicleFocus}: ContextState = useContext(GlobalContext)
    let listOfVehicle = GlobalContextData.listOfVehicle
    let listOfCollector = GlobalContextData.listOfCollector
    let listOfJanitor = GlobalContextData.listOfJanitor
    
    const [ assignVehicleState, setAssignVehicleState ] = useState(false)

    const handleAssignButton = () => {
        setAssignVehicleState(true)
    }
    const handleAddCollector = (vehicle: Vehicle, collector: Collector) => {
        vehicle.status = "In progress"
        listOfVehicle.map((v, i) => {
            if (vehicle.name === v.name) {
                listOfVehicle[i].owner = collector
            }
        })
        listOfCollector.map((c, i) => {
            if (collector === c) {
                listOfCollector[i].vehicle_incharge = vehicle
            }
        })
        setGlobalContextData((prev) => ({
            ...prev,
            listOfVehicle: listOfVehicle,
            listOfCollector: listOfCollector,
        }))
        console.log(GlobalContextData)
    }  
    return (
        <Grid container sx={{
            width: 'auto',
            right: 0,
            position: 'absolute',
            zIndex: 1100,
        }}>
            <Collapse orientation="horizontal" in={vehiclePanel}>
                <Card sx={{
                    width: 400,
                }}>
                    <CardMedia
                        sx={{ height: 100 }}
                        image={require("../resources/truck.jpg")}
                    />
                    <CardHeader
                        title={
                        <Box sx={{fontWeight: 'bold'}}>
                            {vehicleFocus.name}
                        </Box>}
                        subheader={
                            <Box>
                                Status: {vehicleFocus.status}
                            </Box>}
                    />
                    <Grid item sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                    <Button variant="contained" onClick={handleAssignButton} startIcon={<AddIcon/>}>Assign</Button>
                    </Grid>
                    <Grid item>
                        <List sx={{width: '100%', maxWidth: 360}}>
                            <Collapse orientation='vertical' in={assignVehicleState}>
                                <Box>
                                    {listOfCollector.map((collectorFocus) => (
                                    <ListItem secondaryAction={
                                        (collectorFocus.vehicle_incharge === undefined) && <Button variant='outlined' onClick={() => {
                                            handleAddCollector(vehicleFocus, collectorFocus)
                                        }}>Add</Button>
                                    }>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <PersonIcon/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={collectorFocus.name} secondary={collectorFocus.vehicle_incharge?.name}/>
                                    </ListItem>
                                    )
                                    )}
                                </Box>
                            </Collapse>
                        </List>
                    </Grid>
                    <Grid item>
                        <Box sx={{
                            display: 'block',
                            textAlign: 'center',
                            paddingBottom: '10px',
                        }}>
                            <IconButton onClick={() => {
                                if (assignVehicleState == true) {
                                    setAssignVehicleState(false)
                                } else {
                                    setVehiclePanel(false)
                                }
                            }}>
                            {assignVehicleState ? 
                                <CloseIcon sx={{
                                    width: '20px',
                                    height: '20px',
                                }}/>
                            : 
                                <ArrowForwardIosIcon sx={{
                                    width: '20px',
                                    height: '20px',
                                }}/>}
                            </IconButton>
                        </Box>
                    </Grid>
                </Card>
            </Collapse>
        </Grid>
    )
}

export default VehicleAssign