import React, { createContext, useState } from 'react'
import Navbar from './navbar'
import App from '../App'
import Map from './map'
import { Collector, GlobalContextType, Janitor, MCPs, Person, Vehicle } from '../models/model'
import { Avatar, Box, Button, Card, CardHeader, CardMedia, Collapse, Grid, Hidden, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemSecondaryAction, ListItemText } from '@mui/material'
import VehicleAssign from './vehicleassign'


export interface ContextState {
    GlobalContextData: GlobalContextType
    setGlobalContextData: React.Dispatch<React.SetStateAction<GlobalContextType>>
    setVehiclePanel: React.Dispatch<React.SetStateAction<boolean>>
    setVehicleFocus: React.Dispatch<React.SetStateAction<Vehicle>>
    vehicleMainMenu: boolean,
    vehiclePanel: boolean,
    vehicleFocus: Vehicle,
    setVehicleMainMenu: React.Dispatch<React.SetStateAction<boolean>>
}

// interface StateHook<T> {
//     dataHook?: T,
//     setDataHook : React.Dispatch<React.SetStateAction<T>>
// }

// interface ContextData {
//     GlobalContextData: GlobalContextType
//     globalContextHook: StateHook<GlobalContextType>
//     vehiclePanelHook : StateHook<boolean>
//     vehicleFocus     : StateHook<Vehicle>
//     vehicleMainMenu  : StateHook<boolean>
// }

const GlobalContext = createContext<ContextState>({
    GlobalContextData: {} as GlobalContextType,
    setGlobalContextData: () => {},
    setVehiclePanel: () => {},
    setVehicleFocus: () => {},
    vehicleMainMenu: false,
    vehiclePanel: false,
    vehicleFocus: {} as Vehicle,
    setVehicleMainMenu: () => {},
});

const Root :React.FC = () => {
    let listOfMCPs : MCPs[] = [
        {name: "To Hien Thanh 1",capacity: 20, lat: 10.772648, lng: 106.660651},
        {name: "Thanh Thai 1", capacity: 50, lat: 10.773349, lng: 106.664747},
        {name: "Ly Thuong Kiet 1",capacity: 90, lat: 10.783545, lng: 106.654454},
        {name: "Ly Thuong Kiet 2",capacity: 80, lat: 10.775484, lng: 106.656745},
    ]
    let listOfJanitor : Janitor[] = [
        {name: "Nguyen Van A", birthday: "1980-01-15", phone_number: "0912345672"},
        {name: "Nguyen Van B", birthday: "1990-07-20", phone_number: "0871231231"},
        {name: "Nguyen Van C", birthday: "1979-12-01", phone_number: "0931237989"},
        {name: "Nguyen Van D", birthday: "1999-04-05", phone_number: "0342389128"},
        {name: "Nguyen Van E", birthday: "1992-09-09", phone_number: "0801231321"},
    ]
    let listOfCollector : Collector[] = [
        {name: "Tran Van L", birthday: "1974-01-15", phone_number: "0912345672", vehicle_incharge: undefined},
        {name: "Tran Van X", birthday: "1990-12-01", phone_number: "0121237989"},
        {name: "Tran Van Y", birthday: "1988-05-12", phone_number: "0349459128"},
        {name: "Tran Van Z", birthday: "1970-10-19", phone_number: "0562312343"},
    ]
    let listOfVehicle: Vehicle[] = [
        {name: "Xe tai 54A-123456", status: "Free", owner: {} as Person},
        {name: "Xe tai 54H-673423", status: "Free", owner: {} as Person},
        {name: "Xe tai 52G-552670", status: "Free", owner: {} as Person},
        {name: "Xe tai 59A-245897", status: "Free", owner: {} as Person},
        {name: "Xe tai 59B-887510", status: "Free", owner: {} as Person},
        // {name: "Xe tai 52G-552670", status: "Free", owner: {} as Person},
        // {name: "Xe tai 52G-552670", status: "Free", owner: {} as Person},
        // {name: "Xe tai 52G-552670", status: "Free", owner: {} as Person},
        // {name: "Xe tai 52G-552670", status: "Free", owner: {} as Person},
    ]
    const [ GlobalContextData, setGlobalContextData ] = useState<GlobalContextType>({
            listOfMCPs: listOfMCPs,
            listOfJanitor: listOfJanitor,
            listOfCollector: listOfCollector,
            listOfVehicle: listOfVehicle,
    });
    const [ vehiclePanel, setVehiclePanel ] = useState(false)
    const [ vehicleFocus, setVehicleFocus] = useState({} as Vehicle)
    const [ vehicleMainMenu, setVehicleMainMenu] = useState(false)

    return (
        <GlobalContext.Provider value={{GlobalContextData, setGlobalContextData, setVehiclePanel, setVehicleFocus, vehiclePanel, vehicleMainMenu, setVehicleMainMenu, vehicleFocus}}>
            <Grid container direction="row" sx={{
                width: 'auto',
                position: 'absolute',
                zIndex: 1100,
            }}>
                <Grid item>
                    <Navbar />
                </Grid>
                <Grid item>
                    <App/>
                </Grid>
            </Grid>
            <VehicleAssign/>
            <Map/>
        </GlobalContext.Provider>
    )
}

export { Root, GlobalContext }