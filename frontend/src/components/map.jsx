import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// Import your custom location icon
import Location from "../assets/location.png";

// Import default marker images (backup in case you use defaults somewhere else)
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

// Custom location icon
const customPin = new L.Icon({
  iconUrl: Location,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const LeafletMap = () => {
  return (
    <MapContainer
      center={[10.709, 122.555]} // midpoint between SM City and Robinsons
      zoom={14}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Marker for SM City Iloilo */}
      <Marker position={[10.7209, 122.5453]} icon={customPin}>
        <Popup>📍 SM City Iloilo</Popup>
      </Marker>

      {/* Marker for Robinsons Place Iloilo (Main) */}
      <Marker position={[10.6962, 122.5653]} icon={customPin}>
        <Popup>📍 Robinsons Place Iloilo (Main)</Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;
