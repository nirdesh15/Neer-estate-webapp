import React from 'react';
import './map.scss';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Pin from '../pin/pin';

function Map({ items }) { // Receive items as props
    const center = [27.7172, 85.324]; // Kathmandu coordinates

    return (
        <MapContainer center={center} zoom={12} scrollWheelZoom={false} className="map">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
             {items.map(item => (
                <Pin item={item} key={item.id} />
            ))};
           
        </MapContainer>
    );
}

export default Map;
