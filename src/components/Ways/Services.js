import React from 'react'

function Service(props) {
    
    return (
        <div>
            <ul className="service">
                {props.service.map((service) => (
                    <li className="service_list">
                        <img className="service_img" src={service.img} alt="pic" />
                        <div className='service-text'>
                            <p className="service_name">{service.name}</p>
                            <p className="service_description">{service.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Service 