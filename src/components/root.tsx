import React, { createContext, useState } from 'react'
import Navbar from './navbar'
import App from '../App'
import Map from './map'
import { Collector, GlobalContextType, Janitor, MCPs, Person, Vehicle } from '../models/model'
import { Grid } from '@mui/material'

export interface ContextState {
    GlobalContextData: GlobalContextType
    setGlobalContextData: React.Dispatch<React.SetStateAction<GlobalContextType>>
}
const GlobalContext = createContext<ContextState>({GlobalContextData: {} as GlobalContextType, setGlobalContextData: () => {}});

const Root :React.FC = () => {
    const listOfMCPs : MCPs[] = [
        {name: "To Hien Thanh 1",capacity: 20, lat: 10.772648, lng: 106.660651},
        {name: "Thanh Thai 1", capacity: 50, lat: 10.773349, lng: 106.664747},
        {name: "Ly Thuong Kiet 1",capacity: 90, lat: 10.783545, lng: 106.654454},
        {name: "Ly Thuong Kiet 2",capacity: 80, lat: 10.775484, lng: 106.656745},
    ]
    const listOfJanitor : Janitor[] = [
        {name: "Nguyen Van A", birthday: "1980-01-15", phone_number: "0912345672"},
        {name: "Nguyen Van B", birthday: "1990-07-20", phone_number: "0871231231"},
        {name: "Nguyen Van C", birthday: "1979-12-01", phone_number: "0931237989"},
        {name: "Nguyen Van D", birthday: "1999-04-05", phone_number: "0342389128"},
        {name: "Nguyen Van E", birthday: "1992-09-09", phone_number: "0801231321"},
    ]
    const listOfCollector : Collector[] = [
        {name: "Tran Van L", birthday: "1974-01-15", phone_number: "0912345672"},
        {name: "Tran Van X", birthday: "1990-12-01", phone_number: "0121237989"},
        {name: "Tran Van Y", birthday: "1988-05-12", phone_number: "0349459128"},
        {name: "Tran Van Z", birthday: "1970-10-19", phone_number: "0562312343"},
    ]
    const listOfVehicle: Vehicle[] = [
        {name: "Xe tai 54A-123456", status: "Free", owner: {} as Person},
        {name: "Xe tai 54H-673423", status: "Free", owner: {} as Person},
        {name: "Xe tai 52G-552670", status: "Free", owner: {} as Person},
        {name: "Xe tai 59A-245897", status: "Free", owner: {} as Person},
        {name: "Xe tai 59B-887510", status: "Free", owner: {} as Person},
    ]
    const [ GlobalContextData, setGlobalContextData ] = useState<GlobalContextType>({
            listOfMCPs: listOfMCPs,
            listOfJanitor: listOfJanitor,
            listOfCollector: listOfCollector,
            listOfVehicle: listOfVehicle,
        });
      
    return (
        <GlobalContext.Provider value={{GlobalContextData, setGlobalContextData}}>
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
                {/* <Grid item sx={{
                    marginLeft: 'auto',
                    width: '30%',
                    height: 200,
                }}>
                    <p>ABC</p>
                </Grid> */}
            </Grid>
            <Map/>
        </GlobalContext.Provider>
    )
}

export { Root, GlobalContext }