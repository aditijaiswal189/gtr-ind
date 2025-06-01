"use client"
// import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import { MapContainer, Marker, TileLayer } from "react-leaflet"
import L from "leaflet"

// Fix for default marker icons in React-Leaflet
delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })
  ._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
})

interface Location {
  coordinates: [number, number]
}

interface MapViewProps {
  location: Location
}

export default function MapView({ location }: MapViewProps) {
  return (
    <MapContainer
      center={location.coordinates}
      zoom={13}
      style={{ height: "100%", width: "100%", borderRadius: "8px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={location.coordinates} />
    </MapContainer>
  )
}
// Renamed to avoid conflict with the Location interface above
export interface DetailedLocation {
  id: string
  name: string
  address: string
  city: string
  country: string
  phone: string
  email: string
  coordinates: [number, number]
}
