import { Avatar, Box, Button, Card, CardHeader, Collapse, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import React, { useContext, useState } from 'react'
import { ContextDataType, GlobalContext } from './root'
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Janitor, MCPs } from '../models/model';

const TaskPanel = () => {
    const { globalContextHook, janitorPanelHook, janitorFocusHook }: ContextDataType = useContext(GlobalContext)
    let listOfMCPs = globalContextHook.dataHook.listOfMCPs
    let listOfJanitor = globalContextHook.dataHook.listOfJanitor

    const [ assignJanitorState, setAssignJanitorState ] = useState(false)

    const handleAssignJanitor = () => {
        setAssignJanitorState(true)
    }

    const handleAddMCPs = (janitor: Janitor, mcp: MCPs) => {
        listOfJanitor.map((j, i) => {
            if (janitor.name === j.name) {
                let prevOwner = listOfJanitor[i].task
                listOfJanitor[i].task = mcp
                console.log(prevOwner)
            }
        })
        globalContextHook.setDataHook((prev) => ({
            ...prev,
            listOfJanitor: listOfJanitor,
        }))
    }

    const handleRemoveMCPsfromJanitor = (janitor: Janitor) => {
        listOfJanitor.map((j, i) => {
            if (janitor.name === j.name) {
                janitor.task = undefined
            }
        })
        globalContextHook.setDataHook((prev) => ({
            ...prev,
            listOfJanitor: listOfJanitor,
        }))
    }

    return (
        <Grid container sx={{
            width: 'auto',
            right: 0,
            position: 'absolute',
            zIndex: 1100,
        }}>
            <Collapse orientation="horizontal" in={janitorPanelHook.dataHook}>
                <Card sx={{
                    width: 400,
                }}>
                    <CardHeader
                        title={
                        <Box sx={{fontWeight: 'bold'}}>
                            {janitorFocusHook.dataHook.name}
                        </Box>}
                        subheader={
                            janitorFocusHook.dataHook.task !== undefined ? (<Box> Status: {janitorFocusHook.dataHook.task.name} </Box>) : <></>
                        }
                    />
                    <Grid item sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                    <Button variant="contained" onClick={handleAssignJanitor} startIcon={<AddIcon/>}>Assign</Button>
                    </Grid>
                    <Grid item>
                        <List sx={{width: '100%', maxWidth: 360}}>
                            <Collapse orientation='vertical' in={assignJanitorState}>
                                <Box>
                                    {listOfMCPs.map((mcp) => (
                                    <ListItem secondaryAction={
                                        (janitorFocusHook.dataHook.task !== mcp) ? <Button variant='outlined' onClick={() => {
                                            handleAddMCPs(janitorFocusHook.dataHook, mcp)
                                        }}>Add</Button>
                                        :
                                        <IconButton onClick={() => handleRemoveMCPsfromJanitor(janitorFocusHook.dataHook)}>
                                            <CloseIcon sx={{
                                                width: '20px',
                                                height: '20px',
                                            }}/>
                                        </IconButton>
                                    }>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <PersonIcon/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={mcp.name}/>
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
                                if (assignJanitorState == true) {
                                    setAssignJanitorState(false)
                                } else {
                                    janitorPanelHook.setDataHook(false)
                                }
                            }}>
                            {assignJanitorState ? 
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

export default TaskPanel