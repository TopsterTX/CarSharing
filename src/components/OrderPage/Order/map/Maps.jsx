import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import './Maps.scss'

export function Maps(){
    return(
        <section className="order__map">
            <Map 
                google={this.props.google}
                zoom={8}
                initialCenter={{lat: 9.761927, lng: 79.95244}}    
            >
                <Marker position={{lat: 9.761927, lng:79.95244}}/>
            </Map>
        </section>
    )
}

export default GoogleApiWrapper({
    apiKey: 'API_KEY',
})(Maps)