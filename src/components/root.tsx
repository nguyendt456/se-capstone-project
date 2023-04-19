import React, { createContext, useState } from "react";
import Navbar from "./navbar";
import App from "../App";
import Map from "./map";
import {
    Collector,
    GlobalContextType,
    Janitor,
    MCPs,
    Person,
    Vehicle,
} from "../models/model";
import { Grid } from "@mui/material";
import VehicleAssign from "./vehiclepanel";
import TaskAssign from "./taskassign";
import TaskPanel from "./taskpanel";

export interface StateHook<T> {
    dataHook   : T;
    setDataHook: React.Dispatch<React.SetStateAction<T>>;
}

export interface ContextDataType {
    globalContextHook  : StateHook<GlobalContextType>
    vehiclePanelHook   : StateHook<boolean>
    vehicleFocusHook   : StateHook<Vehicle>
    vehicleMainMenuHook: StateHook<boolean>
    janitorMainMenuHook: StateHook<boolean>
    janitorPanelHook   : StateHook<boolean>
    janitorFocusHook   : StateHook<Janitor>
}

const GlobalContext = createContext<ContextDataType>({
    globalContextHook  : {} as StateHook<GlobalContextType>,
    vehiclePanelHook   : {} as StateHook<boolean>,
    vehicleFocusHook   : {} as StateHook<Vehicle>,
    vehicleMainMenuHook: {} as StateHook<boolean>,
    janitorMainMenuHook: {} as StateHook<boolean>,
    janitorPanelHook   : {} as StateHook<boolean>,
    janitorFocusHook   : {} as StateHook<Janitor>,
});

const Root: React.FC = () => {
    let listOfMCPs: MCPs[] = [
        {
            name    : "To Hien Thanh 1",
            capacity: 20,
            lat     : 10.772648,
            lng     : 106.660651,
        },
        { name: "Thanh Thai 1", capacity: 50, lat: 10.773349, lng: 106.664747 },
        {
            name    : "Ly Thuong Kiet 1",
            capacity: 90,
            lat     : 10.783545,
            lng     : 106.654454,
        },
        {
            name    : "Ly Thuong Kiet 2",
            capacity: 80,
            lat     : 10.775484,
            lng     : 106.656745,
        },
    ];
    let listOfJanitor: Janitor[] = [
        {
            name: "Nguyen Van A",
            birthday: "1980-01-15",
            phone_number: "0912345672",
        },
        {
            name: "Nguyen Van B",
            birthday: "1990-07-20",
            phone_number: "0871231231",
        },
        {
            name: "Nguyen Van C",
            birthday: "1979-12-01",
            phone_number: "0931237989",
        },
        {
            name: "Nguyen Van D",
            birthday: "1999-04-05",
            phone_number: "0342389128",
        },
        {
            name: "Nguyen Van E",
            birthday: "1992-09-09",
            phone_number: "0801231321",
        },
    ];
    let listOfCollector: Collector[] = [
        {
            name: "Tran Van L",
            birthday: "1974-01-15",
            phone_number: "0912345672",
        },
        {
            name: "Tran Van X",
            birthday: "1990-12-01",
            phone_number: "0121237989",
        },
        {
            name: "Tran Van Y",
            birthday: "1988-05-12",
            phone_number: "0349459128",
        },
        {
            name: "Tran Van Z",
            birthday: "1970-10-19",
            phone_number: "0562312343",
        },
    ];
    let listOfVehicle: Vehicle[] = [
        { name: "Xe tai 54A-123456", status: "Free", owner: {} as Person },
        { name: "Xe tai 54H-673423", status: "Free", owner: {} as Person },
        { name: "Xe tai 52G-552670", status: "Free", owner: {} as Person },
        { name: "Xe tai 59A-245897", status: "Free", owner: {} as Person },
        { name: "Xe tai 59B-887510", status: "Free", owner: {} as Person },
    ];
    const [GlobalContextData, setGlobalContextData] = useState<GlobalContextType>({
        listOfMCPs     : listOfMCPs,
        listOfJanitor  : listOfJanitor,
        listOfCollector: listOfCollector,
        listOfVehicle  : listOfVehicle,
    });
    const [vehiclePanel, setVehiclePanel]       = useState(false)
    const [vehicleFocus, setVehicleFocus]       = useState({} as Vehicle)
    const [vehicleMainMenu, setVehicleMainMenu] = useState(false)
    const [janitorMainMenu, setJanitorMainMenu] = useState(false)
    const [janitorPanel, setJanitorPanel]       = useState(false)
    const [janitorFocus, setJanitorFocus]       = useState({} as Janitor)

    const globalContextHook: StateHook<GlobalContextType> = {
        dataHook   : GlobalContextData,
        setDataHook: setGlobalContextData,
    };
    const vehiclePanelHook: StateHook<boolean> = {
        dataHook   : vehiclePanel,
        setDataHook: setVehiclePanel,
    };
    const vehicleFocusHook: StateHook<Vehicle> = {
        dataHook   : vehicleFocus,
        setDataHook: setVehicleFocus,
    };
    const vehicleMainMenuHook: StateHook<boolean> = {
        dataHook   : vehicleMainMenu,
        setDataHook: setVehicleMainMenu,
    };
    const janitorMainMenuHook: StateHook<boolean> = {
        dataHook   : janitorMainMenu,
        setDataHook: setJanitorMainMenu,
    }
    const janitorPanelHook: StateHook<boolean> = {
        dataHook   : janitorPanel,
        setDataHook: setJanitorPanel,
    }
    const janitorFocusHook: StateHook<Janitor> = {
        dataHook   : janitorFocus,
        setDataHook: setJanitorFocus,
    }

    return (
        <GlobalContext.Provider
            value={{
                globalContextHook,
                vehiclePanelHook,
                vehicleFocusHook,
                vehicleMainMenuHook,
                janitorMainMenuHook,
                janitorPanelHook,
                janitorFocusHook,
            }}
        >
            <Grid
                container
                direction="row"
                sx={{
                    width: "auto",
                    position: "absolute",
                    zIndex: 1100,
                }}
            >
                <Grid item>
                    <Navbar/>
                </Grid>
                <Grid item sx={{width: 'auto'}}>
                    <App/>
                </Grid>
            </Grid>
            <VehicleAssign/>
            <TaskPanel/>
            <Map/>
        </GlobalContext.Provider>
    );
};

export { Root, GlobalContext };
