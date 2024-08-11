import { useEffect, useState } from "react";
import { useCities } from "../hooks/useCities";
import styles from "./Map.module.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useUrlCityPosition } from "../hooks/useUrlCityPosition";
import { useNavigate } from "react-router-dom";

function Map() {
  const { cities } = useCities();
  const [centerPosition, setCenterPosition] = useState([51.505, -0.09]);

  const [lat, lng] = useUrlCityPosition();

  const navigate = useNavigate();

  useEffect(
    function () {
      if (!lat || !lng) return;

      setCenterPosition([Number(lat), Number(lng)]);
    },
    [lat, lng]
  );

  function handleMapClick(latlng) {
    setCenterPosition([latlng.lat, latlng.lng]);
    navigate(`/app/form?lat=${latlng.lat}&lng=${latlng.lng}`);
  }

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={centerPosition}
        zoom={6}
        style={{ width: "100%", height: "100%", borderRadius: ".3rem" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {cities?.length > 0 &&
          cities.map((city) => (
            <Marker
              position={[city.position.lat, city.position.lng]}
              key={city.id}
            >
              <Popup>
                <span>{city.emoji}</span>
                <span>{city.cityName}</span>
              </Popup>
            </Marker>
          ))}

        <Recenter pos={centerPosition} />
        <DetectClick onMapClick={handleMapClick} />
      </MapContainer>
    </div>
  );
}

function Recenter({ pos }) {
  const map = useMap();
  map.setView(pos);
}

function DetectClick({ onMapClick }) {
  useMapEvents({
    click: (e) => onMapClick(e.latlng),
  });
}

export default Map;
