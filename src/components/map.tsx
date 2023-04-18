import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../App.css";
import { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { useContext, useRef, useState } from "react";
import { ContextDataType, GlobalContext } from "./root";
import { Button, TextField } from "@mui/material";
import MarkerForm from "./mapmarker";

const center = {
    lat: 10.771916,
    lng: 106.659877,
};

const green_icon = new Icon({
    iconUrl: require("../resources/green_marker.svg").default,
    iconSize: [45, 45],
});

const red_icon = new Icon({
    iconUrl: require("../resources/red_marker.svg").default,
    iconSize: [45, 45],
});

const yellow_marker = new Icon({
    iconUrl: require("../resources/yellow_marker.svg").default,
    iconSize: [45, 45],
});

function Map() {
    const { globalContextHook }: ContextDataType = useContext(GlobalContext)
    let listOfMCPs = globalContextHook.dataHook.listOfMCPs
    const capacity = useRef<HTMLDivElement>(null)

    const handleInput = (targetIndex: number,newCapacity: number | undefined) => {
        if (newCapacity === undefined) return

        listOfMCPs.map((value, index) => {
            if (targetIndex === index) {
                listOfMCPs[index].capacity = newCapacity;
            }
        })
        globalContextHook.setDataHook((prev) => ({
            ...prev,
            listOfMCPs: listOfMCPs,
        }))
    }
    return (
        <MapContainer center={center} zoom={16} scrollWheelZoom={true}>
            <TileLayer
                attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}@2x.png?key=s4GiDUyR8suA6wyDyBGP"
            />
            <MarkerClusterGroup chunkedLoading>
                {listOfMCPs.map((value, index) => {
                    if (value.capacity >= 0 && value.capacity <= 33) {
                        return (
                            <Marker
                                position={[value.lat, value.lng]}
                                icon={green_icon}
                            >
                                <Popup>
                                    Name: {value.name}
                                    <p>Capacity of MCP: {value.capacity}%</p>
                                    <MarkerForm targetIndex={index}/>
                                </Popup>
                            </Marker>
                        );
                    }
                    if (value.capacity > 33 && value.capacity <= 66) {
                        return (
                            <Marker
                                position={[value.lat, value.lng]}
                                icon={yellow_marker}
                            >
                                <Popup>
                                    Name: {value.name}
                                    <p>Capacity of MCP: {value.capacity}%</p>
                                    <MarkerForm targetIndex={index}/>
                                </Popup>
                            </Marker>
                        );
                    }
                    if (value.capacity > 66 && value.capacity <= 100) {
                        return (
                            <Marker
                                position={[value.lat, value.lng]}
                                icon={red_icon}
                            >
                                <Popup>
                                    Name: {value.name}
                                    <p>Capacity of MCP: {value.capacity}%</p>
                                    <MarkerForm targetIndex={index}/>
                                </Popup>
                            </Marker>
                        );
                    }
                })}
            </MarkerClusterGroup>
        </MapContainer>
    );
}

export default Map;
