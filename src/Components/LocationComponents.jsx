



import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import axios from 'axios';

// Fix the default icon issue with Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const LocationComponents = () => {
  const [position, setPosition] = useState(null);
  const [city, setCity] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setPosition(coords);

        // Reverse Geocoding to get city name
        const apiKey = 'YOUR_OPENCAGE_API_KEY'; // Replace with your OpenCage API key
        const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${coords.lat}+${coords.lng}&key=${apiKey}`;

        try {
          const response = await axios.get(apiUrl);
          const components = response.data.results[0].components;
          setCity(components.city || components.town || components.village || 'Unknown location');
        } catch (error) {
          console.error('Error fetching city name:', error);
        }
      },
      (error) => {
        console.error(error);
      },
      { enableHighAccuracy: true }
    );
  }, []);

  return (
    <div>
      {position ? (
        <>
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Your Current Location:</h2>
            {city ? <p>City: {city}</p> : <p>Loading city name...</p>}
          </div>
          <MapContainer center={position} zoom={13} style={{ height: '80vh', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>You are here</Popup>
            </Marker>
          </MapContainer>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default LocationComponents;

