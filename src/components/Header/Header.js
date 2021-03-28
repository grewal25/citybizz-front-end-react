import React, { useState } from 'react'
import './Header.css'
import Home from '../Home/Home'
import Services from '../../pages/Services/Services'
import Help from '../../pages/Help/Help'
import SignIn from '../../pages/SignIn/Signin'
import { Link, Switch, Route } from 'react-router-dom'

function Header() {
    const [isContainer, setContainer] = useState(true)

    const handleChange = () => {
        setContainer(false);
    };

    const handleHomeChange = () => {
        setContainer(true);
    };

    return (
        <>
            <div className="heading">
                <div className={isContainer ? 'container' : 'container-2'}>
                    <Link onClick={handleHomeChange} className="header-name"  to="/">City<span>Bizz</span></Link>
                    <div className="header-icons" onClick={handleChange}>
                        <Link className="header-link" to="/services">Services</Link>
                        <Link className="header-link" to='/help'>Help</Link>
                        <Link className="header-link" to='/signin'>Signin</Link>
                    </div>
                </div>
            </div>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/services">
                    <Services />
                </Route>
                <Route path="/help">
                    <Help />
                </Route>
                <Route path="/signin">
                    <SignIn />
                </Route>
            </Switch>
        
        </>
    )
}

export default Header