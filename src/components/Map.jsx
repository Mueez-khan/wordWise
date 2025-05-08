import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Map.module.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useCities } from "../contexts/CitiesContext";
import { useGeolocation } from "../hooks/useGoeLocation";
import Button from "./Button";
import { useUrlPosition } from "../hooks/useUrlPosition";

function Map() {
  const [mapLat , mapLng] = useUrlPosition();
  const {
    isLoading,
    position: geoLocationPosition,
    getPosition: getGeoLocationPosition,
  } = useGeolocation();
  
  const [position, setPosition] = useState([40, 0]);
  const { cities } = useCities();
 

  //using useEffect here
  useEffect(() => {
    if (mapLat && mapLng) setPosition([mapLat, mapLng]);

    
  }, [mapLat, mapLng]);

  useEffect(() => {
    if(geoLocationPosition) setPosition([geoLocationPosition.lat , geoLocationPosition.lng]);

    
  }, [geoLocationPosition]);

  
  return (
    <>
      <div className={style.mapContainer}>
       {!geoLocationPosition && ( <Button
          type="position"
          isLoading={isLoading}
          onClick={getGeoLocationPosition}
        >
          {isLoading ? "Loading..." : "Get your position"}
        </Button>)}
        <MapContainer
          // center={[mapLat , mapLng]}
          center={position}
          zoom={13}
          scrollWheelZoom={true}
          className={style.map}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
          {cities.map((city) => (
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
          <ChangePosition position={position}></ChangePosition>
          <DetectClick></DetectClick>
        </MapContainer>
      </div>
    </>
  );
}

function ChangePosition({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => {
      console.log(e);
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}

export default Map;
