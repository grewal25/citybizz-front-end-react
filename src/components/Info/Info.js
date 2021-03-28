import React from 'react'
import data from './Data.json'
import './Info.css'

function Info() {

    const sections = data.sections

    return (
        <div>
            <ul className='infos'>
                {sections.map((info) => (
                    <li className={`info info-${info.id}`}>
                        <div className={`info-text info-text-${info.id}`}>
                            <h2 className="headline">{info.headline}</h2>
                            <p className="description">{info.description}</p>
                        </div>
                        <img src={info.img}  className={`info-img info-img-${info.id}`} alt='img' />
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Info
