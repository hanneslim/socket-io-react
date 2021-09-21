import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Link } from 'react-router-dom'
import "./Commands.css"

function MapCommand({lat,lng}) {

    const position=[lat, lng]
    return (
        <div id="App-map">

            <div id="form" className="form-map">
                <div id="form-inner">

                    <h2>Have a look at the map position:</h2>
                        
                        
                        <div id="leaflet-container">            
                            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                                <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={position}>
                                    <Popup>
                                        Have a look. <br /> Here is your position.
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                        <div>
                            <Link to="/">
                            <button className="link-button">Go back to Login</button>
                        </Link>
                        </div>
                </div>
            </div>
            

        </div>
    )
}

export default MapCommand
