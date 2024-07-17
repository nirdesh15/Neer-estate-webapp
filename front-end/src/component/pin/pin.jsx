import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import './pin.scss';
import { Link } from 'react-router-dom';
import { mapIcon } from './icon';

function Pin({ item }) { // Receive item as props
    return (
        <Marker position={[item.latitude, item.longitude]} icon={mapIcon}>
            <Popup>
                <div className="popupContainer">
                    <img src={item.images} alt="" />
                    <div className="textContainer">
                        <Link to={`/${item.id}`}>{item.title}</Link>
                        <span>{item.bedroom} bedroom</span>
                        <b>${item.price}</b>
                    </div>  
                </div>
            </Popup>
        </Marker>
    );
}

export default Pin;
