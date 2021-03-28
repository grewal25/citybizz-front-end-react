import React from 'react'
import data from './WaysData.json'
import Services from './Services'
import './Ways.css'

function Ways() {

    const services = data.services;

    return (
        <div className="service_container">
            <Services service={services} />
        </div>
    )
}

export default Ways 