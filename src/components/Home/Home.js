import React from 'react'
import './Home.css'
import Ways from '../Ways/Ways'
import Form from '../Form/Form'
import Info from '../Info/Info'

export default function Home() {
    return (
        <div>
            <div className='home-form'>
                <Form />
            </div>
            <Ways />    
            <Info />
        </div>
    )
}
