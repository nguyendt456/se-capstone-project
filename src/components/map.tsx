import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import "leaflet/dist/leaflet.css"
import "../App.css"
import { Icon } from "leaflet";

const center = {
  lat: 10.771916,
  lng: 106.659877
};

const green_icon = new Icon({
  iconUrl: require("../resources/green_marker.svg").default,
  iconSize: [45, 45]
})

const red_icon = new Icon({
  iconUrl: require("../resources/red_marker.svg").default,
  iconSize: [45, 45]
})

const yellow_marker = new Icon({
  iconUrl: require("../resources/yellow_marker.svg").default,
  iconSize: [45, 45]
})

const listOfMarker = [
    {color: "green", capacity: 20, lat: 10.772648, lng: 106.660651},
    {color: "yellow", capacity: 50, lat: 10.773349, lng: 106.664747},
]

function Map() {
  return (
    <MapContainer center={center} zoom={16} scrollWheelZoom={true}>
      <TileLayer
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}@2x.png?key=s4GiDUyR8suA6wyDyBGP"
      />
      {listOfMarker.map((value)  => {
        switch(value.color) {
          case "green":
            return (<Marker position={[value.lat, value.lng]} icon={green_icon}><Popup><h2>Capacity of MCP: {value.capacity}%</h2></Popup></Marker>)
          case "red":
            return (<Marker position={[value.lat, value.lng]} icon={red_icon}><Popup><h2>Capacity of MCP: {value.capacity}%</h2></Popup></Marker>)
          case "yellow":
            return (<Marker position={[value.lat, value.lng]} icon={yellow_marker}><Popup><h2>Capacity of MCP: {value.capacity}%</h2></Popup></Marker>)
        }
      })}
    </MapContainer>
  )
}

export default Map