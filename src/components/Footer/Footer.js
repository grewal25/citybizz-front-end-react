import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer'>
            <h3>Questions? Contact us.</h3>
            <div className="footer-links">
                <ul className="column">
                    <li><Link className="link" to='#'>Faqs</Link></li>
                    <li><Link className="link" to='#'>Investor</Link></li>
                    <li><Link className="link" to='#'>Info</Link></li>
                    <li><Link className="link" to='#'>News</Link></li>
                </ul>

                <ul className="column ">
                    <li><Link className="link" to='#'>Updates</Link></li>
                    <li><Link className="link" to='#'>Help</Link></li>
                    <li><Link className="link" to='#'>Terms of use</Link></li>
                    <li><Link className="link" to='#'>Contact us</Link></li>
                </ul>

                <ul className="column ">
                    <li><Link className="link" to='#'>Account</Link></li>
                    <li><Link className="link" to='#'>Buy gift cards</Link></li>
                    <li><Link className="link" to='#'>Redeem gift cards</Link></li>
                    <li><Link className="link" to='#'>Contact us</Link></li>
                </ul>

                <ul className="column ">
                    <h4><Link className="link" to="/">Citybizz</Link></h4>
                    <li><Link className="link" to='#'>Twitter</Link></li>
                    <li><Link className="link" to='#'>facebook</Link></li>
                    <li><Link className="link" to='#'>Instagram</Link></li>
                    <li><Link className="link" to='#'>You Tube</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer