import React from 'react';
import mapMarkerImg from '../images/map-marker.svg';
import {Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/pages/orphanages-map.css';

function OrphanegesMap() {
    return (
        <div id='page-map'>
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Guarujá</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>
            
            <Map 
                center={[-23.986068,-46.2762836]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url='http://a.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            </Map>

            <Link to='' className='create-orphanege'>
                <FiPlus size={32} color='#fff' />            
            </Link>
        </div>
    );
}

export default OrphanegesMap;  