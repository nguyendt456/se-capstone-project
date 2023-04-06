import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { MarkerF } from '@react-google-maps/api';

const green_marker = require('../resources/green_marker.svg').default
const yellow_marker = require('../resources/yellow_marker.svg').default
const red_marker = require('../resources/red_marker.svg').default

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 10.771916,
  lng: 106.659877
};

const listOfMarker = [
    {color: "green", lat: 10.774515, lng: 106.664342},
    {color: "yellow", lat: 10.771390, lng: 106.659877},
]

const style = {
    disableDefaultUI: true, // disables all default controls
    styles: [
    {
        elementType: "labels",
        stylers: [
        { visibility: "off" }, // hides all points of interest icons
        ],
    },
    ],
}

function Map() {
    const row = []
    for(let i = 0; i < listOfMarker.length; i++) {
        if (listOfMarker[i].color === "green") {
            row.push(
                <MarkerF
                    position={{lat: listOfMarker[i].lat, lng: listOfMarker[i].lng}}
                    icon={{
                        url: green_marker,
                    }}
                />
            )
        }
        if (listOfMarker[i].color === "yellow") {
            row.push(
                <MarkerF
                    position={{lat: listOfMarker[i].lat, lng: listOfMarker[i].lng}}
                    icon={{
                        url: yellow_marker,
                    }}
                />
            )
        }
        if (listOfMarker[i].color === "red") {
            row.push(
                <MarkerF
                    position={{lat: listOfMarker[i].lat, lng: listOfMarker[i].lng}}
                    icon={{
                        url: yellow_marker,
                    }}
                />
            )
        }
    }
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyB-H9MPA8c64SSuoOhhn5W6ZcGQH0pQx9Q"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        options={style}
        center={center}
        zoom={15}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        {row}
      </GoogleMap>
    </LoadScript>
  )
}

export default Map